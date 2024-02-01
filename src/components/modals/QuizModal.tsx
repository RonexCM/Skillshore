import { FaThumbsUp } from "react-icons/fa";
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
const QuizModal = ({ setShowModal, id }: Props) => {
  const { data: QuizData, error, isLoading } = useGetQuizByIdQuery(id);
  const quizTestSlice = useSelector((state: RootState) => state.quizModal.data);

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
  return (
    <div
      onClick={closeModal}
      id="popup-modal"
      className=" fixed z-20 top-0 left-0 flex items-center justify-center w-full h-full bg-opacity-50 bg-gray-900"
    >
      {isLoading && <p>Loading...</p>}
      {error && <p>Error fetching quiz data</p>}
      {QuizData && (
        <div className="relative z-10  w-[650px] items-center justify-end ">
          <div className="relative  bg-white  ">
            <button
              type="button"
              className="pb-8 absolute top-3 end-2.5 text-red-700 bg-transparent   text-4xl w-[50px] h-[50px] ms-auto inline-flex justify-center items-center  "
              data-modal-hide="popup-modal"
              onClick={() => setShowModal(false)}
            >
              <IoMdClose />
              <span className="sr-only text-xl">Close modal</span>
            </button>
            <div className=" md:p-5 text-center h-[260px] ">
              <div className="flex h-[56px]">
                <div className=" ps-4 pe-1 pt-5 font-bold text-2xl bg-[#F7DF1E]">
                  {/* <img src={quizTestSlice.thumbnail} alt="quiz" /> JS */}
                </div>
                <div className="ps-6">
                  {/* <h4 className="text-left font-bold pb-1">{quizTestSlice.title}</h4> */}
                  <span className="flex">
                    <p className="rounded-lg bg-[#E1E7FF] ps-1 pe-2 text-center text-[14px] font-bold">
                      <button className="pe-1">
                        <FaThumbsUp />
                      </button>
                      Recommended
                    </p>
                    <h5 className="ps-2">
                      base on your skill and work history
                    </h5>
                  </span>
                </div>
              </div>
              <h3 className="mb-5 pt-7 text-[14px] text-left font-normal text-gray-950 ">
                {/* {quizTestSlice.description} */}
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Incidunt praesentium tempore, illo excepturi deserunt corporis
                nostrum animi, voluptate ut, rem dolorem ad porro eligendi!
              </h3>
              <div className="flex justify-end place-items-end gap-1">
                <p className="text-[#2F5CFE] ps-1 pb-[10px] pe-6 text-center text-[14px] font-bold">
                  <button className="pe-[5px]">
                    <IoMdStopwatch />
                  </button>
                  {/* {quizTestSlice.time} min */}
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
