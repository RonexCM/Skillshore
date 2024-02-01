import { IoMdClose, IoMdStopwatch } from "react-icons/io";
import { useNavigate } from "react-router-dom";
import { useGetQuizByIdQuery } from "../../redux/services/myQuizApiEndpoints";
import { useSelector } from "react-redux";
import { RootState } from "../../redux/store";

type Props = {
  selectQuiz: (id: number) => void;
  modalFor: string;
  setShowModal: (a: boolean) => void;
  id: number;
};
const Loader = () => (
  <div className="fixed z-50 top-0 left-0 w-full h-full flex items-center text-white justify-center bg-opacity-50 bg-gray-900">
    <div role="status">
      <svg
        aria-hidden="true"
        className="w-8 h-8 text-gray-200 animate-spin dark:text-gray-600 fill-blue-600"
        viewBox="0 0 100 101"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"
          fill="currentColor"
        />
        <path
          d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
          fill="currentFill"
        />
      </svg>
      <span className="sr-only">Loading...</span>
    </div>
  </div>
);
const QuizModal = ({ setShowModal, id }: Props) => {
  const { data: QuizData, error, isLoading } = useGetQuizByIdQuery(id);
  const quizTestSlice = useSelector((state: RootState) => state.allModal.data);

  console.log(quizTestSlice);
  const navigate = useNavigate();
  const StartQuiz = () => {
    navigate("/quizzes");
  };

  const closeModal = (
    e: React.MouseEvent<HTMLDivElement | SVGElement | HTMLButtonElement>
  ) => {
    if (e.target === e.currentTarget) {
      setShowModal(false);
    }
  };
  if (isLoading) {
    return <Loader />;
  }
  return (
    <div
      onClick={closeModal}
      id="popup-modal"
      className=" fixed z-20 top-0 left-0 flex items-center justify-center w-full h-full bg-opacity-50 bg-gray-900 "
    >
      {isLoading && <p>Loading...</p>}
      {error && <p>Error fetching quiz data</p>}
      {QuizData && (
        <div className="relative z-10  w-[650px] items-center justify-end ">
          <div className="relative  bg-white  ">
            <button
              type="button"
              className="pb-8 absolute top-3 end-2.5 text-red-700 bg-transparent   text-4xl w-[50px] h-[50px] ms-auto inline-flex justify-center items-center  pt-3 "
              data-modal-hide="popup-modal"
              onClick={() => setShowModal(false)}
            >
              <IoMdClose />
              <span className="sr-only text-xl">Close modal</span>
            </button>
            <div className=" md:p-5 text-center h-auto  ">
              <div className="flex h-[90px] absolute">
                <div className=" ps-2 pe-1    font-bold   h-[75px] w-[140px]">
                  <img src={quizTestSlice.thumbnail} alt="quiz" />
                </div>
                <div className="ps-6">
                  <h4 className="text-center ps-[90px] text-2xl font-bold pt-7">
                    {quizTestSlice.title}
                  </h4>
                </div>
              </div>
              <h3 className="mb-5 pt-[95px] text-[14px]  text-left font-normal text-gray-950 text-clip ">
                {quizTestSlice.description}
              </h3>
              <div className="flex justify-end place-items-end gap-4 pt-5">
                <p className="text-[#2F5CFE] ps-1 pb-[10px] pe-6 text-center text-[14px] font-bold">
                  <button className="pe-[5px]">
                    <IoMdStopwatch />
                  </button>
                  {quizTestSlice.time} min
                </p>
                <button
                  onClick={StartQuiz}
                  className="text-sm py-2 px-6 rounded-lg border-2  bg-[#2F5CFE] text-white "
                >
                  Start Quiz
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
      ;
    </div>
  );
};
export default QuizModal;
