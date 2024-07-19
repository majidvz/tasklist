import { FC } from "react";
import { IModalUIKit } from "./model";
import { useAppContext } from "../../contexts";

export const ModalUIKit: FC<IModalUIKit> = ({ isOpen, children }) => {
  const { setIsModalOpened } = useAppContext();

  const closeModal = () => {
    setIsModalOpened(false);
  };

  const handleWrapperClick = (e: React.MouseEvent<HTMLDivElement>) => {
    e.stopPropagation();
  };

  return (
    <div
      className={`flex flex-col justify-center items-center bg-neutral-950/[.45] w-[100vw] h-[100vh] fixed top-0 left-0 right-0 bottom-0 z-10 transition ease-in-out ${
        isOpen ? "scale-100" : "scale-0"
      }`}
      onClick={closeModal}
    >
      <div
        className="wrapper bg-white w-[600px] p-[16px] rounded-[16px]"
        onClick={handleWrapperClick}
      >
        {children}
      </div>
    </div>
  );
};
