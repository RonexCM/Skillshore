import { useEffect } from "react";
import { MdOutlineKeyboardArrowRight } from "react-icons/md";
import { useNavigate } from "react-router";
import JsIcon from "../../../assets/images/FrameJS.png";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../../redux/store";
import { useGetQuizOptionsQuery } from "../../../redux/services/myQuizOptionEndpoints";
import { setQuizData } from "../../../redux/slice/quizSlice";
import { FaHouse } from "react-icons/fa6";

const QuizDashboard = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const quizId = 1;
  const { data } = useGetQuizOptionsQuery(quizId);
  const quizDetails = useSelector((state: RootState) => state.quiz.data);
  console.log("🚀 ~ QuizDashboard ~ quizDetails:", quizDetails);

  useEffect(() => {
    if (data) {
      dispatch(setQuizData(data));
      console.log(data);
    }
  }, [data]);
  return (
    <div className="h-full w-full px-[50px] font-poppins">
      <div className="flex flex-col justify-start items-left ">
        <div className="text-primary  text-lg flex items-center gap-1 self-start mt-[33px]">
          <div
            className="flex gap-2  cursor-pointer"
            onClick={() => navigate(-1)}
          >
            <div className="hover:underline flex gap-2">
              <FaHouse className="text-lg mt-1" />
              Home
            </div>
          </div>
          <MdOutlineKeyboardArrowRight className="text-lg " />
          <span className="text-primary">Quiz Dashboard</span>
        </div>
      </div>
      <div className=" flex my-4 items-center ">
        <img src={JsIcon} />
      </div>
      <div className=" grid grid-cols-2  h-[480px] mb-10 w-full ">
        <div className=" flex flex-col gap-5 mt-[50px]">
          <p>{quizDetails.title}</p>
          <p>{quizDetails.description}</p>
          <p>{quizDetails.questions?.data?.questions[0].title}</p>
        </div>
        <div className=" pl-10 grid grid-cols-1 ">
          <div className=" flex justify-between items-center">
            <p className="ml-5 text-dark text-sm font-semibold">
              Select one answer
            </p>
            <p className="text-sm font-medium text-primary">
              {quizDetails.time}
            </p>
            <button className="mr-5 text-dark text-sm font-semibold rounded-[3px] bg-primary-light py-[16px] px-[24px]">
              Next Question
            </button>
          </div>
          <div className=" grid grid-cols-1 row-span-5">
            <div className=" flex items-center h-4">
              <div className=" p-5">A</div>
              <div>{quizDetails.questions?.data?.questions[0]?.options[0]}</div>
            </div>
            <div className=" flex items-center h-4">
              <div className=" p-5">B</div>
              <div>{quizDetails.questions?.data?.questions[0]?.options[1]}</div>
            </div>
            <div className=" flex items-center h-4">
              <div className=" p-5">C</div>
              <div>{quizDetails.questions?.data?.questions[0]?.options[2]}</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default QuizDashboard;
