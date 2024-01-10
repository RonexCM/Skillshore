import { useEffect, useState } from "react";
import { fetchData } from "../../services/mockApi";
import profile from "../../assets/images/profile.svg";
import emailIcon from "../../assets/images/email.svg";
import githubIcon from "../../assets/images/github.svg";
import phoneIcon from "../../assets/images/phone.svg";
import linkedInIcon from "../../assets/images/linkedIn.svg";
import { TUserDetails } from "../list/types";

import { useNavigate } from "react-router-dom";

const UserProfile = () => {
  const navigate = useNavigate();

  const [detail, setDetail] = useState<TUserDetails[]>([]);
  useEffect(() => {
    const getInfo = async () => {
      const data = await fetchData();
      if (data) {
        setDetail(data);
      }
      console.log("🚀 ~ file: UserProfile.tsx:12 ~ getInfo ~ data:", data);
    };
    getInfo();
  }, []);

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
        {detail.map((user) => (
          <div className="studentInfo flex flex-col gap-11">
            <div className="Profile grid grid-cols-2">
              <p>Upload your resume</p>
              <div className="flex justify-between">
                <p>{user.resume}</p>
              </div>
            </div>

            <hr />
            <div className="Profile grid grid-cols-2">
              <p>Career Profile</p>
              <div className="flex relative justify-between">
                <img
                  src={profile}
                  className="h-[45px] translate-x-[-65px] absolute"
                />
                <div className="flex flex-col w-[75%]">
                  <p>{user.name}</p>
                  <p>{user.description}</p>
                  <div className="handles w-[200px] ">
                    <div className="flex justify-start gap-4">
                      <img src={emailIcon} />
                      <p className="text-primary">{user.mail}</p>
                    </div>
                    <div className="flex justify-start gap-4">
                      <img src={phoneIcon} />
                      <p className="text-primary">{user.phone}</p>
                    </div>
                    <div>
                      <img src={linkedInIcon} />
                    </div>
                    <div>
                      <img src={githubIcon} />
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <hr />

            <div className="Profile grid grid-cols-2 text-[16px]">
              <p>Overall Experience</p>
              <div className="flex justify-between">
                <div className="flex flex-col text-[14px]">
                  <p>{user.experience}</p>
                  <p className="opacity-70">{user.language}</p>
                </div>
              </div>
            </div>
            <hr />

            <div className="Profile grid grid-cols-2">
              <p>Education</p>
              <div className="flex justify-between">
                <p>{user.education}</p>
              </div>
            </div>
            <hr />

            <div className="Profile grid grid-cols-2">
              <p>Availablity</p>
              <div className="flex justify-between">
                <p>{user.available}</p>
              </div>
            </div>
            <hr />

            <div className="Profile grid grid-cols-2 text-[16px]">
              <p>Skills</p>
              <div className="flex justify-between ">
                <div className="skills flex flex-col text-[14px]">
                  <ul>
                    {user.skills.map((skill, index) => (
                      <li key={index}>{`${index + 1}.${skill}`}</li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default UserProfile;
