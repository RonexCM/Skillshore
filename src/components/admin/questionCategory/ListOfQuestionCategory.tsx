import { useState } from "react";
<<<<<<< HEAD
import DeleteQuestionCategoryModal from "../../../pages/admin/modals/questioncategoryModals/DeleteQuestionCategoryModal";
import EditQuestionCategoryModal from "../../../pages/admin/modals/questioncategoryModals/EditQuestionCategoryModal";
=======
import DeleteQuestionCategoryModal from "../../../pages/admin/modals/questionCategoryModals/DeleteQuestionCategoryModal";
import EditQuestionCategoryModal from "../../../pages/admin/modals/questionCategoryModals/EditQuestionCategoryModal";
import { Tooltip } from "flowbite-react";
>>>>>>> 3cf0cf7797fcfdc7b74036988bf011c430c9104d

type Props = {
  questionCategory: any;
};

const ListOfQuestionCategorys = ({ questionCategory }: Props) => {
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
          <div className="flex items-center">{questionCategory.id}</div>
        </td>
        <th
          scope="row"
          className=" px-6 py-3 font-normal  text-gray-900 whitespace-normal break-all"
        >
          {questionCategory.title}
        </th>
        {/* <td className="px-6 py-3 font-normal text-gray-900 whitespace-nowrap ">
          {questionCategory.slug}
        </td> */}
        {/* <td className="px-6 my-3 font-normal text-gray-900 break-all  line-clamp-2 ">
          {questionCategory.description}
        </td> */}

        {/* <td className="px-6 py-3 font-normal text-gray-900 whitespace-nowrap  text-center">
          {questionCategory.weightage}
        </td> */}

        <td className="px-6 py-3">
          <div className="flex gap-2">
            <Tooltip content="Edit" className="text-blue-600" style="light">
              <button
                onClick={handleEdit}
                className="font-medium  text-blue-600 dark:text-blue-500 hover:underline"
              >
                <span className="material-symbols-outlined  text-blue-600 dark:text-blue-500 hover:underline ">
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
        <DeleteQuestionCategoryModal
          setShowModal={setShowDeleteModal}
          id={questionCategory.id}
        />
      )}
      {showEditModal && (
        <EditQuestionCategoryModal setShowModal={setShowEditModal} />
      )}
    </>
  );
};

export default ListOfQuestionCategorys;
