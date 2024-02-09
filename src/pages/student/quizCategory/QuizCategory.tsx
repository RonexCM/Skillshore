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
import UserDashboardQuizCategoryRadio from "../../../components/User/UserDashboardQuizCategory";
import UserQuizzesFilter from "../../../components/User/UserQuizzesFilter";
import { QuizModalTypes } from "../../admin/types";
import Pagination from "../../../components/Pagination";

const QuizCategory = () => {
  // hooks
  const [currentPageNumber, setCurrentPageNumber] = useState(1);
  const [showQuizModal, setShowQuizModal] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");
  const [filteredCategories, setFilteredCategories] = useState([]);
  const [quizCategoryArray, setQuizCategoryArray] = useState([
    { id: 0, isChecked: false },
  ]);
  const [searchTerm, setSearchTerm] = useState("");
  const navigate = useNavigate();
  const dispatch = useDispatch();

  // Redux Selectors
  const { data: listOfQuiz } = useSelector((state: RootState) => state.allQuiz);

  //  Api Queries
  const { data: quizData } = useGetAllQuizQuery({
    title: searchTerm,
    page: currentPageNumber,
  });
  const { data: quizCategoriesData } = useGetAllQuizCategoriesQuery();

  // Effects to handle API responses

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

  useEffect(() => {
    if (quizCategoriesData) {
      setFilteredCategories(quizCategoriesData.data);
    }
  }, [quizCategoriesData]);

  // Event Handlers

  const handleClear = () => {
    const tempCategoryArray = quizCategoryArray.map((quizCategory) => {
      return { ...quizCategory, isChecked: false };
    });
    setQuizCategoryArray(tempCategoryArray);
    setSelectedCategory(null);
  };
  // const handleCheckbox = (category: string) => {
  //   setSelectedCategory((prevCategory) => [...prevCategory, category]);
  // };

  const handleCheckbox = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, checked } = e.target;

    if (name === "selectAll") {
      const tempCategoryArray = quizCategoryArray.map((quizCategory) => {
        return { ...quizCategory, isChecked: checked };
      });
      setQuizCategoryArray(tempCategoryArray);
      if (checked) {
        setSelectedCategory(
          quizCategoriesData?.data.map((category) => category.id) || []
        );
      } else {
        setSelectedCategory([]);
      }
    } else {
      const tempCategoryArray = quizCategoryArray.map((quizCategory) =>
        name === quizCategory.title
          ? { ...quizCategory, isChecked: checked }
          : quizCategory
      );
      setQuizCategoryArray(tempCategoryArray);
      const selectedCategoryIds = tempCategoryArray
        .filter((category) => category.isChecked)
        .map((category) => category.id);
      setSelectedCategory(selectedCategoryIds);
    }
  };
  const handleStart = (quizData: QuizModalTypes) => {
    dispatch(saveQuizDescription(quizData));
    setShowQuizModal(true);
  };

  // Function
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

  const horizontalLineBaseStyle =
    "border-b-2 border-primary-light w-full my-[16px] opacity-[0.5]";
  const passed = false;

  //  Filter quizzes based on selected category
  const filteredQuizzes = listOfQuiz.filter((quiz) => {
    if (selectedCategory.length === 0) {
      return true;
    }
    return quiz.category && selectedCategory.includes(quiz.category.id);
  });
  if (!quizData) return;

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
          <div className="flex flex-col gap-4 ">
            <Searchbar
              placeholder="Search"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />

            <div className="flex justify-between    ">
              <p className="text-primary text-sm font-semibold text-left">
                {quizCategoryArray.filter(
                  (quizCategory) => quizCategory.isChecked === false
                ).length < 1
                  ? "All"
                  : quizCategoryArray.filter(
                      (quizCategory) => quizCategory.isChecked === true
                    ).length}
                Selected
              </p>
              <Button style="gray" text="Clear" onClick={handleClear} />
            </div>
          </div>
          <div className={horizontalLineBaseStyle} />
          <div className="flex flex-col gap-[16px]">
            <div className="flex gap-4 items-center">
              <input
                className="border-2 border-primary-light rounded-sm hover:bg-[#689fff]"
                type="checkBox"
                id="selectAll"
                name="selectAll"
                onChange={handleCheckbox}
                checked={
                  quizCategoryArray.filter(
                    (quizCategory) => quizCategory.isChecked === false
                  ).length < 1
                }
              />
              <label
                className="text-sm text-dark font-normal"
                htmlFor="selectAll"
              >
                All
              </label>
            </div>
            {quizCategoryArray.map((quizCategory, index) => (
              <UserDashboardQuizCategoryRadio
                key={index}
                quizCategory={quizCategory}
                index={index}
                selectedCategory={selectedCategory}
                handleCheckbox={handleCheckbox}
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
      <nav
        className="flex items-center bg-[#fcfcfc] flex-column  border-t-2 flex-wrap md:flex-row justify-between pt-4 p-3 mt-[50px]"
        aria-label="Table navigation"
      >
        <Pagination
          setCurrentPageNumber={setCurrentPageNumber}
          currentPageNumber={quizData.meta.current_page}
          totalNumberOfPages={quizData.meta.last_page}
        />
      </nav>
    </section>
  );
};

export default QuizCategory;
