import { useEffect } from "react";
import ReactDom from "react-dom";
import { IoClose } from "react-icons/io5";
import { Field, Formik, Form, ErrorMessage } from "formik";
import { ValidationSchemaAddQuizCategory } from "../../../../validation/validationSchemaAddQuizCategory";
import { AddQuizCategoryFieldType } from "../../adminTypes/types";
import { useEditQuizCategoryMutation } from "../../../../redux/services/myQuizCategoryApiEndpoints";
import { useSelector } from "react-redux";
import { RootState } from "../../../../redux/store";

type Props = {
  setShowModal: (a: boolean) => void;
};

const EditQuizCategoryModal = ({ setShowModal }: Props) => {
  const initialValues = useSelector(
    (state: RootState) => state.editQuizCategoryReducer
  );
  const [editQuizCategory] = useEditQuizCategoryMutation();

  useEffect(() => {
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = "auto";
    };
  }, []);

  const closeModal = (e: React.MouseEvent<HTMLDivElement | SVGElement>) => {
    if (e.target === e.currentTarget) {
      setShowModal(false);
    }
  };
  /**
   * when add button is clicked form is submitted with
   * @param values
   */
  const onSubmit = async (values: AddQuizCategoryFieldType) => {
    await editQuizCategory(values);
    setShowModal(false);
  };
  return ReactDom.createPortal(
    <>
      <div
        onClick={closeModal}
        className="modal-background z-40 fixed inset-0 bg-dark bg-opacity-[40%] flex justify-center items-center"
      >
        <div className="modal-wrapper relative z-50  bg-[#ffffff] rounded-xl p-6 flex flex-col gap-4 w-[900px] ">
          <div
            className="absolute cursor-pointer m-2 p-[3px] right-1 top-1 text-2xl "
            onClick={() => setShowModal(false)}
          >
            <IoClose />
          </div>
          <div className="w-full">
            <div className="flex flex-col justify-start items-center pb-[20px]">
              <h1 className="text-primary font-medium text-[24px] leading-[18px] ">
                Edit Question
              </h1>
            </div>
            <div className="border-2 p-5 border-primary-light rounded-xl form-container relative">
              <Formik
                initialValues={initialValues}
                onSubmit={onSubmit}
                validationSchema={ValidationSchemaAddQuizCategory}
              >
                <Form className="flex flex-col gap-6">
                  <div className="grid grid-cols-2 gap-6">
                    {/* title input field and error message */}
                    <div className="flex flex-col gap-6">
                      <div>
                        <div className="flex flex-col gap-1 ">
                          <label
                            htmlFor="title"
                            className="text-md text-dark ps-1"
                          >
                            Title
                          </label>
                          <Field
                            type="text"
                            id="title"
                            autoComplete="current-title"
                            name="title"
                            className="p-1 px-2 rounded-lg w-full  border-2 border-primary-light hover:outline hover:outline-2 hover:outline-offset-[-2px] hover:outline-primary"
                          />
                        </div>
                        <ErrorMessage
                          className=" text-red-500 text-xs  absolute mt-1"
                          component="div"
                          name="title"
                        />
                      </div>
                    </div>
                    {/* slug input field and error message */}
                    <div className="flex  flex-col gap-3">
                      <div>
                        <div className="flex flex-col gap-1">
                          <label
                            htmlFor="slug"
                            className="text-md text-dark ps-1"
                          >
                            Slug
                          </label>
                          <Field
                            type="text"
                            id="slug"
                            autoComplete="current-slug"
                            name="slug"
                            className="p-1 px-2 rounded-lg w-full  border-2 border-primary-light hover:outline hover:outline-2 hover:outline-offset-[-2px] hover:outline-primary"
                          />
                        </div>
                        <ErrorMessage
                          className="text-red-500 text-xs absolute mt-1"
                          component="div"
                          name="slug"
                        />
                      </div>
                    </div>
                  </div>
                  {/* description textarea field and error message */}

                  {/* submit button */}
                  <button
                    type="submit"
                    className="bg-dark text-primary-light rounded-lg text-md font-medium py-button-padding-y px-button-padding-x outline-offset-[-2px] hover:bg-white hover:outline hover:outline-2 hover:outline-primary hover:text-dark mt-3 w-[150px]"
                  >
                    Add
                  </button>
                </Form>
              </Formik>
            </div>
          </div>
        </div>
      </div>
    </>,
    document.getElementById("portal-admin")!
  );
};

export default EditQuizCategoryModal;
