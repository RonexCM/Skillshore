import { useEffect } from "react";
import ReactDom from "react-dom";
import { IoClose } from "react-icons/io5";
type Props = {
  setShowModal: (a: boolean) => void;
};

const DeleteQuizModal = ({ setShowModal }: Props) => {
  useEffect(() => {
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = "auto";
    };
  }, []);

  const handleDelete = () => {
    //hit delete api
    setShowModal(false);
  };

  const closeModal = (e: React.MouseEvent<HTMLDivElement | SVGElement>) => {
    if (e.target === e.currentTarget) {
      setShowModal(false);
    }
  };
  return ReactDom.createPortal(
    <>
      <div
        onClick={closeModal}
        className="modal-background z-40 fixed inset-0 bg-dark bg-opacity-[40%] flex justify-center items-center"
      >
        <div className="modal-wrapper relative z-50 w-[400px] bg-[#ffffff] rounded-xl p-4 flex flex-col gap-4">
          <IoClose
            className="absolute cursor-pointer m-2 right-1 top-1 text-2xl"
            onClick={closeModal}
          />

          <h1 className=" text-center">Delete action cannot be reverted!</h1>
          <button
            className=" bg-red-500 hover:bg-error text-red-100 p-2 rounded-md"
            onClick={handleDelete}
          >
            delete
          </button>
        </div>
      </div>
    </>,
    document.getElementById("portal-admin")!
  );
};

export default DeleteQuizModal;
