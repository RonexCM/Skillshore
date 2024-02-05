import ReactSelect from "react-select";
type Props = {
  setFieldValue: (
    field: string,
    value: any,
    shouldValidate?: boolean | undefined
  ) => void;
  options: { value: number; label: string }[];
  selected: any;
};
const QuesionCategoriesCustomSelect = ({ options, setFieldValue }: Props) => {
  return (
    <>
      <ReactSelect
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

export default QuesionCategoriesCustomSelect;
