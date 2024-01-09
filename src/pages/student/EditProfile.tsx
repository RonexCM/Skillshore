import { useEffect, useState } from "react";
import userProfileValidationSchema from "../../validation/userProfileValidationSchema";
import { editedData, TUserDetails } from "../list/types";
import { Formik, Field, Form, ErrorMessage } from "formik";
import { fetchData } from "../../services/mockApi";
import { useNavigate } from "react-router-dom";

const EditProfile = () => {
  const [userDetails, setUserDetails] = useState<TUserDetails[]>([]);
  const navigate = useNavigate();
  useEffect(() => {
    const getInfo = async () => {
      const data = await fetchData();
      if (data) {
        setUserDetails(data);
      }
      console.log(
        ":rocket: ~ file: UserProfile.tsx:12 ~ getInfo ~ data:",
        data
      );
    };
    getInfo();
  }, []);
  const initialValues =
    userDetails.length > 0
      ? {
          // resume: details.resume,
          name: userDetails[0].name,
          // profile: details.profile,
          description: userDetails[0].description,
          mail: userDetails[0].mail,
          phone: userDetails[0].phone,
          // experience: details.experience,
          // language: details.language,
          // available: details.available,
          // role: details.role,
          // salary: details.salary,
          // id: details.id,
          // expected: details.expected,
        }
      : {
          name: "",
          description: "",
          mail: "",
          phone: "",
        };
  const handleSubmit = (values: editedData) => {
    const apiUrl = `https://657ad086394ca9e4af12b9e0.mockapi.io/student/${userDetails[0].id}`;

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
        };
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

        navigate(-1);
      })
      .catch((error) => {
        console.error("Error updating data:", error);
      });
  };
  return (
    <>
      {userDetails.length > 0 && (
        <div className=" bg-white p-6 rounded shadow-md max-w-md w-full">
          <Formik
            initialValues={initialValues}
            onSubmit={handleSubmit}
            validationSchema={userProfileValidationSchema}
          >
            <Form className="flex flex-col items-center">
              <h2 className="text-3xl font-bold mb-4">User Profile</h2>
              <div className="flex flex-col mb-4 w-full">
                <label htmlFor="name" className="mb-2">
                  Name
                </label>
                <Field
                  type="text"
                  id="name"
                  name="name"
                  className="w-full h-12 bg-white rounded-lg border-2 border-indigo-100 px-3"
                />
                <ErrorMessage
                  className="text-[13px] text-error mt-1"
                  name="name"
                  component="div"
                />
              </div>
              <div className="flex flex-col mb-4 w-full">
                <label htmlFor="description" className="mb-2">
                  Description
                </label>
                <Field
                  type="text"
                  id="description"
                  name="description"
                  className="w-full h-12 bg-white rounded-lg border-2 border-indigo-100 px-3"
                />
                <ErrorMessage
                  className="text-[13px] text-error mt-1"
                  name="description"
                  component="div"
                />
              </div>
              <div className="flex flex-col mb-4 w-full">
                <label htmlFor="mail" className="mb-2">
                  Mail
                </label>
                <Field
                  type="email"
                  id="mail"
                  name="mail"
                  className="w-full h-12 bg-white rounded-lg border-2 border-indigo-100 px-3"
                />
                <ErrorMessage
                  className="text-[13px] text-error mt-1"
                  name="mail"
                  component="div"
                />
              </div>
              <div className="flex flex-col mb-4 w-full">
                <label htmlFor="phone" className="mb-2">
                  Phone
                </label>
                <Field
                  type="text"
                  id="phone"
                  name="phone"
                  className="w-full h-12 bg-white rounded-lg border-2 border-indigo-100 px-3"
                />
                <ErrorMessage
                  className="text-[13px] text-error mt-1"
                  name="phone"
                  component="div"
                />
              </div>
              <button
                type="submit"
                className="bg-green-700 text-white px-4 py-2 rounded mt-4"
              >
                Save Changes
              </button>
            </Form>
          </Formik>
        </div>
      )}
    </>
  );
};
export default EditProfile;
