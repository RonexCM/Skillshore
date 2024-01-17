import { Link } from "react-router-dom";
import Pagination from "../../../components/admin/Pagination";
import { useEffect, useState } from "react";
import ListOfQuizCategorys from "../../../components/admin/quizCategory/ListOfQuizCategory";
import { IoSearch } from "react-icons/io5";
import { useGetQuizCategorysQuery } from "../../../redux/services/myQuizCategoryApiEndpoints";
import { QuizCategoryType } from "../../list/types/types";
import { Spinner } from "flowbite-react";

const QuizCategory = () => {
  const { data, isLoading } = useGetQuizCategorysQuery();
  const [searchTerm, setSearchTerm] = useState("");
  const [currentPageNumber, setCurrentPageNumber] = useState(1);
  const [quizCategorysPerPage, _] = useState(10);
  const [quizCategorys, setQuizCategorys] = useState<QuizCategoryType[]>([]);

  useEffect(() => {
    if (data) {
      setQuizCategorys(data);
    }
  }, [data]);
  const indexOfLastQuizCategory = currentPageNumber * quizCategorysPerPage;
  const indexOfFirstQuizCategory =
    indexOfLastQuizCategory - quizCategorysPerPage;
  const filterQuizCategoryList = () => {
    try {
      if (!searchTerm) {
        return quizCategorys;
      }
      return quizCategorys.filter((quizCategory: QuizCategoryType) =>
        quizCategory.title.toLowerCase().includes(searchTerm.toLowerCase())
      );
    } catch (error) {
      console.log(error);
    }
  };
  const filteredQuizCategoryList = filterQuizCategoryList();
  const currentQuizCategorys = filteredQuizCategoryList?.slice(
    indexOfFirstQuizCategory,
    indexOfLastQuizCategory
  );
  const totalNumberOfPages = filteredQuizCategoryList
    ? Math.ceil(filteredQuizCategoryList.length / quizCategorysPerPage)
    : 1;

  return (
    <div className="flex flex-col basis-full  gap-5 p-5 px-8 ">
      <h1 className="text-primary font-medium text-2xl py-5">Quiz Category</h1>

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
            placeholder="Search Quiz Category"
          ></input>
        </div>
        <Link
          to="add-quiz-category"
          className="bg-dark text-primary-light rounded-lg text-xs font-medium py-button-padding-y px-button-padding-x outline-offset-[-2px] hover:bg-white hover:outline hover:outline-2 hover:outline-primary hover:text-dark"
        >
          +Add Category
        </Link>
      </div>
      <div className=" main-container flex flex-col h-full  outline outline-2  outline-primary-light w-full rounded-xl text-center ">
        <div className="shadow-md text-primary-light "></div>
        <div className="title-and-table-div basis-full relative overflow-y-hidden">
          {isLoading && (
            <div className="w-full absolute top-[50%] left-[50%] translate-x-[-50%]">
              <Spinner aria-label="Extra large spinner example" size="xl" />
            </div>
          )}
          <table className="w-full text-sm text-left  text-dark">
            <thead className="border-b-2 border-primary-light h-16">
              <tr>
                <th scope="col" className="p-2 w-[25%] ">
                  <div className="flex items-center pl-2 w-[20px] text-sm font-semibold">
                    S.N
                  </div>
                </th>
                <th
                  scope="col"
                  className="px-6 py-3 w-[65%] text-sm font-semibold"
                >
                  Title
                </th>

                <th scope="col" className="px-6 py-3 w-[10%] font-semibold">
                  Action
                </th>
              </tr>
            </thead>

            <tbody>
              {currentQuizCategorys?.map(
                (quizCategory: QuizCategoryType, index) => (
                  <ListOfQuizCategorys
                    key={index}
                    quizCategory={quizCategory}
                    index={index}
                  />
                )
              )}
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

export default QuizCategory;
