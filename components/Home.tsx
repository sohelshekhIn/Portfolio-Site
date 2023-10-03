import {
  OpacityAnimatedText,
  PositionAnimatedText,
  SlideInLoading,
  SlideInText,
} from "./AnimateClientComps/HomeText";

const Home = () => {
  const baseDelay = 0;
  return (
    <SlideInLoading>
      <div className="min-h-[100vh] md:min-h-[80vh] w-full bg" id="home">
        <div className="w-[90vw] p-2 md:p-10 max-w-3xl mx-auto">
          <div className="text-primary pt-[25%] md:pt-[5%] font-medium">
            <div className="font-poppins">
              <h1 className="text-2xl">
                <OpacityAnimatedText delay={baseDelay}>
                  Hi, I am
                </OpacityAnimatedText>
              </h1>
              <h1 className="text-4xl font-medium">
                <OpacityAnimatedText delay={baseDelay + 1.5}>
                  Sohel.
                </OpacityAnimatedText>
              </h1>
            </div>
            <div className="font-moda h-full relative">
              <div className="text-primary w-4/5 md:w-11/12  h-full drop-shadow-[4px_0px_0_rgba(236,243,245,1)]">
                <h1 className="text-5xl md:text-7xl">
                  <PositionAnimatedText delay={baseDelay + 2.4}>
                    UI/UX &
                  </PositionAnimatedText>
                </h1>
                <h1 className="text-8xl lg:text-9xl">
                  <PositionAnimatedText delay={baseDelay + 2.8}>
                    Full Stack Web Dev
                  </PositionAnimatedText>
                </h1>
              </div>
            </div>
            <div>
              <h1 className="text-xs md:text-sm lg:text-base font-light">
                <PositionAnimatedText delay={baseDelay + 3.2} type="small">
                  A blend of creativity and fun
                </PositionAnimatedText>
              </h1>
            </div>
          </div>
          <div className="mt-16 w-full flex  justify-end">
            <div className="w-1/3"></div>
            <p className="text-primary text-sm md:text-base font-medium text-right font-poppins">
              <SlideInText delay={baseDelay + 3.8}>
                Passionate freelance Full Stack Web Developer based in India
                with over 2+ years of hands-on experience in building stuffs{" "}
                <br />- from pixels to databases.
              </SlideInText>
            </p>
          </div>
        </div>
      </div>
    </SlideInLoading>
  );
};

export default Home;
