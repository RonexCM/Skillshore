const Footer = () => {
  const date = new Date().getFullYear();
  return (
    <div className="footer bg-foot1 h-14 w-100 flex-shrink-0">
      <footer className="text-foot2 font-sans text-xs font-normal leading-10 text-center pt-2">
        Copyrights {date} Bootcamp
      </footer>
    </div>
  );
};

export default Footer;
