import { ChangeEvent, useEffect, useState } from "react";
import { useGetAllQuizCategoriesQuery } from "../../../redux/services/myQuizCategoryApiEndpoints";
import { useDispatch, useSelector } from "react-redux";
import { useGetAllQuizQuery } from "../../../redux/services/myQuizApiEndpoints";
import { saveAllQuizList } from "../../../redux/slice/quizSlice/allQuizListSlice";
import { RootState } from "../../../redux/store";
import { saveAllQuizCategoriesList } from "../../../redux/slice/quizCategorySlice/allQuizCategoriesListSlice";
import Searchbar from "../../../components/SearchBar";
import Button from "../../../components/Button";
import QuizModal from "../../../components/modals/QuizModal";
import { useNavigate } from "react-router-dom";
import { saveQuizDescription } from "../../../redux/slice/quizTestSlice";
import { CiLock } from "react-icons/ci";
import { IoCheckmarkDoneCircle } from "react-icons/io5";
import UserDashboardQuizCategoryRadio from "../../../components/User/UserDashboardQuizCategoryRadio";
import UserQuizzesFilter from "../../../components/User/UserQuizzesFilter";

const QuizCategory = () => {
  const [showQuizModal, setShowQuizModal] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);

  const dispatch = useDispatch();
  const handleStart = (quizData: any) => {
    const { title, description, time, thumbnail, retry_after } = quizData;
    dispatch(
      saveQuizDescription({
        title,
        description,
        time,
        thumbnail,
        retry_after,
      })
    );
    setShowQuizModal(true);
  };
  const { data: quizData } = useGetAllQuizQuery();
  console.log(quizData);
  const { data: quizCategoriesData } = useGetAllQuizCategoriesQuery();
  useEffect(() => {
    if (quizData) {
      dispatch(saveAllQuizList(quizData));
    }
    if (quizCategoriesData) {
      const allQuizCategoryArray = quizCategoriesData.data;
      dispatch(saveAllQuizCategoriesList(allQuizCategoryArray));
      const quizCategoriesWithIsCheckedState = allQuizCategoryArray.map(
        (quizCategory) => {
          return { ...quizCategory, isChecked: false };
        }
      );

      setQuizCategoryArray(quizCategoriesWithIsCheckedState);
    }
  }, [quizCategoriesData, quizData]);

  const horizontalLineBaseStyle =
    "border-b-2 border-primary-light w-full my-[16px] opacity-[0.5]";
  const passed = false;

  const [quizCategoryArray, setQuizCategoryArray] = useState([
    { id: 0, title: "", isChecked: false },
  ]);
  const handleCheckbox = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, checked } = e.target;

    if (name === "selectAll") {
      const tempCategoryArray = quizCategoryArray.map((quizCategory) => {
        return { ...quizCategory, isChecked: checked };
      });
      setQuizCategoryArray(tempCategoryArray);
    } else {
      const tempCategoryArray = quizCategoryArray.map((quizCategory) =>
        name === quizCategory.title
          ? { ...quizCategory, isChecked: checked }
          : quizCategory
      );
      setQuizCategoryArray(tempCategoryArray);
    }
  };

  const handleClear = () => {
    const tempCategoryArray = quizCategoryArray.map((quizCategory) => {
      return { ...quizCategory, isChecked: false };
    });
    setQuizCategoryArray(tempCategoryArray);
    setSelectedCategory(null);
  };
  const { data: listOfQuiz } = useSelector((state: RootState) => state.allQuiz);
  const navigate = useNavigate();
  const selectQuiz = (quizId: number) => {
    navigate(`/student-quiz/${quizId}`);
  };

  const getStatus = (result: any, retry_after: number) => {
    if (result && result.passed) {
      return (
        <>
          <span>
            <IoCheckmarkDoneCircle className="inline-block text-green-600" />
          </span>
          <span className="bg-white text-green-600 text-base ms-1 font-medium me-2 ps-2 px-2.5 py-0.5 round ">
            Passed
          </span>
        </>
      );
    } else if (result && result.total_answered) {
      return (
        <>
          <CiLock className="inline-block text-red-600" />
          <span className="text-red-600 text-base font-medium mt-6 px-2 py-0.5 rounded ">
            Retry after {retry_after} days
          </span>
        </>
      );
    } else {
      return (
        <span className="text-xs font-medium opacity-0.7">Not Attempted</span>
      );
    }
  };
  const filteredQuizzes = listOfQuiz.filter((quiz) => {
    if (!selectedCategory) {
      return true;
    }
    return (
      (quiz.categories &&
        Array.isArray(quiz.categories) &&
        quiz.categories.includes(selectedCategory)) ||
      (quiz.category && quiz.category.title === selectedCategory)
    );
  });

  const handleCategoryRadio = (category: string) => {
    setSelectedCategory((prevCategory) =>
      prevCategory === category ? null : category
    );
  };

  return (
    <section className=" px-[132px] py-[40px]">
      <div className="flex flex-col gap-[24px] items-start">
        <h1 className="text-primary text-2xl font-medium">Test</h1>
        <p className="text-sm text-dark max-w-[672px] font-normal leading-[22.4px] opacity-[0.7]">
          Are you interested in using these skills? This is our way of knowing
          which jobs to match you with. Please take quizzes for the skills you
          want to continue using in your next career.
        </p>
      </div>
      <div className={`${horizontalLineBaseStyle}  my-[32px] `} />
      <div className="grid grid-cols-12 gap-[73px]  min-h-[500px]">
        <div className=" col-span-3 flex flex-col justify-start">
          <div className="flex flex-col gap-4">
            <Searchbar placeholder="search" />
            <div className="flex justify-end items-right  ">
              <Button style="gray" text="Clear" onClick={handleClear} />
            </div>
          </div>
          <div className={horizontalLineBaseStyle} />
          <div className="flex flex-col gap-[16px]">
            {quizCategoryArray.map((quizCategory, index) => (
              <UserDashboardQuizCategoryRadio
                key={index}
                quizCategory={quizCategory}
                index={index}
                selectedCategory={selectedCategory}
                handleCategoryRadio={handleCategoryRadio}
              />
            ))}
          </div>
        </div>
        <div className="col-span-9 grid grid-cols-4 gap-4">
          {filteredQuizzes.map((quiz, index) => (
            <UserQuizzesFilter
              key={index}
              quiz={quiz}
              index={index}
              getStatus={getStatus}
              handleStart={handleStart}
            />
          ))}
        </div>
      </div>
      {showQuizModal && (
        <QuizModal
          selectQuiz={selectQuiz}
          setShowModal={setShowQuizModal}
          id={0}
          modalFor={"quizModal"}
        />
      )}
      {showQuizModal && (
        <div
          className="fixed  top-0 left-0 right-0 bottom-0 z-1 bg-[#03103F] opacity-50 justify-items-center align-top "
          onClick={() => {
            setShowQuizModal(false);
          }}
        ></div>
      )}
    </section>
  );
};

export default QuizCategory;
