import { Badge } from "flowbite-react";
import { MdOutlineTimer } from "react-icons/md";
import Button from "../Button";

type Props = {
  index: number;
  quiz: any;
  getStatus: any;
  handleStart: any;
};
const UserQuizzesFilter = ({ index, quiz, getStatus, handleStart }: Props) => {
  return (
    <div
      key={index}
      className="p-6 flex h-auto max-h-[370px] flex-col border-2 items-center border-opacity-[0.55] justify-between border-primary-light rounded-md  transition-all ease-in-out delay-50"
    >
      <img src={quiz.thumbnail} alt="quiz" />
      <div className="flex flex-col py-7 gap-2 items-center ">
        <div className="text- xl  text-dark font-semibold text-center line-clamp-1 hover:line-clamp-none ">
          {quiz.title}
        </div>
        {quiz.result ? (
          <Badge
            className="pr-[12px] pl-[10px] text-xl bg-white "
            color={quiz.result.passed ? "success" : "error"}
            size="xs"
          >
            {getStatus(quiz.result, quiz.retry_after)}
          </Badge>
        ) : (
          <Badge
            className="pr-[12px] pl-[10px] opacity-[0.6] bg-transparent text-sm font-medium"
            color="gray"
            icon={MdOutlineTimer}
          >
            {quiz.time} min
          </Badge>
        )}
      </div>
      {quiz.result ? (
        <Badge>
          <Button
            style={quiz.result.passed ? "completed" : "failed"}
            text={quiz.result.passed ? "Passed" : "Failed"}
          />
        </Badge>
      ) : (
        <Button
          style="light"
          text="Start Quiz"
          onClick={() => handleStart(quiz)}
        />
      )}
    </div>
  );
};

export default UserQuizzesFilter;
