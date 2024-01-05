import { ReactElement } from "react";
import ReactDom from "react-dom";

type Props = {
  handleModal: () => void;
  isOpen: boolean;
  children: ReactElement | ReactElement[];
};

const AdminModal = ({ children, handleModal, isOpen }: Props) => {
  if (!isOpen) return null;
  return ReactDom.createPortal(
    <div className="fixed inset-0 bg-dark bg-opacity-[40%] flex justify-center items-center">
      <div className="w-72  bg-[#ffffff] rounded-xl p-8 flex flex-col gap-3">
        {children}
        <button
          className="bg-dark text-primary-light rounded-lg text-xs font-medium py-button-padding-y px-button-padding-x outline-offset-[-2px] hover:bg-white hover:outline hover:outline-2 hover:outline-primary hover:text-dark"
          onClick={handleModal}
        >
          Add
        </button>
      </div>
    </div>,
    document.getElementById("portal-admin")!
  );
};

export default AdminModal;
