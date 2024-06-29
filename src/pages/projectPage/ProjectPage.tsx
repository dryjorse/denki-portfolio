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
        <Skeleton width="100%" height={512} />
      ) : (
        <>
          <img
            src={data?.image}
            alt={`${data?.title}-blur-image`}
            className="absolute top-0 left-0 right-0 w-full h-[512px] blur-md object-cover object-center z-[-1]"
          />
          <button
            onClick={() => onClickImage(data!.image)}
            className="container block h-[512px] text-center"
          >
            <img
              src={data?.image}
              alt={data?.title}
              className="w-full h-full object-cover object-center"
            />
          </button>
        </>
      )}
      <div className="container pt-50 pb-[180px] flex justify-between gap-[37px]">
        <div className="flex-[0_1_535px]">
          {isLoading ? (
            <Skeleton
              width="100%"
              height={103}
              rounded={20}
              className="mb-50"
            />
          ) : (
            <h1 className="mb-50 border border-black rounded-[20px] py-[6px] text-center text-[64px] leading-[90px] font-bold">
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
        className="p-50"
        contentClassName="h-full"
      >
        <img src={viewingImage} alt="full-image" className="h-full" />
      </Modal>
    </>
  );
};

export default ProjectPage;
