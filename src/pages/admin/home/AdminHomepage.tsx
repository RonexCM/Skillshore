import { motion } from "framer-motion";
import { useGetStatisticsQuery } from "../../../redux/services/myStatisticsApiEndpoints";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../../redux/store";
import AdminHomepageCard from "../../../components/admin/AdminHomepageCard";
import { saveStatistics } from "../../../redux/slice/statisticsSlice";
import { FaRegUser } from "react-icons/fa";
import { SiCodefactor } from "react-icons/si";
import { GiBrain } from "react-icons/gi";
import { useLoadingState } from "../../../layouts/AdminLayout";

const AdminHomepage = () => {
  const dispatch = useDispatch();

  const loadingState = useLoadingState();
  const { setShowLoader } = loadingState;

  const { data: statistics, isLoading } = useGetStatisticsQuery();
  const savedStatistics = useSelector(
    (state: RootState) => state.statistics.data
  );

  const cards = [
    {
      title: "User",
      listItemOne: "users",
      listItemTwo: "Verified users",
      listItemThree: "Unverified users",
      icon: FaRegUser,
      total: savedStatistics.total_students,
      primaryVariable: savedStatistics.total_verified_students,
      secondaryVariable:
        savedStatistics.total_students -
        savedStatistics.total_verified_students,
    },
    {
      title: "Quiz",
      listItemOne: "quizzes",
      listItemTwo: "Active quizzes",
      listItemThree: "Inactive quizzes",
      icon: GiBrain,
      total: savedStatistics.total_quizzes,
      primaryVariable: savedStatistics.active_quizzes,
      secondaryVariable:
        savedStatistics.total_quizzes - savedStatistics.active_quizzes,
    },
    {
      title: "Question",
      listItemOne: "questions",
      listItemTwo: "Active questions",
      listItemThree: "Inactive questions",
      icon: SiCodefactor,
      total: savedStatistics.total_questions,
      primaryVariable: savedStatistics.active_questions,
      secondaryVariable:
        savedStatistics.total_questions - savedStatistics.active_questions,
    },
  ];

  useEffect(() => {
    setShowLoader(isLoading);
  }, [isLoading]);

  useEffect(() => {
    if (statistics) {
      dispatch(saveStatistics(statistics));
    }
  }, [statistics]);

  return (
    <motion.div
      initial={{ opacity: 0.2 }}
      animate={{ opacity: 1 }}
      className="flex flex-col basis-full  gap-10 py-10 px-8 "
    >
      <h1 className="text-primary font-medium text-2xl leading-4">Dashboard</h1>
      <div className="flex gap-8">
        {cards.map((prop) => (
          <AdminHomepageCard
            key={prop.title}
            total={prop.total}
            primaryVariable={prop.primaryVariable}
            secondaryVariable={prop.secondaryVariable}
            title={prop.title}
            listItemOne={prop.listItemOne}
            listItemTwo={prop.listItemTwo}
            listItemThree={prop.listItemThree}
            icon={prop.icon}
          />
        ))}
      </div>
    </motion.div>
  );
};

export default AdminHomepage;
