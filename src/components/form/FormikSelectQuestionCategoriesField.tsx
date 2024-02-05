import { ErrorMessage, Field } from "formik";
import { useGetAllQuestionCategoriesQuery } from "../../redux/services/myQuestionCategoryApiEndpoints";
import QuesionCategoriesCustomSelect from "./QuesionCategoriesCustomSelect";

type Props = {
  setFieldValue: (
    field: string,
    value: any,
    shouldValidate?: boolean | undefined
  ) => void;
  selected?: any;
};

const FormikSelectQuestionCategoriesField = ({
  setFieldValue,
  selected,
}: Props) => {
  const { data } = useGetAllQuestionCategoriesQuery();

  return (
    <div className=" h-[76px]">
      <div className=" flex flex-col gap-2  ">
        <label htmlFor="question_categories" className="text-base text-dark">
          Question Categories
        </label>

        <Field
          name="question_categories"
          component={QuesionCategoriesCustomSelect}
          options={data}
          setFieldValue={setFieldValue}
          selected={selected ? selected : []}
        />
      </div>
      <ErrorMessage
        className="text-red-500 text-xs "
        component="div"
        name="question_categories"
      />
    </div>
  );
};

export default FormikSelectQuestionCategoriesField;
