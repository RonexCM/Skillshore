import { FaLinkedin, FaPhoneAlt } from "react-icons/fa";
import { MdOutlineEmail } from "react-icons/md";
import { SiGithub } from "react-icons/si";
import { useNavigate } from "react-router-dom";
import profile from "../../../assets/images/profile.svg";
import { useGetUserQuery } from "../../../redux/services/myUserProfileEndpoints";
import { LineWave } from "react-loader-spinner";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setUserData } from "../../../redux/slice/userSlice";

const UserProfile = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const profileStyle = " text-dark font-medium";
  const userDetails = useSelector((state) => state.user.data);
  const { data, isLoading } = useGetUserQuery();

  useEffect(() => {
    if (data) {
      dispatch(setUserData(data[0]));
    }
  }, [data]);

  if (isLoading) {
    <div className="flex justify-center">
      return <LineWave color="#1a2b48" height={100} />;
    </div>;
  }
  console.log(userDetails.skills);
  return (
    <div className="h-full px-[120px] py-8 font-poppins ">
      <div className="flex justify-between mt-[50px]">
        <h1 className="text-primary leading-7 text-[20px] font-medium pb-[60px] ">
          Profile
        </h1>

        <button
          type="button"
          className=" text-white bg-green-700 font-medium rounded-lg text-sm h-[50px] w-[150px]"
          onClick={() => navigate("editProfile")}
        >
          Edit Profile
        </button>
      </div>
      <div className="userDetails ">
        <div className="studentInfo flex flex-col gap-11">
          <div className="Profile grid grid-cols-2">
            <p className={profileStyle}>Upload your resume</p>
            <div className="flex justify-between">
              <p className={profileStyle}>{userDetails.resume}</p>
            </div>
          </div>

          <hr />
          <div className="Profile grid grid-cols-2">
            <p className={profileStyle}>Career Profile</p>
            <div className="flex relative justify-between">
              <img
                src={profile}
                className="h-[45px] translate-x-[-65px] absolute"
              />
              <div className="flex flex-col w-[75%]">
                <p className={profileStyle}>{userDetails.name}</p>
                <p className="opacity-70">{userDetails.description}</p>
                <div className="handles w-[200px] ">
                  <div className="flex justify-start gap-4">
                    <MdOutlineEmail className="text-gray-400" />
                    <p className="text-primary">{userDetails.email}</p>
                  </div>
                  <div className="flex justify-start gap-4">
                    <FaPhoneAlt className="text-gray-400" />
                    <p className="text-primary">{userDetails.phoneNo}</p>
                  </div>

                  <div>
                    {userDetails?.linkedIn ? (
                      <div>
                        <FaLinkedin className="text-gray-400" />
                        <span>{userDetails.linkedIn}</span>
                      </div>
                    ) : (
                      <div className="flex gap-4">
                        <FaLinkedin className="text-gray-400" />
                        <span className="text-primary">-</span>
                      </div>
                    )}
                  </div>
                  <div>
                    {userDetails?.github ? (
                      <div>
                        <SiGithub className="text-gray-400" />
                        <span>{userDetails.github}</span>
                      </div>
                    ) : (
                      <div className="flex gap-4">
                        <SiGithub className="text-gray-400" />
                        <span className="text-primary">-</span>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            </div>
          </div>
          <hr />

          <div className="Profile grid grid-cols-2 text-[16px]">
            <p className={profileStyle}>Overall Experience</p>
            <div className="flex justify-between">
              <div className="flex flex-col text-[14px]">
                <p className={profileStyle}>{userDetails.experience}</p>
                <p className="opacity-70">{userDetails.language}</p>
              </div>
            </div>
          </div>
          <hr />

          <div className="Profile grid grid-cols-2">
            <p className={profileStyle}>Education</p>
            <div className="flex justify-between">
              <p className={profileStyle}>{userDetails.education}</p>
            </div>
          </div>
          <hr />

          <div className="Profile grid grid-cols-2">
            <p className={profileStyle}>Role</p>
            <div className="flex justify-between">
              <p className={profileStyle}>{userDetails.role}</p>
            </div>
          </div>
          <hr />

          <div className="Profile grid grid-cols-2">
            <p className={profileStyle}>Availablity</p>
            <div className="flex justify-between">
              <p className={profileStyle}>{userDetails.available}</p>
            </div>
          </div>
          <hr />

          <div className="Profile grid grid-cols-2 text-[16px]">
            <p className={profileStyle}>Skills</p>
            <div className="flex justify-between ">
              <div className="skills flex flex-col text-[14px]">
                <ul className={profileStyle}>
                  {userDetails &&
                    userDetails.skills.map((skill, index) => (
                      <li key={index}>{`${index + 1}.${skill}`}</li>
                    ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserProfile;
