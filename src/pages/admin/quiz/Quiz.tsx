import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import { ListOfQuiz, Pagination } from "../../../components";
import { motion } from "framer-motion";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../../redux/store";
import { useLoadingState } from "../../../layouts/AdminLayout";
import { TQuizType } from "../types";
import { useGetQuizzesQuery } from "../../../redux/services/myQuizApiEndpoints";
import {
  saveQuizList,
  saveQuizMetaData,
} from "../../../redux/slice/quizSlice/quizListSlice";
import FormSearchbar from "../../../components/FormSearchbar";

const Quiz = () => {
  const dispatch = useDispatch();

  const [currentPageNumber, setCurrentPageNumber] = useState(1);
  const [startingIndex, setStartingIndex] = useState(1);
  const [searchTerm, setSearchTerm] = useState("");

  const {
    data: quizzesData,
    isLoading,
    isSuccess,
  } = useGetQuizzesQuery({
    page: currentPageNumber,
    title: searchTerm,
  });

  useEffect(() => {
    if (isSuccess) {
      dispatch(saveQuizList(quizzesData.data));
      dispatch(saveQuizMetaData(quizzesData.meta));
    }
    setShowLoader(isLoading);
    setStartingIndex(currentPageNumber * 8 - 7);
  }, [quizzesData, isLoading, isSuccess]);

  const { meta } = useSelector((state: RootState) => state.quizList);

  const loadingState = useLoadingState();
  const { setShowLoader } = loadingState;

  return (
    <motion.div
      initial={{ opacity: 0.2 }}
      animate={{ opacity: 1 }}
      className="flex flex-col basis-full  gap-5 py-10 px-8 "
    >
      <h1 className="text-primary font-medium text-2xl leading-4">Quiz</h1>
      <div className="flex justify-between">
        <FormSearchbar searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
        <Link
          to="addQuiz"
          className="bg-dark transition-colors flex items-center text-primary-light rounded-lg text-xs font-medium py-button-padding-y px-button-padding-x outline-offset-[-2px] hover:bg-white hover:outline hover:outline-2 hover:outline-primary hover:text-dark"
        >
          <span>+Add Quiz</span>
        </Link>
      </div>
      <div className=" main-container relative flex flex-col min-h-[558px] outline outline-2  outline-primary-light w-full rounded-md text-center ">
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
                  className="px-6 relative py-3 w-[17%] text-sm font-semibold "
                >
                  Time&nbsp;
                  <span className="text-[10px] absolute opacity-60 top-[32px] left-[18px]">
                    {"(minutes)"}
                  </span>
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
              {quizzesData ? (
                quizzesData.data?.map((quiz: TQuizType, index: number) => (
                  <ListOfQuiz
                    key={index}
                    quiz={quiz}
                    index={index}
                    startingIndex={startingIndex}
                  />
                ))
              ) : (
                <tr className="absolute top-[50%] left-[50%] translate-x-[-50%]">
                  <td>No Data Found</td>
                </tr>
              )}
            </tbody>
          </table>
        </div>

        <nav
          className="flex mt-auto items-center bg-[#fcfcfc] flex-column  border-t-2 flex-wrap md:flex-row justify-between pt-4 p-3"
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

export default Quiz;
