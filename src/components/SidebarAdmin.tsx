import { NavLink } from "react-router-dom";

const navElementsStyles =
  "w-max py-[8px] px-[20px] rounded-xl text-dark outline-offset-[-2px] hover:bg-white hover:outline hover:outline-2 hover:outline-primary  focus:bg-dark focus:text-primary-light";

const SidebarAdmin = () => {
  return (
    <div className="basis-[100px] text-sm shrink-0 border-r-2 border-primary-light flex flex-col gap-1 py-6 px-4">
      <NavLink to="." className={navElementsStyles}>
        Quiz Category
      </NavLink>
      <NavLink to="quiz" className={navElementsStyles}>
        Quiz
      </NavLink>
      <NavLink to="question-category" className={navElementsStyles}>
        Question Category
      </NavLink>
      <NavLink to="question" className={navElementsStyles}>
        Question
      </NavLink>
      <NavLink to="report" className={navElementsStyles}>
        report
      </NavLink>
    </div>
  );
};

export default SidebarAdmin;
