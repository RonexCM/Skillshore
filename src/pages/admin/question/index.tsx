import { Link } from "react-router-dom";
import Pagination from "../../../components/admin/Pagination";
import { useEffect, useState } from "react";
import ListOfQuestions from "../../../components/admin/question/ListOfQuestions";
import { IoSearch } from "react-icons/io5";
import { useGetQuestionsQuery } from "../../../redux/services/myQuestionApiEndpoints";
import { Spinner } from "flowbite-react";
import { motion } from "framer-motion";
import { useDispatch, useSelector } from "react-redux";
import {
  saveQuestions,
  saveQuestionsMetaData,
} from "../../../redux/slice/questionSlice/questionListSlice";
import { RootState } from "../../../redux/store";

const Question = () => {
  const dispatch = useDispatch();
  const [currentPageNumber, setCurrentPageNumber] = useState(1);
  const { data: questionsData, isLoading } =
    useGetQuestionsQuery(currentPageNumber);

  const { data: questionsList, meta } = useSelector(
    (state: RootState) => state.questionList
  );

  useEffect(() => {
    if (questionsData) {
      dispatch(saveQuestions(questionsData.data));
      dispatch(saveQuestionsMetaData(questionsData.meta));
    }
  }, [questionsData]);

  if (isLoading) {
    return (
      <div className="basis-full bg-slate-100 flex justify-center items-center">
        <div>
          <Spinner aria-label="Extra large spinner example" size="xl" />
        </div>
      </div>
    );
  }
  return (
    <motion.div
      initial={{ opacity: 0.2 }}
      animate={{ opacity: 1 }}
      className="flex flex-col basis-full  gap-5 py-10 px-8 "
    >
      <h1 className="text-primary font-medium text-2xl leading-4">Question</h1>

      <div className="flex justify-between">
        <div className="relative">
          <IoSearch className="absolute text-2xl text-[#8a8a8a] top-[8px] left-3 border-r-2 pr-2" />
          <input
            type="text"
            id="table-search"
            value=""
            onChange={() => {}}
            className="block p-2 ps-10  text-sm text-gray-900 border-2 border-primary-light hover:outline hover:outline-2 hover:outline-offset-[-2px] hover:outline-primary rounded-md w-80 bg-gray-50  "
            placeholder="Search Question"
          ></input>
        </div>
        <Link
          to="add-question"
          className="bg-dark transition-colors flex items-center text-primary-light rounded-lg text-xs font-medium py-button-padding-y px-button-padding-x outline-offset-[-2px] hover:bg-white hover:outline hover:outline-2 hover:outline-primary hover:text-dark"
        >
          <span>+Add Question</span>
        </Link>
      </div>
      <div className=" main-container  flex flex-col h-full  outline outline-2  outline-primary-light w-full rounded-md text-center ">
        <div className="title-and-table-div basis-full relative overflow-y-hidden">
          <table className="w-full text-sm text-left  text-dark">
            <thead className="border-b-2 border-primary-light bg-[#fcfcfc] shadow-inner h-14">
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
                  Weightage
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
              {questionsList?.map((question: any, index: number) => (
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
          className="flex items-center bg-[#fcfcfc] flex-column  border-t-2 flex-wrap md:flex-row justify-between pt-4 p-3"
          aria-label="Table navigation"
        >
          <Pagination
            setCurrentPageNumber={setCurrentPageNumber}
            currentPageNumber={meta.current_page}
            totalNumberOfPages={meta.last_page}
          />
        </nav>
      </div>
    </motion.div>
  );
};

export default Question;
