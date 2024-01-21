import { useNavigate } from "react-router-dom";
import { useGetUserQuery } from "../../../redux/services/myUserProfileEndpoints";
import { LineWave } from "react-loader-spinner";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setUserData } from "../../../redux/slice/userSlice";

const UserProfile = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const profileStyle = " text-dark font-medium";
  const { data, refetch } = useGetUserQuery();
  const [isFetching, setIsFetching] = useState(true);
  const userDetails = useSelector((state) => state.user.data.data);

  useEffect(() => {
    if (data) {
      dispatch(setUserData(data));
    }
  }, [data, dispatch]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        setIsFetching(true);
        await refetch();
      } catch (error) {
        console.error(error);
      } finally {
        setIsFetching(false);
      }
    };
    fetchData();
  }, [refetch]);
  return (
    <div className="h-full px-[120px] py-8 font-poppins ">
      {isFetching ? (
        <div className="flex justify-center h-[800px]">
          <LineWave color="#1a2b48" height={100} />;
        </div>
      ) : (
        <>
          <div className="flex justify-between mt-[50px]">
            <h1 className="text-primary leading-7 text-[20px] font-medium pb-[60px] ">
              Profile
            </h1>

            <button
              type="button"
              className=" text-white bg-green-700 font-medium rounded-lg text-sm h-[50px] w-[150px]"
              onClick={() => navigate("/editProfile")}
            >
              Edit Profile
            </button>
          </div>
          {userDetails ? (
            <>
              <div className="userDetails ">
                <div className="studentInfo flex flex-col gap-11">
                  <div className="Profile grid grid-cols-2">
                    <p className={profileStyle}>User Name</p>
                    <div className="flex justify-between">
                      <p className={profileStyle}>{userDetails.name}</p>
                    </div>
                  </div>
                  <hr />
                  <div className="studentInfo flex flex-col gap-11">
                    <div className="Profile grid grid-cols-2">
                      <p className={profileStyle}>Email Address</p>
                      <div className="flex justify-between">
                        <p className={profileStyle}>{userDetails.email}</p>
                      </div>
                    </div>
                  </div>
                  <hr />
                  <div className="studentInfo flex flex-col gap-11">
                    <div className="Profile grid grid-cols-2">
                      <p className={profileStyle}>Education</p>
                      <div className="flex justify-between">
                        <p className={profileStyle}>
                          {userDetails.profile.education}
                        </p>
                      </div>
                    </div>
                  </div>
                  <hr />
                  <div className="studentInfo flex flex-col gap-11">
                    <div className="Profile grid grid-cols-2">
                      <p className={profileStyle}>Career</p>
                      <div className="flex justify-between">
                        <p className={profileStyle}>
                          {userDetails.profile.career}
                        </p>
                      </div>
                    </div>
                  </div>
                  <hr />
                  <div className="studentInfo flex flex-col gap-11">
                    <div className="Profile grid grid-cols-2">
                      <p className={profileStyle}>Experience</p>
                      <div className="flex justify-between">
                        <p className={profileStyle}>
                          {userDetails.profile.experience}
                        </p>
                      </div>
                    </div>
                  </div>
                  <hr />
                  <div className="studentInfo flex flex-col gap-11">
                    <div className="Profile grid grid-cols-2">
                      <p className={profileStyle}>Skills</p>
                      <div className="flex justify-between">
                        <p className={profileStyle}>
                          {userDetails.profile.skills.map((skill, index) => (
                            <li className="list-none" key={index}>{`${
                              index + 1
                            }. ${skill}`}</li>
                          ))}
                        </p>
                      </div>
                    </div>
                  </div>
                  <hr />
                </div>
              </div>
            </>
          ) : (
            <p>User NOt found</p>
          )}
        </>
      )}
    </div>
  );
};

export default UserProfile;
