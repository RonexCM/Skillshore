import React from "react";
import { FaCheck } from "react-icons/fa";
import { TOptionFieldProps } from "../pages/student/types";

const OptionField = ({
  index,
  option,
  onSelect,
  isSelected,
}: TOptionFieldProps) => {
  const handleSelect: React.MouseEventHandler<HTMLDivElement> = (e) => {
    e.preventDefault();
    onSelect(index);
  };

  const alphaIndex = String.fromCharCode(65 + index);

  return (
    <div className=" flex items-center h-4 ">
      <div
        className={`mr-5  font-bold ${
          isSelected ? "bg-primary text-white" : "text-primary"
        } p-5  `}
        onClick={handleSelect}
      >
        {alphaIndex}
        {isSelected && <FaCheck color="white" className="mt-5 text-primary" />}
      </div>
      <div>{option}</div>
    </div>
  );
};

export default OptionField;
