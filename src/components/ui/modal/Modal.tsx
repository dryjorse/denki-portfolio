import { FC, PropsWithChildren, useEffect } from "react";
import clsx from "clsx";

interface IModalProps {
  isOpen: boolean;
  close: () => void;
  className?: string;
  contentClassName?: string;
}

const Modal: FC<PropsWithChildren<IModalProps>> = ({
  isOpen,
  close,
  children,
  className = "",
  contentClassName = "",
}) => {
  useEffect(() => {
    if (isOpen) document.body.style.overflow = "hidden";
    else document.body.style.overflow = "";

    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  return (
    <div
      onClick={close}
      className={clsx(
        "fixed top-0 left-0 w-full h-screen flex justify-center items-center bg-[rgba(0,0,0,0.85)] z-50 opacity-0 pointer-events-none trans-def",
        className,
        { "opacity-100 pointer-events-auto": isOpen }
      )}
    >
      <div
        onClick={(e) => e.stopPropagation()}
        className={clsx("rounded-[24px] bg-gray", contentClassName)}
      >
        {children}
      </div>
    </div>
  );
};

export default Modal;
