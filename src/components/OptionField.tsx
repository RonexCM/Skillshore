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
    <div className=" flex items-center h-[100px] m-[8px]">
      <div
        className={`font-bold  ${
          isSelected
            ? "bg-primary text-white p-6"
            : "text-primary bg-primary-light p-[1.66rem]"
        }  h-full `}
        onClick={handleSelect}
      >
        {alphaIndex}
        {isSelected && <FaCheck color="white" className=" text-primary mt-5" />}
      </div>
      <div className="ml-5">{option}</div>
    </div>
  );
};

export default OptionField;
