const Footer = () => {
  const date = new Date().getFullYear();
  return (
    <footer className="h-[56px] w-full bg-[#E1E7FF] flex items-center justify-center">
      <p className="text-primary text-foot2 font-sans text-xs font-normal text-center ">
        Copyrights {date} Bootcamp
      </p>
    </footer>
  );
};

export default Footer;
