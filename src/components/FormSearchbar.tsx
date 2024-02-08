import { ChangeEvent } from "react";
import { IoSearch } from "react-icons/io5";

type Props = {
  searchTerm: string;
  setSearchTerm: React.Dispatch<React.SetStateAction<string>>;
  setDebounce: React.Dispatch<React.SetStateAction<boolean>>;
};

const FormSearchbar = ({ searchTerm, setSearchTerm, setDebounce }: Props) => {
  let timer: string | number | NodeJS.Timeout | undefined;
  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    clearTimeout(timer);
    setDebounce(true);
    timer = setTimeout(() => {
      setDebounce(false);
    }, 600);
    setSearchTerm(e.target.value);
  };

  return (
    <div className="relative">
      <IoSearch className="absolute text-2xl text-[#8a8a8a] top-[8px] left-3 border-r-2 pr-2" />
      <input
        type="text"
        id="table-search"
        value={searchTerm}
        onChange={handleChange}
        className="block p-2 ps-10  text-sm text-gray-900 border-2 border-primary-light hover:outline hover:outline-2 hover:outline-offset-[-2px] hover:outline-primary rounded-md w-80 bg-gray-50  "
        placeholder="Search"
      />
    </div>
  );
};

export default FormSearchbar;
