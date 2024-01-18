import { useEffect, useState } from "react";
import DeleteQuestionModal from "../../../pages/admin/modals/questionModals/DeleteQuestionModal";

import { Tooltip, ToggleSwitch } from "flowbite-react";
import { useChangeStatusMutation } from "../../../redux/services/myQuestionApiEndpoints";
import { useDispatch } from "react-redux";
import { saveQuestionDetails } from "../../../redux/slice/questionSlice/editQuestionSlice";
import { QuestionType } from "../../../pages/admin/types/types";
import { useNavigate } from "react-router-dom";
type Props = {
  question: QuestionType;
  index: number;
};

const ListOfQuestions = ({ question, index }: Props) => {
  const navigate = useNavigate();

  const dispatch = useDispatch();
  const [showDeleteModal, setShowDeleteModal] = useState(false);
  const [active, setActive] = useState(false);
  const [changeStatus] = useChangeStatusMutation();
  const handleEdit = () => {
    dispatch(saveQuestionDetails(question));
    navigate("edit-question");
  };
  const handleDelete = () => {
    setShowDeleteModal(true);
  };

  useEffect(() => {
    if (question.status === "Active") {
      setActive(true);
    } else {
      setActive(false);
    }
  }, [question.status, setActive]);
  const handleActiveChange = async () => {
    await changeStatus({
      id: question.id,
      status: active ? "Inactive" : "Active",
    });
    setActive(!active);
  };
  return (
    <>
      <tr key={question.id} className="bg-white border-b hover:bg-gray-50">
        <td className="pl-6 ">
          <div className="flex my-4 items-center whitespace-nowrap">
            {index + 1}
          </div>
        </td>
        <td className="px-6 font-normal text-gray-900 ">
          <div className="line-clamp-1">{question.title}</div>
        </td>
        <td className="px-6 font-normal text-gray-900  whitespace-nowrap">
          {question.weightage}
        </td>
        <td className=" px-6 font-normal text-gray-900 whitespace-nowrap">
          <div>
            <ToggleSwitch
              checked={active}
              label={active ? "Active" : "Inactive"}
              onChange={handleActiveChange}
              color="green"
            />
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
      </tr>
      {showDeleteModal && (
        <DeleteQuestionModal
          setShowModal={setShowDeleteModal}
          id={question.id}
        />
      )}
    </>
  );
};

export default ListOfQuestions;
