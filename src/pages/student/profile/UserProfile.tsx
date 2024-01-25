import { useNavigate } from "react-router-dom";
import { useGetUserQuery } from "../../../redux/services/myUserProfileEndpoints";
import { LineWave } from "react-loader-spinner";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setUserData } from "../../../redux/slice/userSlice";
import { RootState } from "../../../redux/store";
import "react-toastify/dist/ReactToastify.css";
import ProfileDetails from "../../../components/ProfileDetails";

const UserProfile = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const { data, isLoading, isSuccess } = useGetUserQuery();
  const userDetails = useSelector((state: RootState) => state.user.data);

  useEffect(() => {
    if (data && isSuccess) {
      dispatch(setUserData(data));
    }
  }, [isSuccess, data]);

  useEffect(() => {
    if (data?.data?.profile === null) {
      navigate("/createProfile");
    }
  }, [data]);

  if (isLoading) {
    return (
      <div className="flex justify-center h-[800px]">
        <LineWave color="#1a2b48" height={100} />
      </div>
    );
  }
  return (
    <div className="h-full px-[120px]  font-poppins ">
      {isLoading ? (
        <div className="flex justify-center h-[800px]">
          <LineWave color="#1a2b48" height={100} />;
        </div>
      ) : (
        <>
          {userDetails && (
            <>
              <div className="flex justify-between mt-[37px]">
                <h1 className="text-primary leading-7 text-[20px] font-medium pb-[60px] ">
                  Profile
                </h1>

                {userDetails.name ? (
                  <button
                    type="button"
                    className="text-white bg-green-700 font-medium rounded-lg text-sm h-[50px] w-[150px]"
                    onClick={() => navigate("/editProfile")}
                  >
                    Edit Profile
                  </button>
                ) : (
                  <div></div>
                )}
              </div>
              {userDetails.name ? (
                <>
                  <div className="studentInfo flex flex-col gap-10 ">
                    <ProfileDetails
                      title={"User Name"}
                      data={userDetails.name}
                    />
                    <ProfileDetails
                      title={"Email Address"}
                      data={userDetails.email}
                    />
                    <ProfileDetails
                      title={"Education"}
                      data={userDetails.profile.education}
                    />
                    <ProfileDetails
                      title={"Career "}
                      data={userDetails.profile.career}
                    />
                    <ProfileDetails
                      title={"Experience"}
                      data={userDetails.profile.experience}
                    />
                    <ProfileDetails
                      title={"Skills"}
                      data={userDetails.profile?.skills?.map((skill, index) => (
                        <li className="list-none" key={index}>{`${
                          index + 1
                        }. ${skill}`}</li>
                      ))}
                    />
                  </div>
                </>
              ) : (
                <div className="h-[800px]">
                  <p>
                    This current logged in user's profile details is not found.
                    <br />
                    Please contact your administrator for more details
                  </p>
                </div>
              )}
            </>
          )}
        </>
      )}
    </div>
  );
};

export default UserProfile;
