import { Link } from "react-router-dom";

const Question = () => {
  return (
    <div className="basis-full flex flex-col  gap-20 p-5">
      <div className="flex justify-between p-5  ">
        <h1 className="text-primary font-medium text-2xl">Question</h1>
        <Link
          to="addquizcategory"
          className="bg-dark text-primary-light rounded-lg text-xs font-medium py-button-padding-y px-button-padding-x outline-offset-[-2px] hover:bg-white hover:outline hover:outline-2 hover:outline-primary hover:text-dark"
        >
          +Add Question
        </Link>
      </div>
      <div className="  outline outline-2 outline-primary-light w-full rounded-xl text-center">
        <div className="relative overflow-x-auto shadow-md sm:rounded-lg text-primary-light">
          <label className="sr-only items-end">Search</label>
          <div className="relative item ps-3 pt-1 pb-1">
            <div className="absolute inset-y-0  rtl:inset-r-0 rtl:right-0 flex items-center ps-3 pointer-events-none ">
              <svg
                className="w-5 h-5 text-gray-500 dark:text-gray-400"
                aria-hidden="true"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill-rule="evenodd"
                  d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z"
                  clip-rule="evenodd"
                ></path>
              </svg>
            </div>
            <input
              type="text"
              id="table-search"
              className="block p-2 ps-10  text-sm text-gray-900 border border-gray-300 rounded-lg w-80 bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="Search Question"
            />
          </div>
        </div>
        <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
          <thead className="text-base text-primary-light  bg-dark dark:bg-gray-700 dark:text-gray-400">
            <tr>
              <th scope="col" className="p-2 w-[20px]">
                <div className="flex items-center text-base w-[20px]">S.N</div>
              </th>
              <th scope="col" className="px-6 py-3 w-[350px]">
                Title
              </th>
              <th scope="col" className="px-6 py-3">
                Slug
              </th>
              <th scope="col" className="px-6 py-3">
                Description
              </th>

              <th scope="col" className="px-6 py-3 text-center w-[50px] ">
                Weightage
              </th>

              <th scope="col" className="px-6 py-3 w-[135px]">
                Action
              </th>
            </tr>
          </thead>
          <tbody>
            <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
              <td className="p-4 ps-4">
                <div className="flex items-center">1</div>
              </td>
              <th
                scope="row"
                className=" font-medium text-gray-900 whitespace-normal break-all dark:text-primary-light"
                // Adjust the max width based on your design
              >
                What does HTML stand for?Lorem ipsum dolor sit amet consectetur
                adipisicing elit. Debitis aperiam quaerat voluptatibus modi quas
                consequuntur cumque perferendis earum maiores officiis.
              </th>
              <td className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-primary-light">
                html
              </td>
              <td className="font-medium text-gray-900 whitespace-normal break-all dark:text-primary-light">
                page lauout Lorem ipsum dolor sit amet, consectetur adipisicing
                elit. Ea iusto molestiae harum esse natus veniam quo quidem
                maxime veritatis dolore?Lorem ipsum, dolor sit amet consectetur
                adipisicing elit. Esse omnis eveniet nulla culpa dolore
                provident sunt similique animi odit dolores!
              </td>

              <td className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-primary-light text-center">
                20
              </td>

              <td className="px-6 py-4">
                <a
                  href="#"
                  className="font-medium  text-blue-600 dark:text-blue-500 hover:underline"
                >
                  <span className="material-symbols-outlined  text-blue-600 dark:text-blue-500 hover:underline ">
                    Edit
                  </span>
                </a>
                <a
                  href="#"
                  className="font-medium text-blue-600 dark:text-blue-500 hover:underline"
                >
                  <span className="material-symbols-outlined text-red-600 dark:text-red-500 hover:underline ps-2 ">
                    Delete
                  </span>
                </a>
              </td>
            </tr>
          </tbody>
        </table>
        <nav
          className="flex items-center flex-column flex-wrap md:flex-row justify-between pt-4 p-3"
          aria-label="Table navigation"
        >
          <span className="text-sm font-normal text-gray-500 dark:text-gray-400 mb-4 md:mb-0 block w-full md:inline md:w-auto">
            Showing{" "}
            <span className="font-semibold text-gray-900 dark:text-white">
              1-10
            </span>{" "}
            of{" "}
            <span className="font-semibold text-gray-900 dark:text-white">
              1000
            </span>
          </span>
          <ul className="inline-flex -space-x-px rtl:space-x-reverse text-sm h-8">
            <li>
              <a
                href="#"
                className="flex items-center justify-center px-3 h-8 ms-0 leading-tight text-gray-500 bg-white border border-gray-300 rounded-s-lg hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
              >
                Previous
              </a>
            </li>
            <li>
              <a
                href="#"
                className="flex items-center justify-center px-3 h-8 leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
              >
                1
              </a>
            </li>
            <li>
              <a
                href="#"
                className="flex items-center justify-center px-3 h-8 leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
              >
                2
              </a>
            </li>
            <li>
              <a
                href="#"
                aria-current="page"
                className="flex items-center justify-center px-3 h-8 text-blue-600 border border-gray-300 bg-blue-50 hover:bg-blue-100 hover:text-blue-700 dark:border-gray-700 dark:bg-gray-700 dark:text-white"
              >
                3
              </a>
            </li>
            <li>
              <a
                href="#"
                className="flex items-center justify-center px-3 h-8 leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
              >
                4
              </a>
            </li>
            <li>
              <a
                href="#"
                className="flex items-center justify-center px-3 h-8 leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
              >
                5
              </a>
            </li>
            <li>
              <a
                href="#"
                className="flex items-center justify-center px-3 h-8 leading-tight text-gray-500 bg-white border border-gray-300 rounded-e-lg hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
              >
                Next
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </div>
    // </div>
  );
};

export default Question;
