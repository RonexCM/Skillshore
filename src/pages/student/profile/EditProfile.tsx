import { ErrorMessage, Field, Form, Formik } from "formik";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { useUpdateUserProfileMutation } from "../../../redux/services/myUserProfileEndpoints";
import { setUserData } from "../../../redux/slice/userSlice";
import { editedData } from "../types/index";
import { MdOutlineKeyboardArrowRight } from "react-icons/md";
import { FaUser } from "react-icons/fa";
import { RootState } from "../../../redux/store";

const EditProfile = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [updateUserProfile] = useUpdateUserProfileMutation();

  const UserData = useSelector((state: RootState) => state.user.data.profile);

  const handleSubmit = async (values: editedData) => {
    try {
      const { skills, ...other } = values;

      let skill: string[];

      if (typeof skills === "string") {
        skill = (skills as string).split(",");
      } else if (Array.isArray(skills)) {
        skill = skills;
      } else {
        skill = [];
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
        <div className="flex flex-col justify-start items-left ">
          <div className="text-primary  text-lg flex items-center gap-1 self-start mt-[37px]">
            <div
              className="flex gap-2  cursor-pointer"
              onClick={() => navigate(-1)}
            >
              <div className="hover:underline flex gap-2">
                <FaUser className="text-lg mt-1" />
                Profile
              </div>
            </div>
            <MdOutlineKeyboardArrowRight className="text-lg " />
            <span className="text-primary"> Edit Profile</span>
          </div>
        </div>

        <Formik initialValues={UserData} onSubmit={handleSubmit}>
          <Form className="flex flex-col justify-center mt-[37px]">
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
