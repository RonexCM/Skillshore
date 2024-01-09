import userProfileValidationSchema from "../validation/userProfileValidationSchema";
import { TUserDetails, editUserDetails } from "../pages/list/types";
import { Formik, Field, Form, ErrorMessage } from "formik";
import closeIcon from "../assets/images/close.svg";
type Props = {
  isOpen: boolean;
  onClose: () => void;
  userDetails: TUserDetails;
  refresh: (data: TUserDetails[]) => void;
};
const Modal = ({ isOpen, onClose, userDetails, refresh }: Props) => {
  const initialValues = {
    // resume: userDetails.resume,
    name: userDetails.name,
    // profile: userDetails.profile,
    description: userDetails.description,
    mail: userDetails.mail,
    phone: userDetails.phone,
    // experience: userDetails.experience,
    // language: userDetails.language,
    available: userDetails.available,
    // role: userDetails.role,
    // salary: userDetails.salary,
    // id: userDetails.id,
    // expected: userDetails.expected,
  };

  const handleSubmit = (values: editUserDetails) => {
    const apiUrl = `https://657ad086394ca9e4af12b9e0.mockapi.io/student/${userDetails.id}`;

    fetch(apiUrl)
      .then((response) => {
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        return response.json();
      })
      .then((currentData) => {
        const updatedData = {
          ...currentData,
          name:
            values.name !== currentData.name ? values.name : currentData.name,
          description:
            values.description !== currentData.description
              ? values.description
              : currentData.description,
          mail:
            values.mail !== currentData.mail ? values.mail : currentData.mail,
          phone:
            values.phone !== currentData.phone
              ? values.phone
              : currentData.phone,
          available:
            values.available !== currentData.available
              ? values.available
              : currentData.available,
        };

        refresh([updatedData]);

        return fetch(apiUrl, {
          method: "PUT",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(updatedData),
        });
      })
      .then((putResponse) => {
        if (!putResponse.ok) {
          throw new Error("Network response was not ok during PUT request");
        }

        onClose();
      })
      .catch((error) => {
        console.error("Error updating data:", error);
      });
  };

  return (
    <>
      {isOpen && (
        <div className="z-50 fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-white p-6 rounded shadow-md max-h-[80vh] overflow-auto">
          {/* <button
            className="absolute top-4 left-4 bg-red-500 text-white px-4 py-2 rounded"
            onClick={onClose}
          >
            Close
          </button> */}
          <Formik
            initialValues={initialValues}
            onSubmit={handleSubmit}
            validationSchema={userProfileValidationSchema}
          >
            <Form className="flex flex-col items-center h-max w-[500px] mx-8 mt-7">
              <div className="flex flex-col h-[130px] mt-[22px] mb-[-30px] w-full">
                <label htmlFor="name">Name</label>
                <Field
                  type="text"
                  id="name"
                  name="name"
                  className="w-full h-14 text-clip  bg-white rounded-lg border-2 border-indigo-100"
                />
                <ErrorMessage
                  className="text-[13px] text-error"
                  name="name"
                  component="div"
                />
              </div>
              <div className="flex flex-col h-[130px] mt-[22px] mb-[-30px] w-full">
                <label htmlFor="description">Description</label>
                <Field
                  as="textarea"
                  id="description"
                  name="description"
                  className="w-full h-[80px] bg-white rounded-lg border-2 border-indigo-100"
                />
                <ErrorMessage
                  className="text-[13px] text-error"
                  name="description"
                  component="div"
                />
              </div>
              <div className="flex flex-col h-[130px] mt-[22px] mb-[-30px] w-full">
                <label htmlFor="name">Mail</label>
                <Field
                  type="email"
                  id="mail"
                  name="mail"
                  readOnly
                  className="w-full h-14 bg-white rounded-lg border-2 border-indigo-100"
                />
                <ErrorMessage
                  className="text-[13px] text-error"
                  name="mail"
                  component="div"
                />
              </div>
              <div className="flex flex-col h-[130px] mt-[22px] mb-[-30px] w-full">
                <label htmlFor="name">Phone</label>
                <Field
                  type="text"
                  id="phone"
                  name="phone"
                  className="w-full h-14 bg-white rounded-lg border-2 border-indigo-100"
                />
                <ErrorMessage
                  className="text-[13px] text-error"
                  name="phone"
                  component="div"
                />
              </div>
              <div className="flex flex-col h-[130px] mt-[22px] mb-[-30px] w-full">
                <label htmlFor="name">Availabilty</label>
                <Field
                  type="text"
                  id="available"
                  name="available"
                  className="w-full h-14 bg-white rounded-lg border-2 border-indigo-100"
                />
                <ErrorMessage
                  className="text-[13px] text-error"
                  name="phone"
                  component="div"
                />
              </div>
              <img
                src={closeIcon}
                className=" px-4 py-2 rounded mt-4 absolute top-0 right-4 cursor-pointer h-9"
                onClick={onClose}
              />
              <button
                type="submit"
                className="text-slate-900 text-sm  font-semibold font-['Poppins'] leading-none w-full h-12 px-[45px]  bg-amber-400 rounded-lg justify-center items-center gap-2.5 inline-flex"
              >
                Update Profile
              </button>
            </Form>
          </Formik>
        </div>
      )}
      {isOpen && (
        <div
          className="fixed top-0 left-0 w-full h-full bg-black opacity-50"
          onClick={onClose}
        ></div>
      )}
    </>
  );
};

export default Modal;
