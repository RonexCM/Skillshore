import { useState } from "react";
import { Tooltip } from "flowbite-react";
import { useNavigate } from "react-router-dom";
import { TQuestionCategoryType } from "../pages/admin/types";
import { motion } from "framer-motion";
import DeleteModal from "./modals/DeleteModal";
import { useDeleteQuestionCategoryMutation } from "../redux/services/myQuestionCategoryApiEndpoints";
import { useDispatch } from "react-redux";

type Props = {
  questionCategory: TQuestionCategoryType;
  index: number;
  startingIndex: number;
};

const ListOfQuestionCategory = ({
  questionCategory,
  index,
  startingIndex,
}: Props) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [showDeleteModal, setShowDeleteModal] = useState(false);
  const handleEdit = () => {
    navigate(`editQuestionCategory/${questionCategory.id}`);
  };
  const handleDelete = () => {
    setShowDeleteModal(true);
  };
  const [deleteQuestionCategory] = useDeleteQuestionCategoryMutation();

  return (
    <>
      <motion.tr
        initial={{ opacity: 0.55 }}
        animate={{ opacity: 1 }}
        key={questionCategory.id}
        className="bg-white border-b hover:bg-gray-50 "
      >
        <td className="pl-6 ">
          <div className="flex my-4 items-center whitespace-nowrap">
            {startingIndex + index}
          </div>
        </td>
        <td className="px-6 font-normal text-gray-900 ">
          <div className="line-clamp-1">{questionCategory.title}</div>
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
          id={questionCategory.id}
          deleteFunction={deleteQuestionCategory}
          modalFor={"question category"}
        />
      )}
    </>
  );
};

export default ListOfQuestionCategory;
