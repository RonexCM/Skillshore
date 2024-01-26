import { useEffect, useState } from "react";
import { Tooltip, Badge } from "flowbite-react";
import { useNavigate } from "react-router-dom";
import { TQuestionType } from "../pages/admin/types";
import { motion } from "framer-motion";
import { useDeleteQuestionMutation } from "../redux/services/myQuestionApiEndpoints";
import DeleteModal from "./modals/DeleteModal";
import { useDispatch } from "react-redux";
import { saveQuestion } from "../redux/slice/questionSlice/questionSlice";
import { useGetAllQuestionCategoriesQuery } from "../redux/services/myQuestionCategoryApiEndpoints";
import { saveAllQuestionCategoriesList } from "../redux/slice/questionCategorySlice/allQuestionCategoriesListSlice";

type Props = {
  question: TQuestionType;
  index: number;
  startingIndex: number;
};

const ListOfQuestions = ({ question, index, startingIndex }: Props) => {
  const navigate = useNavigate();
  const [deleteQuestion] = useDeleteQuestionMutation();

  const dispatch = useDispatch();
  const [showDeleteModal, setShowDeleteModal] = useState(false);
  const [active, setActive] = useState(false);
  // const [changeStatus] = useChangeStatusMutation();
  const handleEdit = () => {
    dispatch(saveQuestion(question));
    navigate(`editQuestion`);
  };
  const handleDelete = () => {
    setShowDeleteModal(true);
  };

  useEffect(() => {
    if (question.status === 1) {
      setActive(true);
    } else {
      setActive(false);
    }
  }, [question.status, setActive]);
  return (
    <>
      <motion.tr
        initial={{ opacity: 0.55 }}
        animate={{ opacity: 1 }}
        key={question.id}
        className="bg-white border-b hover:bg-gray-50 "
      >
        <td className="pl-6 ">
          <div className="flex my-4 items-center whitespace-nowrap">
            {startingIndex + index}
          </div>
        </td>
        <td className="px-6 font-normal text-gray-900 ">
          <div className="line-clamp-1">{question.title}</div>
        </td>
        <td className="px-6 font-normal text-gray-900  whitespace-nowrap">
          {question.weightage}
        </td>
        <td className=" px-6 font-normal text-gray-900 whitespace-nowrap">
          <div className="w-max">
            {active ? (
              <Badge color="success" size="sm">
                Active
              </Badge>
            ) : (
              <Badge color="failure" size="sm">
                Inactive
              </Badge>
            )}
          </div>
        </td>

        <td className="px-6">
          <div className="flex items-center gap-2">
            <Tooltip content="Edit" className="text-blue-600" style="light">
              <button
                onClick={handleEdit}
                className="font-medium  text-blue-600 dark:text-blue-500 hover:underline"
              >
                <span className="relative material-symbols-outlined  text-blue-600 dark:text-blue-500 hover:underline ">
                  Edit
                </span>
              </button>
            </Tooltip>
            <Tooltip content="Delete" className="text-error" style="light">
              <button
                onClick={handleDelete}
                className="font-medium text-blue-600 dark:text-blue-500 hover:underline"
              >
                <span className="material-symbols-outlined text-red-600 dark:text-red-500 hover:underline ">
                  Delete
                </span>
              </button>
            </Tooltip>
          </div>
        </td>
      </motion.tr>
      {showDeleteModal && (
        <DeleteModal
          setShowModal={setShowDeleteModal}
          id={question.id}
          deleteFunction={deleteQuestion}
          modalFor={"question"}
        />
      )}
    </>
  );
};

export default ListOfQuestions;
