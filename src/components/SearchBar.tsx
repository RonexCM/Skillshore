import { IoMdSearch } from "react-icons/io";

type Props = {
  placeholder: string;
};
const Searchbar = ({ placeholder }: Props) => {
  return (
    <div className="relative">
      <IoMdSearch className="absolute text-[25px] text-primary top-[10px] left-4 pr-2" />
      <input
        type="text"
        id="table-search"
        value=""
        onChange={() => {}}
        className="block py-[12px] px-[16px] pl-10 w-full  text-sm text-gray-900 border-2 border-primary-light border-opacity-[0.5] placeholder:opacity-[0.5] hover:outline hover:outline-2 hover:outline-offset-[-2px] hover:outline-primary rounded-md bg-[#ffffff] "
        placeholder={placeholder}
      ></input>
    </div>
  );
};

export default Searchbar;
