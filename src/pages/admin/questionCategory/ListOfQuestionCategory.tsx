import { useState } from "react";
import DeleteQuestionCategoryModal from "../modals/questionCategoryModals/DeleteQuestionCategoryModal";
import EditQuestionCategoryModal from "../modals/questionCategoryModals/EditQuestionCategoryModal";

type Props = {
  questionCategory: any;
  index: number;
};

const ListOfQuestionCategorys = ({ questionCategory, index }: Props) => {
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
      <tr
        key={questionCategory.id}
        className="bg-white border-b hover:bg-gray-50"
      >
        <td className="p-4 pl-6">
          <div className="flex items-center">{index + 1}</div>
        </td>
        <th
          scope="row"
          className=" px-6 py-3 font-normal  text-gray-900 whitespace-normal break-all"
        >
          {questionCategory.title}
        </th>
        <td className="px-6 py-3 font-normal text-gray-900 whitespace-nowrap ">
          {questionCategory.slug}
        </td>
        <td className="px-6 my-3 font-normal text-gray-900 break-all  line-clamp-2 ">
          {questionCategory.description}
        </td>

        <td className="px-6 py-3 font-normal text-gray-900 whitespace-nowrap  text-center">
          {questionCategory.weightage}
        </td>

        <td className="px-6 py-3">
          <div className="flex gap-2">
            <button
              onClick={handleEdit}
              className="font-medium  text-blue-600 dark:text-blue-500 hover:underline"
            >
              <span className="material-symbols-outlined  text-blue-600 dark:text-blue-500 hover:underline ">
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
        <DeleteQuestionCategoryModal setShowModal={setShowDeleteModal} />
      )}
      {showEditModal && (
        <EditQuestionCategoryModal setShowModal={setShowEditModal} />
      )}
    </>
  );
};

export default ListOfQuestionCategorys;
