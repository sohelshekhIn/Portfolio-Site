import {
  OpacityAnimatedElement,
  PositionAnimatedText,
  SlideInText,
} from "./AnimateClientComps/HomeText";

const HackathonsContribution = () => {
  return (
    <div id="hackathons" className="py-16 bg-lightWhite text-secondary">
      <div className="w-[90vw] max-w-3xl p-2 md:p-10 mx-auto">
        <h1 className="text-6xl font-moda">
          <PositionAnimatedText onScroll={true}>
            Hackathons
          </PositionAnimatedText>
        </h1>
        <div className="py-8 mt-8 grid grid-cols-1 md:grid-cols-2 gap-12">
          {/* Mentorship */}
          <div className="text-center">
            <OpacityAnimatedElement delay={0.5}>
              <h2 className="text-primary text-5xl font-bold">350+</h2>
              <p className="text-gray-600 mt-2 text-lg">
                Teams Mentored Across 10+ Hackathons
              </p>
            </OpacityAnimatedElement>
          </div>

          {/* Judging */}
          <div className="text-center">
            <OpacityAnimatedElement delay={0.7}>
              <h2 className="text-primary text-5xl font-bold">400+</h2>
              <p className="text-gray-600 mt-2 text-lg">
                Teams Judged for Innovation and Impact
              </p>
            </OpacityAnimatedElement>
          </div>

          {/* Workshops */}
          <div className="text-center">
            <OpacityAnimatedElement delay={0.9}>
              <h2 className="text-primary text-5xl font-bold">10+</h2>
              <p className="text-gray-600 mt-2 text-lg">
                Workshops Delivered on Modern Web Development
              </p>
            </OpacityAnimatedElement>
          </div>

          {/* Hackers Supported */}
          <div className="text-center">
            <OpacityAnimatedElement delay={1.1}>
              <h2 className="text-primary text-5xl font-bold">1000+</h2>
              <p className="text-gray-600 mt-2 text-lg">
                Hackers Supported with Technical Guidance
              </p>
            </OpacityAnimatedElement>
          </div>

          {/* Logistics */}
          <div className="text-center md:col-span-2">
            <OpacityAnimatedElement delay={1.3}>
              <h2 className="text-primary text-5xl font-bold">10+</h2>
              <p className="text-gray-600 mt-2 text-lg">
                Events Supported with End-to-End Logistics
              </p>
            </OpacityAnimatedElement>
          </div>
        </div>

        {/* Summary */}
        <div className="mt-12 text-center">
          <SlideInText onScroll={true} delay={1}>
            <p className="text-gray-700 leading-relaxed text-lg">
              Through my contributions as a mentor, judge, workshop facilitator,
              and logistics coordinator, I&apos;ve helped foster innovation and
              collaboration in the hackathon community. My efforts aim to
              inspire participants to tackle real-world problems and build
              impactful solutions.
            </p>
          </SlideInText>
        </div>
      </div>
    </div>
  );
};

export default HackathonsContribution;
