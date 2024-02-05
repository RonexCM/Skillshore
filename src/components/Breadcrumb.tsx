import { AiFillHome } from "react-icons/ai";
import { MdOutlineKeyboardArrowRight } from "react-icons/md";
import { useNavigate } from "react-router-dom";

type Props = {
  parentLabel: string;
  childLabel: string;
};

const Breadcrumb = ({ parentLabel, childLabel }: Props) => {
  const navigate = useNavigate();

  return (
    <div className="text-primary p-1 pl-0  pr-3 rounded-md text-opacity-80 text-sm mb-5 flex items-center gap-1 self-start ">
      <div className="flex gap-2  cursor-pointer" onClick={() => navigate(-1)}>
        <AiFillHome className="text-lg" />
        <span className="hover:underline">{parentLabel}</span>
      </div>
      <MdOutlineKeyboardArrowRight className="text-xl" />
      <span className="text-[#82a6ef]">{childLabel}</span>
    </div>
  );
};

export default Breadcrumb;
