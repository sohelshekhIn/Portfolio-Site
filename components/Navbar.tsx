const Navbar = () => {
  return (
    <div className="flex sticky top-0 z-50 justify-around p-5 md:p-5 mx-auto uppercase text-primary bg-90 md:bg-md-90 text-sm">
      <a className="w-full text-center" href="/#home">
        Home
      </a>
      <a className="w-full text-center" href="/#info">
        Info
      </a>
      <a className="w-full text-center" href="/#work">
        Work
      </a>
      <a className="w-full text-center" href="/#contact">
        Contact
      </a>
    </div>
  );
};

export default Navbar;
