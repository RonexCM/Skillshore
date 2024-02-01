import skillshorelogo from "../assets/skillshoresvg.svg";
const PageNotFound = () => {
  return (
    <div className="flex justify-center items-center w-screen h-screen">
      <main className="flex flex-col gap-8 justify-center items-center  h-[300px]">
        <img
          className="w-[300px] bg-primary rounded-lg p-4 "
          src={skillshorelogo}
          alt="skillshorelogo"
        />
        <h1 className="text-3xl font-semibold text-dark">
          Sorry, the page you are looking for does not exist!
        </h1>
      </main>
    </div>
  );
};

export default PageNotFound;
