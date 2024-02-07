import { useEffect, useState } from "react";
import { IoSearch } from "react-icons/io5";
import { Pagination } from "../../../components";
import { useGetReportQuery } from "../../../redux/services/myReportsApiEndpoints";
import { useLoadingState } from "../../../layouts/AdminLayout";
import { motion } from "framer-motion";
import { TReportDataType } from "../types/TReportTypes";
import FormSearchbar from "../../../components/FormSearchbar";

const Question = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [currentPageNumber, setCurrentPageNumber] = useState(1);
  const { setShowLoader } = useLoadingState();
  const { data: reportData, isLoading } = useGetReportQuery(currentPageNumber);

  useEffect(() => {
    setShowLoader(isLoading);
  }, [isLoading]);
  if (true) return <p>Report</p>;
  return (
    <motion.div
      initial={{ opacity: 0.2 }}
      animate={{ opacity: 1 }}
      className="flex flex-col basis-full  gap-5 py-10 px-8 "
    >
      <h1 className="text-primary font-medium text-2xl leading-4">Report</h1>
      <div className="flex justify-between">
        <FormSearchbar searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
      </div>

      <div className=" main-container flex flex-col h-full  outline outline-2  outline-primary-light w-full rounded-md text-center ">
        <div className="shadow-md text-primary-light "></div>
        <div className="title-and-table-div basis-full overflow-y-hidden">
          <table className="w-full leading-3 text-sm text-left  text-dark">
            <thead className="border-b-2 border-primary-light h-10">
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
                  User
                </th>
                <th
                  scope="col"
                  className="px-6 py-3 w-[17%] text-sm font-semibold "
                >
                  Attempted Quizzes
                </th>
                <th
                  scope="col"
                  className="px-6 py-3 w-[20%] text-sm font-semibold"
                >
                  Total Passed
                </th>
                <th scope="col" className="px-6 py-3 w-[15%] font-semibold">
                  Action
                </th>
              </tr>
            </thead>

            <tbody className="h-[10px] flex flex-col gap-8 ">
              {reportData ? (
                reportData.data?.map(
                  (report: TReportDataType, index: number) => (
                    <ListOfReport
                      key={index}
                      report={report}
                      index={index}
                      startingIndex={startingIndex}
                    />
                  )
                )
              ) : (
                <tr className="absolute top-[50%] left-[50%] translate-x-[-50%]">
                  <td>No Data Found</td>
                </tr>
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
            totalNumberOfPages={1}
          />
        </nav>
      </div>
    </motion.div>
  );
};

export default Question;
