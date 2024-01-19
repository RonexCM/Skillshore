import { ErrorMessage, Field, Form, Formik } from "formik";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { useUpdateUserProfileMutation } from "../../../redux/services/myUserProfileEndpoints";
import { setUserData } from "../../../redux/slice/userSlice";
import { userProfileValidationSchema } from "../../../validation";
import { editedData } from "../types";

const EditProfile = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [updateUserProfile] = useUpdateUserProfileMutation();

  const data = useSelector((state) => state.user.data);

  const handleSubmit = async (values: editedData) => {
    try {
      const { skills, ...other } = values;
      let skill;
      if (!Array.isArray(skills)) {
        skill = skills?.split(",");
      } else {
        skill = skills;
      }
      const reqData = { skills: skill, ...other };
      const res = await updateUserProfile(reqData);
      if (res) {
        dispatch(setUserData(res));
        navigate(-1);
      } else {
        console.error("No response from API");
      }
    } catch (error) {
      console.error("Error updating data :", error);
    }
  };

  return (
    <>
      <div className=" bg-white p-9  w-full ">
        <Formik
          initialValues={data}
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
            </div>

            <div className="flex flex-col text-[18px] w-[800px] mb-6 ">
              <label htmlFor="description" className="mb-2">
                Description
              </label>
              <Field
                as="textarea"
                id="description"
                name="description"
                className="w-full h-32 bg-white text-[16px] rounded-lg border-2 border-indigo-100 px-3"
              />
              <ErrorMessage
                className="text-[13px] text-error mt-1"
                name="description"
                component="div"
              />
            </div>

            <div className="flex flex-row gap-[20px] w-[800px] mb-2">
              <div className="flex flex-col text-[18px] mb-4 w-full">
                <label htmlFor="phoneNo" className="mb-2">
                  Phone
                </label>
                <Field
                  type="text"
                  id="phoneNo"
                  name="phoneNo"
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
            </div>

            <div className="flex flex-row gap-[20px] w-[800px]">
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
    </>
  );
};
export default EditProfile;
