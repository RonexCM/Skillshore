import { Link } from "react-router-dom";
import Pagination from "../../../components/Pagination";
import { useEffect, useState } from "react";
import ListOfQuestions from "./ListOfQuestions";
import { IoSearch } from "react-icons/io5";
import { useGetQuestionsQuery } from "../../../redux/services/myApiEndpoints";
import { QuestionType } from "../../list/types";

const Question = () => {
  const { data } = useGetQuestionsQuery();
  const [searchTerm, setSearchTerm] = useState("");
  const [currentPageNumber, setCurrentPageNumber] = useState(1);
  const [questionsPerPage, _] = useState(5);
  const [questions, setQuestions] = useState<QuestionType[]>([]);
  useEffect(() => {
    if (data) {
      setQuestions(data);
    }
  }, [data]);
  const indexOfLastQuestion = currentPageNumber * questionsPerPage;
  const indexOfFirstuestin = indexOfLastQuestion - questionsPerPage;
  const filterQuestionList = () => {
    if (!searchTerm) {
      return questions;
    }
    return questions.filter((question: QuestionType) =>
      question.title.toLowerCase().includes(searchTerm.toLowerCase())
    );
  };
  const filteredQuestionList = filterQuestionList();
  const currentQuestions = filteredQuestionList.slice(
    indexOfFirstuestin,
    indexOfLastQuestion
  );
  const totalNumberOfPages = Math.ceil(
    filteredQuestionList.length / questionsPerPage
  );

  return (
    <div className="flex flex-col basis-full  gap-5 p-5 px-8 ">
      <div className="flex justify-between pt-5 ">
        <h1 className="text-primary font-medium text-2xl pl-5">Question</h1>
        <Link
          to="addquestion"
          className="bg-dark text-primary-light rounded-lg text-xs font-medium py-button-padding-y px-button-padding-x outline-offset-[-2px] hover:bg-white hover:outline hover:outline-2 hover:outline-primary hover:text-dark"
        >
          +Add Question
        </Link>
      </div>
      <div className=" main-container flex flex-col h-full  outline outline-2  outline-primary-light w-full rounded-xl text-center ">
        <div className="search-div shadow-md text-primary-light">
          <div className="relative pl-3 item">
            <IoSearch className="absolute text-2xl text-[#8a8a8a] top-[6px] left-6 border-r-2 pr-2" />
            <input
              type="text"
              id="table-search"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="block p-2 my-3 ps-10  text-sm text-gray-900 border border-gray-300 rounded-lg w-80 bg-gray-50 focus:outline focus:outline-2 focus:outline-blue-500"
              placeholder="Search Question"
            ></input>
          </div>
        </div>
        <div className="title-and-table-div basis-full overflow-y-hidden">
          <table className="w-full text-sm text-left  text-dark">
            <thead className=" border-b-2 border-primary-light">
              <tr>
                <th scope="col" className="p-2 w-[4%] ">
                  <div className="flex items-center pl-2 w-[20px] text-sm font-semibold">
                    S.N
                  </div>
                </th>
                <th
                  scope="col"
                  className="px-6 py-3 w-[26%] text-sm font-semibold"
                >
                  Title
                </th>
                <th
                  scope="col"
                  className="px-6 py-3 w-[13%] text-sm font-semibold"
                >
                  Slug
                </th>
                <th
                  scope="col"
                  className="px-6 py-3 w-[35%] text-sm font-semibold"
                >
                  Description
                </th>

                <th
                  scope="col"
                  className="px-6 py-3 text-center w-[8%] text-sm font-semibold"
                >
                  Weightage
                </th>

                <th scope="col" className="px-6 py-3 w-[14%] font-semibold">
                  Action
                </th>
              </tr>
            </thead>

            <tbody>
              {currentQuestions?.map((question: any, index) => (
                <ListOfQuestions
                  key={index}
                  question={question}
                  index={index}
                />
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
    </div>
  );
};

export default Question;
