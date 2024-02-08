import { FC } from "react";
import { IconType } from "react-icons";
import { useNavigate } from "react-router-dom";
import { MdOutlineKeyboardArrowRight } from "react-icons/md";

interface Props {
  icon: IconType;
  title: string;
  subTitle: string;
}

const BreadCrumb: FC<Props> = ({ icon: Icon, title, subTitle }) => {
  const navigate = useNavigate();
  return (
    <div className="flex flex-col justify-start items-left">
      <div className="text-primary  text-lg flex items-center gap-1 self-start ">
        <div
          className="flex gap-2  cursor-pointer"
          onClick={() => navigate(-1)}
        >
          <div className="hover:underline flex gap-2">
            <Icon className="text-lg mt-1" />
            {title}
          </div>
        </div>
        <MdOutlineKeyboardArrowRight className="text-lg " />
        <span className="text-primary"> {subTitle}</span>
      </div>
    </div>
  );
};

export default BreadCrumb;
