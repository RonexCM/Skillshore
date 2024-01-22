import { ErrorMessage, Field, Form, Formik } from "formik";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { useUpdateUserProfileMutation } from "../../../redux/services/myUserProfileEndpoints";
import { setUserData } from "../../../redux/slice/userSlice";
import { editedData } from "../types/index";

const EditProfile = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [updateUserProfile] = useUpdateUserProfileMutation();

  const UserData = useSelector((state) => state.user.data.data.profile);

  const handleSubmit = async (values: TEditedData) => {
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
        navigate("/profile");
      } else {
        console.error("No response from API");
      }
    } catch (error) {
      console.error("Error updating data :", error);
    }
  };

  return (
    <>
      <div className="h-full px-[120px] font-poppins ">
        <Formik initialValues={UserData} onSubmit={handleSubmit}>
          <Form className="flex flex-col justify-center mt-[37px]">
            <h2 className="text-primary leading-7 text-[20px] font-medium pb-[30px]">
              Edit Profile
            </h2>

            <div className="flex flex-row gap-[20px]  mb-2">
              <div className="flex flex-col text-[18px] mb-4 w-full">
                <label
                  htmlFor="education"
                  className="mb-2 text-dark text-lg font-normal"
                >
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
                  name="education"
                  component="div"
                />
              </div>
            </div>

            <div className="flex flex-row gap-[20px]  mb-2">
              <div className="flex flex-col text-[18px] mb-4 w-full">
                <label
                  htmlFor="career"
                  className="mb-2 text-lg text-dark font-normal"
                >
                  Career
                </label>
                <Field
                  type="text"
                  id="career"
                  name="career"
                  className="w-full text-[16px] h-12 bg-white rounded-lg border-2 border-indigo-100 px-3"
                />
                <ErrorMessage
                  className="text-[13px] text-error mt-1"
                  name="career"
                  component="div"
                />
              </div>
            </div>

            <div className="flex flex-row gap-[20px]  mb-2">
              <div className="flex flex-col text-[18px] mb-4 w-full">
                <label
                  htmlFor="experience"
                  className="mb-2 text-dark text-lg font-normal"
                >
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

            <div className="flex flex-row gap-[20px]  mb-2">
              <div className="flex flex-col text-[18px] mb-4 w-full">
                <label
                  htmlFor="skills"
                  className="mb-2 text-lg text-dark font-normal"
                >
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
                  name="skills"
                  component="div"
                />
              </div>
            </div>
            <div>
              <button
                type="submit"
                className=" text-white bg-green-700 font-medium mb-[40px] rounded-lg text-sm h-[50px] w-[150px]"
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
