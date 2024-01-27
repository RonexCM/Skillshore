import { useEffect, useState } from "react";
import { MdOutlineKeyboardArrowRight } from "react-icons/md";
import { useNavigate } from "react-router";
import JsIcon from "../../../assets/images/FrameJS.png";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../../redux/store";
import { useGetQuizOptionsQuery } from "../../../redux/services/myQuizOptionEndpoints";
import { setQuizData } from "../../../redux/slice/quizSlice";
import { FaHouse } from "react-icons/fa6";
import OptionField from "../../../components/OptionField";
import Timer from "../../../components/Timer";
import { LineWave } from "react-loader-spinner";
import { toast } from "react-toastify";

const QuizDashboard = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const quizId = 1;
  const { data, isLoading } = useGetQuizOptionsQuery(quizId);
  const quizDetails = useSelector((state: RootState) => state.quiz.data);
  const [index, setIndex] = useState(0);
  const [selectedOptionIndex, setSelectedOptionIndex] = useState<number | null>(
    null
  );
  const { questions } = quizDetails?.questions?.data || { questions: [] };
  const { time } = quizDetails;
  useEffect(() => {
    if (data) {
      dispatch(setQuizData(data));
    }
  }, [data]);
  if (isLoading) {
    return (
      <div className="flex justify-center h-[800px]">
        <LineWave color="#1a2b48" height={100} />
      </div>
    );
  }

  const handleOption = (index: number) => {
    console.log(index);
    setSelectedOptionIndex(index);
  };

  const nextButton = () => {
    if (selectedOptionIndex !== null && selectedOptionIndex >= 0) {
      setIndex(index + 1);
      setSelectedOptionIndex(null);
    } else {
      toast.error("Please select an answer before moving to the next question");
    }
  };

  const showResult = () => {
    navigate("/result");
  };
  const handleTimeout = () => {
    console.log("Time is up!");
  };
  return (
    <div className="h-full w-full px-[50px] font-poppins">
      <div className="flex flex-col justify-start items-left ">
        <div className="text-primary  text-lg flex items-center gap-1 self-start mt-[33px]">
          <div
            className="flex gap-2  cursor-pointer"
            onClick={() => navigate(-1)}
          >
            <div className="hover:underline flex gap-2">
              <FaHouse className="text-lg mt-1 " />
              Home
            </div>
          </div>
          <MdOutlineKeyboardArrowRight className="text-lg " />
          <span className="text-primary text-opacity-80">Quiz Dashboard</span>
        </div>
      </div>
      <div className=" grid grid-cols-2 my-4 items-center">
        <img src={JsIcon} />
        <div className="flex justify-end">
          <p className="text-lg font-medium text-primary mr-6">
            {time && (
              <Timer initialTime={time * 60} onTimeout={handleTimeout} />
            )}
          </p>
        </div>
      </div>
      <div className=" grid grid-cols-2  h-[480px] mb-10 w-full ">
        <div className=" flex flex-col gap-20 mt-[50px]">
          <p className="text-dark text-[18px] font-semibold">
            {quizDetails.title}
          </p>
          <p className="text-[16px] font-medium">{questions[index]?.title}</p>
          <div className="h-full w-[600px]">
            <p className="items-center">{quizDetails.description}</p>
          </div>
        </div>
        <div className=" pl-10 grid grid-cols-1 ">
          <div className=" flex justify-between items-center">
            <p className="ml-5 text-dark text-sm font-semibold">
              Select one answer
            </p>

            {index == questions.length - 1 ? (
              <button
                onClick={showResult}
                className="mr-5 text-dark text-sm font-semibold rounded-[3px] bg-primary-light py-[16px] px-[24px]"
              >
                Submit
              </button>
            ) : (
              <button
                className="mr-5 text-dark text-sm font-semibold rounded-[3px] bg-primary-light py-[16px] px-[24px]"
                onClick={nextButton}
              >
                Next Question
              </button>
            )}
          </div>
          <div className=" grid grid-cols-1 row-span-5 mt-5">
            {questions[index]?.options.map((option: string, index: number) => (
              <OptionField
                key={index}
                onSelect={handleOption}
                option={option}
                index={index}
                isSelected={index === selectedOptionIndex}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default QuizDashboard;
