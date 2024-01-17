import { Loader } from "lucide-react";
import { FaLinkedin, FaPhoneAlt } from "react-icons/fa";
import { MdOutlineEmail } from "react-icons/md";
import { SiGithub } from "react-icons/si";
import { useNavigate } from "react-router-dom";
import profile from "../../assets/images/profile.svg";
import { useGetUserQuery } from "../../redux/services/myUserProfileEndpoints";

const UserProfile = () => {
  const navigate = useNavigate();
  const profileStyle = " text-dark font-medium";
  const { data, isLoading } = useGetUserQuery("");

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
        {isLoading ? (
          <div className="h-[100vh] w-[100vh] m-auto">
            <Loader className="animate-spin m-auto h-8 w-8" />
          </div>
        ) : (
          data &&
          data.map((user, id) => (
            <div key={id} className="studentInfo flex flex-col gap-11">
              <div className="Profile grid grid-cols-2">
                <p className={profileStyle}>Upload your resume</p>
                <div className="flex justify-between">
                  <p className={profileStyle}>{user?.resume}</p>
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
                    <p className={profileStyle}>{user.name}</p>
                    <p className="opacity-70">{user.description}</p>
                    <div className="handles w-[200px] ">
                      <div className="flex justify-start gap-4">
                        <MdOutlineEmail className="text-gray-400" />
                        <p className="text-primary">{user.mail}</p>
                      </div>
                      <div className="flex justify-start gap-4">
                        <FaPhoneAlt className="text-gray-400" />
                        <p className="text-primary">{user.phone}</p>
                      </div>

                      <div>
                        {user?.linkedIn ? (
                          <div>
                            <FaLinkedin className="text-gray-400" />
                            <span>{user.linkedIn}</span>
                          </div>
                        ) : (
                          <div className="flex gap-4">
                            <FaLinkedin className="text-gray-400" />
                            <span className="text-primary">-</span>
                          </div>
                        )}
                      </div>
                      <div>
                        {user?.github ? (
                          <div>
                            <SiGithub className="text-gray-400" />
                            <span>{user.github}</span>
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
                    <p className={profileStyle}>{user.experience}</p>
                    <p className="opacity-70">{user.language}</p>
                  </div>
                </div>
              </div>
              <hr />

              <div className="Profile grid grid-cols-2">
                <p className={profileStyle}>Education</p>
                <div className="flex justify-between">
                  <p className={profileStyle}>{user.education}</p>
                </div>
              </div>
              <hr />

              <div className="Profile grid grid-cols-2">
                <p className={profileStyle}>Availablity</p>
                <div className="flex justify-between">
                  <p className={profileStyle}>{user.available}</p>
                </div>
              </div>
              <hr />

              <div className="Profile grid grid-cols-2 text-[16px]">
                <p className={profileStyle}>Skills</p>
                <div className="flex justify-between ">
                  <div className="skills flex flex-col text-[14px]">
                    <ul className={profileStyle}>
                      {user.skills.map((skill, index) => (
                        <li key={index}>{`${index + 1}.${skill}`}</li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          ))
        )}
      </div>
    </div>
  );
};

export default UserProfile;
