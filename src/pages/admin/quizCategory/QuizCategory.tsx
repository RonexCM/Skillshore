import { Link } from "react-router-dom";
import Pagination from "../../../components/admin/Pagination";
import { useEffect, useState } from "react";
import ListOfQuizCategorys from "../../../components/admin/quizCategory/ListOfQuizCategory";
import { IoSearch } from "react-icons/io5";
import { useGetQuizCategorysQuery } from "../../../redux/services/myQuizCategoryApiEndpoints";
import { QuizCategoryType } from "../../list/types/types";

const QuizCategory = () => {
  const { data, isLoading } = useGetQuizCategorysQuery();
  // const { data } = useGetQuizCategorysQuery();
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
    <div className="flex flex-col basis-full  gap-2 p-5 px-8 ">
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
      <div className="pt-0">{isLoading && <p className=""></p>}</div>
      {isLoading ? (
        <div className="pb-2 ps-5">
          <div role="status">
            <svg
              aria-hidden="true"
              className="inline w-8 h-8 text-gray-200 animate-spin dark:text-gray-600 fill-blue-600"
              viewBox="0 0 100 101"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"
                fill="currentColor"
              />
              <path
                d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
                fill="currentFill"
              />
            </svg>
            <span className="sr-only">Loading... </span>
            &nbsp;&nbsp;&nbsp;Loading...
          </div>
        </div>
      ) : (
        <div></div>
      )}
      <div className=" main-container flex flex-col h-full  outline outline-2  outline-primary-light w-full rounded-xl text-center ">
        <div className="title-and-table-div basis-full overflow-y-hidden">
          <table className="w-full leading-[0px] text-sm text-left  text-dark">
            <thead className="border-b-2 border-primary-light h-10">
              <tr className="">
                <th scope="col" className="p-2   ">
                  <div className="flex items-center pl-2 w-[10px]  text-sm font-semibold">
                    S.N
                  </div>
                </th>
                <th
                  scope="col"
                  className="px-1 py-3 w-[78%] text-sm font-semibold "
                >
                  Title
                </th>

                <th scope="col" className="px-6 py-3 w-[10%] font-semibold ">
                  Action
                </th>
              </tr>
            </thead>

            <tbody className="">
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
