import { useQuery } from "@tanstack/react-query";
import { FC, useState } from "react";
import { useParams } from "react-router-dom";
import projectService from "../../services/projectService";
import BackButton from "../../components/backButton/BackButton";
import Tools from "../../components/proejctPage/tools/Tools";
import { useTranslate } from "../../hooks/useTranslate";
import Other from "../../components/proejctPage/other/Other";
import Modal from "../../components/ui/modal/Modal";
import Skeleton from "../../components/ui/skeleton/Skeleton";

const ProjectPage: FC = () => {
  const { id } = useParams();
  const translate = useTranslate();
  const [isImageOpen, setIsImageOpen] = useState(false);
  const [viewingImage, setViewingImage] = useState("");

  const { data, isFetching } = useQuery({
    queryKey: ["projects", id],
    queryFn: () => projectService.getById(+id!),
    select: ({ data }) => data,
    enabled: !!id,
  });

  const onClickImage = (image: string) => {
    setViewingImage(image);
    setIsImageOpen(true);
  };

  const isLoading = !data || isFetching;

  return (
    <>
      <BackButton />
      {isLoading ? (
        <div className="h-[512px] tb:h-[476px] bmb:h-[360px]">
          <Skeleton width="100%" height="100%" />
        </div>
      ) : (
        <>
          <img
            src={data?.image}
            alt={`${data?.title}-blur-image`}
            className="absolute top-0 left-0 right-0 w-full h-[512px] blur-md object-cover object-center z-[-1] tb:hidden"
          />
          <button
            onClick={() => onClickImage(data!.image)}
            className="container block h-[512px] text-center tb:max-w-full tb:px-0 tb:h-[476px] bmb:h-[360px]"
          >
            <img
              src={data?.image}
              alt={data?.title}
              className="w-full h-full object-cover object-center"
            />
          </button>
        </>
      )}
      <div className="container pt-50 pb-[180px] flex justify-between gap-[37px] blt:flex-col blt:pb-40">
        <div className="flex-[0_1_535px] blt:flex-auto">
          {isLoading ? (
            <div className="mb-50 h-[103px] blt:w-[180px] blt:h-[57px] blt:mx-auto">
              <Skeleton width="100%" height="100%" className="rounded-[20px]" />
            </div>
          ) : (
            <h1 className="mb-50 border border-black rounded-[20px] py-[6px] text-center text-[64px] leading-[90px] font-bold tb:px-20 tb:py-0 tb:text-[40px] tb:leading-[56px] tb:w-fit tb:mx-auto">
              {data && translate(data, "title")}
            </h1>
          )}
          <Tools tools={data?.skills} isLoading={isLoading} />
        </div>
        <Other id={+id!} spec={data?.specialization} />
      </div>
      <Modal
        isOpen={isImageOpen}
        close={() => setIsImageOpen(false)}
        className="p-50 tb:p-20"
        contentClassName="h-full"
      >
        <img
          src={viewingImage}
          alt="full-image"
          className="h-full object-contain"
        />
      </Modal>
    </>
  );
};

export default ProjectPage;
