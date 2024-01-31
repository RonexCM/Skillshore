type Props = {
  style: string;
  text: string;
  onClick?: () => void;
};

const Button = ({ style, text, onClick }: Props) => {
  const gray =
    "bg-primary-light bg-opacity-[0.7] text-sm font-semibold text-dark rounded-sm px-5 py-3 hover:text-error hover:bg-[#eeeeee7d] transition-all";
  const dark =
    "bg-dark text-primary-light text-sm font-semibold text-dark rounded-sm px-5 py-3 hover:bg-[#213ebbff]";
  const light =
    "outline outline-2 outline-primary-light outline-opacity-[0.55] bg-[#ffffff] text-primary text-sm font-semibold text-dark rounded-lg px-5 py-3 hover:text-primary-light hover:bg-primary hover:outline-none transition-all";
  const completed =
    " text-primary text-sm text-primary opacity-[0.2]  font-semibold rounded-sm px-5 py-3";
  return (
    <button
      onClick={onClick}
      className={
        style === "gray"
          ? gray
          : style === "dark"
          ? dark
          : style === "light"
          ? light
          : completed
      }
    >
      {text}
    </button>
  );
};

export default Button;
