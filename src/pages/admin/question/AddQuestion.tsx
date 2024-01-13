const AddQuestion = () => {
  return (
    <div className="w-full p-5  pb-32">
      <div className="flex justify-between p-5 pb-0 ">
        <h1 className="text-primary font-medium text-2xl">Add New Question</h1>
      </div>
      <p className="text-primary text-opacity-80 text-sm px-5 mb-9">
        Question / Add New Question
      </p>
      <div className="border-2 p-5 border-primary-light rounded-xl w-full h-full">
        <form action="">
          <button
            type="submit"
            className="bg-dark text-primary-light rounded-lg text-xs font-medium py-button-padding-y px-button-padding-x outline-offset-[-2px] hover:bg-white hover:outline hover:outline-2 hover:outline-primary hover:text-dark"
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default AddQuestion;
