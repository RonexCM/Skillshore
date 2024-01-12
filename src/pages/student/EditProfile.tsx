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
          name: userDetails[0].name,
          description: userDetails[0].description,
          mail: userDetails[0].mail,
          phone: userDetails[0].phone,
          experience: userDetails[0].experience,
          language: userDetails[0].language,
          available: userDetails[0].available,
          role: userDetails[0].role,
          education: userDetails[0].education,
          expected: userDetails[0].expected,
          skills: userDetails[0].skills,
        }
      : {
          name: "",
          description: "",
          mail: "",
          phone: "",
          experience: "",
          language: "",
          available: "",
          role: "",
          expected: "",
          skills: "",
          education: "",
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
          experience:
            values.experience !== currentData.experience
              ? values.experience
              : currentData.experience,
          language:
            values.language !== currentData.language
              ? values.language
              : currentData.language,
          available:
            values.available !== currentData.available
              ? values.available
              : currentData.available,
          role:
            values.role !== currentData.role ? values.role : currentData.role,
          skills:
            values.skills !== currentData.skills
              ? values.skills.split(",")
              : currentData.skills,
          education:
            values.education !== currentData.skieducationlls
              ? values.education
              : currentData.education,
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
      {userDetails.length === 0 ? (
        <h2>Loading...</h2>
      ) : (
        <div className=" bg-white p-9  w-full ">
          <Formik
            initialValues={initialValues}
            onSubmit={handleSubmit}
            validationSchema={userProfileValidationSchema}
          >
            <Form className="flex flex-col justify-center mx-[150px]">
              <h2 className="text-[24px] text-primary font-bold mb-10  ">
                Edit Profile
              </h2>
              <div className="flex flex-row gap-[20px] w-[800px] mb-2 ">
                <div className="flex flex-col text-[18px] mb-4 w-full">
                  <label htmlFor="name" className="mb-2">
                    Name
                  </label>
                  <Field
                    type="text"
                    id="name"
                    name="name"
                    className="w-full h-12 text-[16px] bg-white rounded-lg border-2 border-indigo-100 px-3"
                  />
                  <ErrorMessage
                    className="text-[13px] text-error mt-1"
                    name="name"
                    component="div"
                  />
                </div>

                <div className="flex flex-col text-[18px] mb-4 w-full">
                  <label htmlFor="mail" className="mb-2">
                    Mail
                  </label>
                  <Field
                    type="email"
                    readOnly
                    id="mail"
                    name="mail"
                    className="w-full h-12 text-[16px] bg-white rounded-lg border-2 border-indigo-100 px-3"
                  />
                  <ErrorMessage
                    className="text-[13px] text-error mt-1"
                    name="mail"
                    component="div"
                  />
                </div>
              </div>

              <div className="flex flex-col text-[18px] w-[800px]  mb-6 ">
                <label htmlFor="description" className="mb-2 ">
                  Description
                </label>
                <Field
                  as="textarea"
                  id="description"
                  name="description"
                  className="w-full h-36 bg-white text-[16px] rounded-lg border-2 border-indigo-100 px-3"
                />
                <ErrorMessage
                  className="text-[13px] text-error mt-1"
                  name="description"
                  component="div"
                />
              </div>

              <div className="flex flex-row gap-[20px] w-[800px] mb-2">
                <div className="flex flex-col text-[18px] mb-4 w-full">
                  <label htmlFor="phone" className="mb-2">
                    Phone
                  </label>
                  <Field
                    type="text"
                    id="phone"
                    name="phone"
                    className="w-full text-[16px] h-12 bg-white rounded-lg border-2 border-indigo-100 px-3"
                  />
                  <ErrorMessage
                    className="text-[13px] text-error mt-1"
                    name="phone"
                    component="div"
                  />
                </div>

                <div className="flex flex-col text-[18px] mb-4 w-full">
                  <label htmlFor="experience" className="mb-2">
                    Experience
                  </label>
                  <Field
                    type="text"
                    id="experience"
                    name="experience"
                    className="w-full text-[16px] h-12 bg-white rounded-lg border-2 border-indigo-100 px-3"
                  />
                  <ErrorMessage
                    className="text-[13px] text-error mt-1"
                    name="experience"
                    component="div"
                  />
                </div>
              </div>

              <div className="flex flex-row gap-[20px] w-[800px] mb-2">
                <div className="flex flex-col text-[18px] mb-4 w-full">
                  <label htmlFor="language" className="mb-2">
                    Language
                  </label>
                  <Field
                    type="text"
                    id="language"
                    name="language"
                    className="w-full text-[16px] h-12 bg-white rounded-lg border-2 border-indigo-100 px-3"
                  />
                  <ErrorMessage
                    className="text-[13px] text-error mt-1"
                    name="experience"
                    component="div"
                  />
                </div>

                <div className="flex flex-col text-[18px] mb-4 w-full">
                  <label htmlFor="education" className="mb-2">
                    Education
                  </label>
                  <Field
                    type="text"
                    id="education"
                    name="education"
                    className="w-full text-[16px] h-12 bg-white rounded-lg border-2 border-indigo-100 px-3"
                  />
                  <ErrorMessage
                    className="text-[13px] text-error mt-1"
                    name="experience"
                    component="div"
                  />
                </div>
              </div>

              <div className="flex flex-row gap-[20px] w-[800px]">
                <div className="flex flex-col text-[18px] mb-4 w-full">
                  <label htmlFor="available" className="mb-2">
                    Availability
                  </label>
                  <Field
                    type="text"
                    id="available"
                    name="available"
                    className="w-full text-[16px] h-12 bg-white rounded-lg border-2 border-indigo-100 px-3"
                  />
                  <ErrorMessage
                    className="text-[13px] text-error mt-1"
                    name="experience"
                    component="div"
                  />
                </div>

                <div className="flex flex-col text-[18px] mb-4 w-full">
                  <label htmlFor="role" className="mb-2">
                    Role
                  </label>
                  <Field
                    type="text"
                    id="role"
                    name="role"
                    className="w-full text-[16px] h-12 bg-white rounded-lg border-2 border-indigo-100 px-3"
                  />
                  <ErrorMessage
                    className="text-[13px] text-error mt-1"
                    name="experience"
                    component="div"
                  />
                </div>
              </div>

              <div className="flex flex-row gap-[20px] w-[800px]">
                <div className="flex flex-col text-[18px] mb-4 w-full">
                  <label htmlFor="skills" className="mb-2">
                    Skills
                  </label>
                  <Field
                    type="text"
                    id="skills"
                    name="skills"
                    className="w-full text-[16px] h-12 bg-white rounded-lg border-2 border-indigo-100 px-3"
                  />
                  <ErrorMessage
                    className="text-[13px] text-error mt-1"
                    name="experience"
                    component="div"
                  />
                </div>
              </div>

              <div>
                <button
                  type="submit"
                  className="bg-green-700 text-white px-4 py-2 rounded mt-4"
                >
                  Save Changes
                </button>
              </div>
            </Form>
          </Formik>
        </div>
      )}
    </>
  );
};
export default EditProfile;
