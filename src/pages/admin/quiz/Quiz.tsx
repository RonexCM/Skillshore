import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import { ListOfQuiz, Pagination } from "../../../components";
import { IoSearch } from "react-icons/io5";
import { useGetAllQuizQuery } from "../../../redux/services/myQuizApiEndpoints";
import { QuizType } from "../types";
import { useLoadingState } from "../../../layouts/AdminLayout";
import { motion } from "framer-motion";
const Quiz = () => {
  const { data, isLoading, isError } = useGetAllQuizQuery();
  const [searchTerm, setSearchTerm] = useState("");
  const [currentPageNumber, setCurrentPageNumber] = useState(1);
  const [quizPerPage, _] = useState(5);
  const [quiz, setQuiz] = useState<QuizType[]>([]);
  useEffect(() => {
    if (data) {
      setQuiz(data);
    }
    setShowLoader(isLoading);
  }, [data, isLoading]);
  const { setShowLoader } = useLoadingState();
  const indexOfLastQuiz = currentPageNumber * quizPerPage;
  const indexOfFirstQuiz = indexOfLastQuiz - quizPerPage;
  const filterQuizList = () => {
    try {
      if (!searchTerm) {
        return quiz;
      }
      return quiz.filter((quiz: QuizType) =>
        quiz.title.toLowerCase().includes(searchTerm.toLowerCase())
      );
    } catch (error) {
      console.log(error);
    }
  };
  const filteredQuizList = filterQuizList();
  const currentQuizs = filteredQuizList?.slice(
    indexOfFirstQuiz,
    indexOfLastQuiz
  );
  const totalNumberOfPages = filteredQuizList
    ? Math.ceil(filteredQuizList.length / quizPerPage)
    : 1;

  return (
    <motion.div
      initial={{ opacity: 0.2 }}
      animate={{ opacity: 1 }}
      className="flex flex-col basis-full  gap-5 p-5 px-8 "
    >
      <h1 className="text-primary font-medium text-2xl py-5">Quiz</h1>

      <div className="flex justify-between">
        <div className="relative">
          <IoSearch className="absolute text-2xl text-[#8a8a8a] top-[8px] left-3 border-r-2 pr-2" />
          <input
            type="text"
            id="table-search"
            value={searchTerm}
            onChange={(e) => {
              setSearchTerm(e.target.value);
              setCurrentPageNumber(1);
            }}
            className="block p-2 ps-10  text-sm text-gray-900 border-2 border-primary-light hover:outline hover:outline-2 hover:outline-offset-[-2px] hover:outline-primary rounded-lg w-80 bg-gray-50  "
            placeholder="Search Quiz"
          ></input>
        </div>
        <Link
          to="add-quiz"
          className="bg-dark text-primary-light rounded-lg text-xs font-medium py-button-padding-y px-button-padding-x outline-offset-[-2px] hover:bg-white hover:outline hover:outline-2 hover:outline-primary hover:text-dark"
        >
          +Add Quiz
        </Link>
      </div>
      <div className=" main-container relative flex flex-col h-full  outline outline-2  outline-primary-light w-full rounded-xl text-center ">
        {isError && (
          <p className="absolute top-[50%] left-[50%] translate-x-[-50%]">
            No Data Found
          </p>
        )}
        <div className="shadow-md text-primary-light "></div>
        <div className="title-and-table-div basis-full overflow-y-hidden">
          <table className="w-full text-sm text-left  text-dark">
            <thead className="border-b-2 border-primary-light h-16">
              <tr>
                <th scope="col" className="p-2 w-[8%] ">
                  <div className="flex items-center pl-2 w-[20px] text-sm font-semibold">
                    S.N
                  </div>
                </th>
                <th
                  scope="col"
                  className="px-6 py-3 w-[40%] text-sm font-semibold"
                >
                  Title
                </th>
                <th
                  scope="col"
                  className="px-6 py-3 w-[17%] text-sm font-semibold "
                >
                  Time
                </th>
                <th
                  scope="col"
                  className="px-6 py-3 w-[20%] text-sm font-semibold"
                >
                  Status
                </th>
                <th scope="col" className="px-6 py-3 w-[15%] font-semibold">
                  Action
                </th>
              </tr>
            </thead>

            <tbody>
              {currentQuizs?.map((quiz: any, index) => (
                <ListOfQuiz key={index} quiz={quiz} />
              ))}
            </tbody>
          </table>
        </div>
        <nav
          className="flex items-center flex-column  border-t-2 flex-wrap md:flex-row justify-between pt-4 p-3"
          aria-label="Table navigation"
        >
          <Pagination
            setCurrentPageNumber={setCurrentPageNumber}
            currentPageNumber={currentPageNumber}
            totalNumberOfPages={totalNumberOfPages}
          />
        </nav>
      </div>
    </motion.div>
  );
};

export default Quiz;
