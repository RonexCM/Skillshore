import ReactDom from "react-dom";
import { Field, Formik, Form, ErrorMessage } from "formik";

import { ValidationSchemaAddQuestion } from "../../../validation/validationSchema";
import { AddQuestionFieldType } from "../../list/types";
import closeBtn from "../../../assets/close.svg";

type Props = {
  handleModal: () => void;
  isOpen: boolean;
};

const AdminAddQuizCategoryModal = ({ handleModal, isOpen }: Props) => {
  if (!isOpen) return null;

  const initialValues: AddQuestionFieldType = {
    category_id: 0n,
    title: "",
    slug: "",
    description: "",
    options: [],
    answer: "",
    weightage: "",
    status: false,
  };

  const onSubmit = () => {
    handleModal();
    console.log("submitted");
  };
  const modalBackgroundClicked = (event: React.MouseEvent<HTMLDivElement>) => {
    if (event.target === event.currentTarget) {
      handleModal();
    }
  };

  return ReactDom.createPortal(
    <div
      onClick={modalBackgroundClicked}
      className="modal-background z-40 fixed inset-0 bg-dark bg-opacity-[40%] flex justify-center items-center"
    >
      <div className="modal-wrapper relative z-50 w-[440px] bg-[#ffffff] rounded-xl p-12 pt-0 flex flex-col gap-4">
        <img
          onClick={handleModal}
          className="absolute right-5 top-5 cursor-pointer"
          src={closeBtn}
          alt="close-button"
        />
        <div className="modal-title p-6 border-primary-light border-b-2">
          <h1 className="text-center text-xl font-semibold text-dark">
            Add New Quiz Category
          </h1>
        </div>
        <div>
          <Formik
            initialValues={initialValues}
            onSubmit={onSubmit}
            validationSchema={ValidationSchemaAddQuestion}
          >
            <Form className="flex flex-col gap-4">
              {/* title input field and error message */}
              <div className="flex flex-col gap-1">
                <div className="flex gap-3">
                  <label htmlFor="title" className="text-md">
                    Title:
                  </label>
                  <Field
                    type="text"
                    id="title"
                    autoComplete="current-title"
                    name="title"
                    className="p-1 rounded-lg outline outline-2 outline-primary-light focus:outline-primary w-full"
                  />
                </div>
                <ErrorMessage
                  className="text-red-500 text-xs"
                  component="div"
                  name="title"
                />
              </div>
              {/* slug input field and error message */}
              <div className="flex flex-col gap-1">
                <div className="flex gap-3">
                  <label htmlFor="slug" className="text-md">
                    Slug:
                  </label>
                  <Field
                    type="text"
                    id="slug"
                    autoComplete="current-slug"
                    name="slug"
                    className="p-1 rounded-lg outline outline-2 outline-primary-light focus:outline-primary w-full"
                  />
                </div>
                <ErrorMessage
                  className="text-red-500 text-xs"
                  component="div"
                  name="slug"
                />
              </div>

              {/* submit button */}
              <button
                type="submit"
                className="bg-dark text-primary-light rounded-lg text-xs font-medium py-button-padding-y px-button-padding-x outline-offset-[-2px] hover:bg-white hover:outline hover:outline-2 hover:outline-primary hover:text-dark"
              >
                Add
              </button>
            </Form>
          </Formik>
        </div>
      </div>
    </div>,
    document.getElementById("portal-admin")!
  );
};

export default AdminAddQuizCategoryModal;
