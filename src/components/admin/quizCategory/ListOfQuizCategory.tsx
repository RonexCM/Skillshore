import { useState } from "react";
import DeleteQuizCategoryModal from "../../../pages/admin/modals/quizcategoryModals/DeleteQuizCategoryModal";
import EditQuizCategoryModal from "../../../pages/admin/modals/quizcategoryModals/EditQuizCategoryModal";
import { Tooltip } from "flowbite-react";
import { useDispatch } from "react-redux";
import { saveQuizCategoryDetails } from "../../../redux/slice/editQuizCategorySlice";
import { QuizCategoryType } from "../../../pages/list/types/types";
type Props = {
  quizCategory: QuizCategoryType;
  index: number;
};

const ListOfQuizCategorys = ({ quizCategory, index }: Props) => {
  const dispatch = useDispatch();
  const [showDeleteModal, setShowDeleteModal] = useState(false);
  const [showEditModal, setShowEditModal] = useState(false);
  const handleEdit = () => {
    dispatch(saveQuizCategoryDetails(quizCategory));
    setShowEditModal(true);
  };
  const handleDelete = () => {
    setShowDeleteModal(true);
  };
  return (
    <>
      <tr
        key={quizCategory.id}
        className=" bg-white border-b hover:bg-gray-50 
        "
      >
        <td className="p-6  ">
          <div className="flex items-center">{index + 1}</div>
        </td>
        <th
          scope="row"
          className=" px-2  py-3 font-normal  text-gray-900 whitespace-normal break-all"
        >
          {quizCategory.title}
        </th>

        <td className="px-4 pe-[150px] py-3">
          <div className="flex gap-4">
            <Tooltip content="Edit" className="text-blue-600" style="light">
              <button
                onClick={handleEdit}
                className="font-medium  text-blue-600 dark:text-blue-500 hover:underline"
              >
                <span
                  data-tooltip-target="tooltip-default"
                  className="material-symbols-outlined  text-blue-600 dark:text-blue-500 hover:underline "
                >
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
      </tr>
      {showDeleteModal && (
        <DeleteQuizCategoryModal
          setShowModal={setShowDeleteModal}
          id={quizCategory.id}
        />
      )}
      {showEditModal && (
        <EditQuizCategoryModal setShowModal={setShowEditModal} />
      )}
    </>
  );
};

export default ListOfQuizCategorys;
