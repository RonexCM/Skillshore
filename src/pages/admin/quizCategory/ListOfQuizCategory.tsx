import { useState } from "react";
import DeleteQuizCategoryModal from "../modals/quizcategoryModals/DeleteQuizCategoryModal";
import EditQuizCategoryModal from "../modals/quizcategoryModals/EditQuizCategoryModal";

type Props = {
  quizCategory: any;
  index: number;
};

const ListOfQuizCategorys = ({ quizCategory }: Props) => {
  const [showDeleteModal, setShowDeleteModal] = useState(false);
  const [showEditModal, setShowEditModal] = useState(false);
  const handleEdit = () => {
    setShowEditModal(true);
  };
  const handleDelete = () => {
    setShowDeleteModal(true);
  };
  return (
    <>
      <tr key={quizCategory.id} className="bg-white border-b hover:bg-gray-50">
        <td className="p-4 pl-6">
          <div className="flex items-center whitespace-nowrap">
            {quizCategory.id}
          </div>
        </td>
        <th
          scope="row"
          className=" px-6 py-3 font-normal  text-gray-900 whitespace-normal break-all"
        >
          {quizCategory.title}
        </th>
        <td className="px-6 py-3 font-normal text-gray-900 whitespace-nowrap ">
          {quizCategory.slug}
        </td>

        <td className="px-6 py-3">
          <div className="flex gap-2">
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

            <button
              onClick={handleDelete}
              className="font-medium text-blue-600 dark:text-blue-500 hover:underline"
            >
              <span className="material-symbols-outlined text-red-600 dark:text-red-500 hover:underline ">
                Delete
              </span>
            </button>
          </div>
        </td>
      </tr>
      {showDeleteModal && (
        <DeleteQuizCategoryModal setShowModal={setShowDeleteModal} />
      )}
      {showEditModal && (
        <EditQuizCategoryModal setShowModal={setShowEditModal} />
      )}
    </>
  );
};

export default ListOfQuizCategorys;
