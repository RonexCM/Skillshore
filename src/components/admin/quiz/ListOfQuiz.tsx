import { useState } from "react";
import DeleteQuizModal from "../../../pages/admin/modals/quizModals/DeleteQuiz";
import EditQuizModal from "../../../pages/admin/modals/quizModals/EditQuiz";

type Props = {
  quiz: any;
  index: number;
};

const ListOfQuizs = ({ quiz, index }: Props) => {
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
      <tr key={quiz.id} className="bg-white border-b hover:bg-gray-50">
        <td className="p-4 pl-6">
          <div className="flex items-center">{index + 1}</div>
        </td>
        <th
          scope="row"
          className=" px-6 py-3 font-normal  text-gray-900 whitespace-normal break-all"
        >
          {quiz.title}
        </th>
        <td className="px-6 py-3 font-normal text-gray-900 whitespace-nowrap ">
          {quiz.slug}
        </td>
        <td className="px-6 my-3 font-normal text-gray-900 break-all  line-clamp-2 ">
          {quiz.description}
        </td>

        <td className="px-6 py-3 font-normal text-gray-900 whitespace-nowrap  text-center">
          {quiz.thumbnail}
        </td>

        <td className="px-6 py-3 font-normal text-gray-900 whitespace-nowrap  text-center">
          {quiz.timer}
        </td>

        <td className="px-6 py-3 font-normal text-gray-900 whitespace-nowrap  text-center">
          {quiz.retry_after}
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
      {showDeleteModal && <DeleteQuizModal setShowModal={setShowDeleteModal} />}
      {showEditModal && <EditQuizModal setShowModal={setShowEditModal} />}
    </>
  );
};

export default ListOfQuizs;
