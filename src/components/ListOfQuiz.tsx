import { useState } from "react";
import DeleteQuizModal from "../pages/admin/modals/quizModals/DeleteQuizModal";
import EditQuizModal from "../pages/admin/modals/quizModals/EditQuizModal";
import { Tooltip } from "flowbite-react";
import { useChangeStatusMutation } from "../redux/services/myQuizApiEndpoints";


type Props = {
  quiz: any;
};

const ListOfQuiz = ({ quiz }: Props) => {
  const [active, setActive] = useState(false);
  const [changeStatus] = useChangeStatusMutation();
  const [showDeleteModal, setShowDeleteModal] = useState(false);
  const [showEditModal, setShowEditModal] = useState(false);
  const handleEdit = () => {
    setShowEditModal(true);
  };
  const handleDelete = () => {
    setShowDeleteModal(true);
  };

  // useEffect(() => {
  //   if (quiz.status === "Active") {
  //     setActive(true);
  //   } else {
  //     setActive(false);
  //   }
  // }, [quiz.status, setActive]);
  const handleActiveChange = async () => {
    await changeStatus({
      id: quiz.id,
      status: active ? "Inactive" : "Active",
    });
    setActive(!active);
  };
  return (
    <>
      <tr key={quiz.id} className="bg-white border-b hover:bg-gray-50">
        <td className=" ps-5">
          <div className="flex items-center whitespace-nowrap">{quiz.id}</div>
        </td>
        <th
          scope="row"
          className=" px-6 py-3 font-normal  text-gray-900 whitespace-normal break-all"
        >
          {quiz.title}
        </th>

        <td className="px-6 py-3 font-normal text-gray-900 whitespace-nowrap  text-start-">
          {quiz.timer}
        </td>
        <td className="px-6 py-3 w-[20%] ps-9 font-semibold">
          {quiz.status === "active" ? (
            <span className="bg-green-100 text-green-800 text-sm font-medium me-2 px-2.5 py-0.5 rounded dark:bg-green-900 dark:text-green-300">
              Active
            </span>
          ) : (
            <span className="bg-red-100 text-red-800 text-sm font-medium me-2 px-2.5 py-0.5 rounded dark:bg-red-900 dark:text-red-300">
              Inactive
            </span>
          )}
        </td>

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
        <DeleteQuizModal setShowModal={setShowDeleteModal} id={quiz.id} />
      )}
      {showEditModal && <EditQuizModal setShowModal={setShowEditModal} />}
    </>
  );
};

export default ListOfQuiz;
