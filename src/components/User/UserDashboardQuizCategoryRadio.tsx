type Props = {
  index: number;
  quizCategory: any;
  selectedCategory: any;
  handleCategoryRadio: (a: any) => void;
};
const UserDashboardQuizCategoryRadio = ({
  index,
  quizCategory,
  selectedCategory,
  handleCategoryRadio,
}: Props) => {
  return (
    <div key={index} className="flex gap-4 items-center">
      <input
        className="border-2 border-primary-light rounded-sm hover:bg-[#689fff]"
        type="radio"
        id={`quizcategory${index + 1}`}
        name={quizCategory.title}
        onChange={() => handleCategoryRadio(quizCategory.title)}
        checked={selectedCategory === quizCategory.title}
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

export default UserDashboardQuizCategoryRadio;
