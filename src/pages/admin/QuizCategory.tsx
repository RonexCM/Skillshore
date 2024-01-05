import { useState } from "react";
import AdminModal from "./modals/AdminModal";

const QuizCategory = () => {
  const [isOpen, setIsOpen] = useState(false);
  const handleModal = () => {
    setIsOpen(!isOpen);
  };
  return (
    <div className="basis-full flex flex-col py-6 px-[64px] gap-20">
      <div className="flex justify-between ">
        <h1 className="text-primary font-medium text-2xl ">Quiz Category</h1>
        <button
          className="bg-dark text-primary-light rounded-lg text-xs font-medium py-button-padding-y px-button-padding-x outline-offset-[-2px] hover:bg-white hover:outline hover:outline-2 hover:outline-primary hover:text-dark"
          onClick={handleModal}
        >
          +Add Quiz Category
        </button>
      </div>
      <div className=" h-[300px] outline outline-2 outline-primary-light w-full rounded-xl text-center">
        List of Quiz Category
      </div>
      <AdminModal handleModal={handleModal} isOpen={isOpen}>
        <h1>Modal for Quiz Category</h1>
        <p className="text-xs">
          Input fields should be added here and when add button is clicked a
          POST method should be executed to the endpoint provided
        </p>
      </AdminModal>
    </div>
  );
};

export default QuizCategory;
