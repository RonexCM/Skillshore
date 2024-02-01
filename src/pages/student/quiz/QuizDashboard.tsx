import { useEffect, useState } from "react";
import { useNavigate } from "react-router";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../../redux/store";
import { setQuizData } from "../../../redux/slice/quizSlice";
import OptionField from "../../../components/OptionField";
import Timer from "../../../components/Timer";
import { LineWave } from "react-loader-spinner";
import { toast } from "react-toastify";
import {
  useGetQuizOptionsQuery,
  usePostQuizDataMutation,
} from "../../../redux/services/myQuizOptionsEndpoints";
import { setAnswerData } from "../../../redux/slice/userQuizSlice";
import { MdOutlineKeyboardArrowRight } from "react-icons/md";
import { useParams } from "react-router-dom";

const QuizDashboard = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { id: quizId } = useParams();
  const [postQuizData] = usePostQuizDataMutation();
  const { data, isLoading } = useGetQuizOptionsQuery(quizId);
  const quizDetails = useSelector((state: RootState) => state.quiz.data);
  const quizAnswer = useSelector((state: RootState) => state.answer.data);

  const [index, setIndex] = useState(0);
  const [selectedOptionIndex, setSelectedOptionIndex] = useState<number | null>(
    null
  );
  const [timer, setTimer] = useState(0);
  const { questions } = quizDetails?.questions?.data || { questions: [] };
  const { time } = quizDetails;
  useEffect(() => {
    if (data) {
      dispatch(setQuizData(data));
    }
  }, [data, dispatch]);

  useEffect(() => {
    const data = { ...quizAnswer, quiz_id: quizId };
    dispatch(setAnswerData(data));
  }, [dispatch]);

  const updateTimeLeft = (newTime: number) => {
    setTimer(newTime);
  };
  if (isLoading) {
    return (
      <div className="flex justify-center h-[800px]">
        <LineWave color="#1a2b48" height={100} />
      </div>
    );
  }

  const handleOption = (index: number) => {
    setSelectedOptionIndex(index);
  };

  const nextButton = () => {
    if (selectedOptionIndex !== null && selectedOptionIndex >= 0) {
      const alphaIndex = String.fromCharCode(65 + selectedOptionIndex);
      const data = {
        ...quizAnswer,
        answers: [
          ...quizAnswer.answers,
          {
            question_id: questions[index].id,
            answer: alphaIndex,
          },
        ],
        total_question: index + 1,
      };

      setIndex(index + 1);
      dispatch(setAnswerData(data));
      setSelectedOptionIndex(null);
    } else {
      toast.error("Please select an answer before moving to the next question");
    }
  };

  const submitQuiz = () => {
    if (selectedOptionIndex === null) {
      toast.error("Please select an answer before moving to the next question");
    } else {
      const alphaIndex = String.fromCharCode(65 + selectedOptionIndex);
      const data = {
        ...quizAnswer,
        answers: [
          ...quizAnswer.answers,
          {
            question_id: questions[index].id,
            answer: alphaIndex,
          },
        ],
        total_time: timer,
        total_question: index + 1,
      };
      dispatch(setAnswerData(data));
      postQuizData(data);

      navigate("/quizzes");
    }
  };

  const handleTimeout = () => {
    postQuizData(quizAnswer);
    navigate("/quizzes");
  };
  return (
    <div className="h-max w-full px-[50px] font-poppins">
      <div className="flex flex-col justify-start items-left ">
        <div className="text-primary  text-lg flex items-center gap-1 self-start mt-[37px]">
          <div className="flex gap-2 ml-[20px] cursor-pointer">
            <div className="hover:underline flex gap-2">
              {quizDetails.title}
            </div>
          </div>
          <MdOutlineKeyboardArrowRight className="text-lg " />
          <span className="text-primary">{quizDetails?.category?.title}</span>
        </div>
      </div>
      <div className=" grid grid-cols-2  items-center  ">
        <img src={quizDetails.thumbnail} className=" h-[150px] w-[200px]" />
        <div className="flex justify-end">
          <p className="text-2xl font-medium text-primary">
            {time && (
              <Timer
                initialTime={time * 60}
                onTimeout={handleTimeout}
                updateTimeLeft={updateTimeLeft}
              />
            )}
          </p>
        </div>
      </div>
      <div className=" grid grid-cols-2  h-max mb-10 w-full ">
        <div className=" flex flex-col gap-20 mt-[47px] ml-[23px]  ">
          <p className="text-dark text-[18px] font-semibold">
            {questions[index]?.title}
          </p>
          <div className="h-full w-auto">
            <p className="items-center">{quizDetails.description}</p>
          </div>
        </div>
        <div className=" pl-10 grid grid-cols-1 ">
          <div className=" flex justify-between items-center mb-5">
            <p className=" text-dark text-sm font-semibold">
              Select one answer
            </p>

            {index == questions.length - 1 ? (
              <button
                onClick={submitQuiz}
                className=" text-dark text-sm font-semibold rounded-[3px] bg-primary-light py-[16px] px-[24px]"
              >
                Submit
              </button>
            ) : (
              <button
                className=" text-dark text-sm font-semibold rounded-[3px] bg-primary-light py-[16px] px-[24px]"
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
