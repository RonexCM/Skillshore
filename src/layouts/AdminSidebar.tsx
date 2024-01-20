import { GiBrain } from "react-icons/gi";
import { HiDocumentReport } from "react-icons/hi";
import { MdOutlineCategory, MdQuestionAnswer } from "react-icons/md";
import { SiCodefactor } from "react-icons/si";
import { NavLink } from "react-router-dom";

const AdminSidebar = () => {
  const navElementsStyles =
    " w-[180px] py-[8px] px-[12px] rounded-lg text-dark outline-offset-[-2px] hover:bg-white hover:outline hover:outline-2 hover:outline-primary";
  return (
    <div className="basis-[10px] text-sm shrink-0 border-r-2 border-primary-light flex flex-col gap-1 py-6 px-4 ">
      <NavLink to="." end className={navElementsStyles}>
        <div className="flex  ">
          <div className="pt-[2px] ">
            <MdOutlineCategory />
          </div>
          &nbsp;&nbsp;Quiz Category
        </div>
      </NavLink>
      <NavLink to="quiz" className={navElementsStyles}>
        <div className="flex  ">
          <div className="pt-[2px] ">
            <GiBrain />
          </div>
          &nbsp;&nbsp;Quiz
        </div>
      </NavLink>
      <NavLink to="question-category" className={navElementsStyles}>
        <div className="flex  ">
          <div className="pt-[2px] ">
            <MdQuestionAnswer />
          </div>
          &nbsp;&nbsp;Question Category
        </div>
      </NavLink>
      <NavLink to="question" className={navElementsStyles}>
        <div className="flex  ">
          <div className="pt-[2px] ">
            <SiCodefactor />
          </div>
          &nbsp;&nbsp;Question
        </div>
      </NavLink>
      <NavLink to="report" className={navElementsStyles}>
        <div className="flex  ">
          <div className="pt-[2px] ">
            <HiDocumentReport />
          </div>
          &nbsp;&nbsp;Report
        </div>
      </NavLink>
    </div>
  );
};

export default AdminSidebar;
