const Header = () => {
  return (
    <nav className="w-auto h-14 dark:bg-dark">
      <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-2 p-4">
        <nav className="flex items-center space-x-3 rtl:space-x-reverse">
          <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-nav1">
            Skill<span className="dark:text-nav2 cursor-pointer">Shore</span>
          </span>
        </nav>
      </div>
    </nav>
  );
};

export default Header;
