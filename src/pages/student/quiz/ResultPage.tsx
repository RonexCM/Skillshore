import { Link } from "react-router-dom";

const ResultPage = () => {
  return (
    <div className="m-auto shadow-[0_10px_40px_-15px_rgba(0,0,0,0.5)] w-[670px] h-max text-dark rounded-[24px] mt-[32px] p-[40px] ">
      <div className="h-[400px] flex flex-col gap-24 items-center">
        <div>
          <h1 className="text-primary text-lg">
            Congratulation <br />
            <span>You have completed this Quiz</span>
          </h1>
        </div>
        <div>
          <Link>Back to Quiz</Link>
        </div>
      </div>
    </div>
  );
};

export default ResultPage;
