const Home = () => {
  return (
    <div className="min-h-[100vh] md:min-h-[80vh] w-full bg" id="home">
      <div className="w-[90vw] p-2 md:p-10 max-w-3xl mx-auto">
        <div className="text-primary pt-[25%] md:pt-[5%] font-medium">
          <div className="font-poppins">
            <h1 className="text-2xl">Hi, I am</h1>
            <h1 className="text-4xl font-medium">Sohel.</h1>
          </div>
          <div className="font-moda h-full relative">
            <div className="text-lightWhite h-full">
              <h1 className="text-5xl md:text-7xl">UI/UX &</h1>
              <h1 className="text-8xl w-1/2 md:hidden md:bg-red-500 lg:bg-green-200">
                Full
                <br />
                Stack Web Dev
              </h1>
              <h1 className="text-9xl w-full hidden md:block">
                Full Stack <br /> Web Dev
              </h1>
            </div>
            <div className="absolute transform -translate-x-1 h-full top-0">
              <h1 className="text-5xl md:text-7xl">UI/UX &</h1>
              <h1 className="text-8xl w-1/2 md:hidden">
                Full
                <br />
                Stack Web Dev
              </h1>
              <h1 className="text-9xl w-full hidden md:block">
                Full Stack <br /> Web Dev
              </h1>
            </div>
          </div>
          <div>
            <h1 className="text-xs md:text-sm lg:text-base font-light">
              A blend of creativity and fun
            </h1>
          </div>
        </div>
        <div className="mt-16 w-full flex  justify-end">
          <div className="w-1/3"></div>
          <p className="text-primary text-sm md:text-base font-medium text-right font-poppins">
            Passionate freelance Full Stack Web Developer based in India with
            over 2+ years of hands-on experience in building stuffs <br />- from
            pixels to databases.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Home;
