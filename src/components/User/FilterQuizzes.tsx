type Props = {
  index: number;
  quizCategory: any;
  selectedCategory: any;
  handleCheckbox: (a: any) => void;
};
const FilterQuizzes = ({
  index,
  quizCategory,
  selectedCategory,
  handleCheckbox,
}: Props) => {
  return (
    <div key={index} className="flex gap-4 items-center">
      <input
        className="border-2 border-primary-light rounded-sm hover:bg-[#689fff]"
        type="checkBox"
        id={`quizcategory${index + 1}`}
        name={quizCategory.title}
        onChange={() => handleCheckbox(quizCategory.id)}
        checked={
          selectedCategory.length > 0 &&
          selectedCategory.includes(quizCategory.id)
        }
      />
      <label
        className="text-sm text-dark font-normal"
        htmlFor={`quizcategory${index + 1}`}
      >
        {quizCategory.title}
      </label>
    </div>
  );
};

export default FilterQuizzes;