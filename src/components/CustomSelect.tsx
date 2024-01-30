import ReactSelect from "react-select";
type Props = {
  setQuestionCategoriesFromSelect: (a: any) => void;
  option?: { value: number; label: string };
  options: { value: number; label: string }[];
};
const CustomSelect = ({
  options,

  setQuestionCategoriesFromSelect,
}: Props) => {
  return (
    <>
      <ReactSelect
        options={options}
        onChange={(selectedOption) => {
          setQuestionCategoriesFromSelect(selectedOption);
        }}
        isMulti={true}
      />
    </>
  );
};

export default CustomSelect;
