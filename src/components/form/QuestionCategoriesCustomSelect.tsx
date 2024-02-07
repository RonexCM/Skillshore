import ReactSelect from "react-select";
type Props = {
  setFieldValue: (
    field: string,
    value: any,
    shouldValidate?: boolean | undefined
  ) => void;
  options: { value: number; label: string }[];
  selected?: any;
};

const QuestionCategoriesCustomSelect = ({
  options,
  setFieldValue,
  selected,
}: Props) => {
  return (
    <>
      <ReactSelect
        defaultValue={selected}
        options={options}
        onChange={(selectedOption) => {
          setFieldValue(
            "question_categories",
            selectedOption.map((option) => option.value)
          );
        }}
        isMulti={true}
      />
    </>
  );
};

export default QuestionCategoriesCustomSelect;
