import { ErrorMessage, Field } from "formik";
import { useGetAllQuizCategoriesQuery } from "../../redux/services/myQuizCategoryApiEndpoints";

const FormikSelectQuizCategoryField = () => {
  const { data: quizzes } = useGetAllQuizCategoriesQuery();

  return (
    <div className="h-[76px]">
      <div className="flex flex-col gap-2">
        <label htmlFor="category_id" className="text-base text-dark">
          Category
        </label>
        <Field
          as="select"
          type="text"
          id="category_id"
          autoComplete="current-category_id"
          name="category_id"
          className="p-1 px-2 text-sm rounded-md w-full  border-2 border-primary-light hover:outline hover:outline-2 hover:outline-offset-[-2px] hover:outline-primary"
        >
          <option value="" className="text-gray-300">
            select category...
          </option>
          {quizzes?.map((category) => {
            return (
              <option key={category.id} value={category.id}>
                {category.title}
              </option>
            );
          })}
        </Field>
      </div>
      <ErrorMessage
        className="text-red-500 text-xs "
        component="div"
        name="category_id"
      />
    </div>
  );
};

export default FormikSelectQuizCategoryField;
