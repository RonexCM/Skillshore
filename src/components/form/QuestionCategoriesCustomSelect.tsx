import ReactSelect from "react-select";
type Props = {
  setFieldValue: (
    field: string,
    value: any,
    shouldValidate?: boolean | undefined
  ) => void;
  options: { value: number; label: string }[];
  selected?: any;

  handleBlur: any;
};

const QuestionCategoriesCustomSelect = ({
  options,
  setFieldValue,
  selected,
  handleBlur,
}: Props) => {
  return (
    <>
      <ReactSelect
        styles={{
          container: (provided) => ({
            ...provided,
            display: "flex",
            flex: 1,
          }),
          control: (baseStyles) => ({
            ...baseStyles,
            width: "100%",
            height: "30px",
            overflowY: "hidden",
            border: "2px solid #E1E7FF",
            ":hover": {
              overflow: "auto",
              height: "auto",
              border: "2px solid #2F5CFE",
            },
          }),
          dropdownIndicator: () => ({
            display: "none",
          }),
          clearIndicator: (provided) => ({
            ...provided,
            cursor: "pointer",
            alignSelf: "flex-start",
            transform: "none",

            ":hover": {
              color: "red",
              backgroundColor: "#efb1b157",
              borderRadius: "4px",
            },
          }),
          indicatorSeparator: () => ({
            display: "none",
          }),
        }}
        onBlur={(e) => handleBlur(e)}
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
