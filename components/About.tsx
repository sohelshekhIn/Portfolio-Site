import {
  AnimateSkillList,
  PositionAnimatedText,
} from "./AnimateClientComps/HomeText";

const About = () => {
  const SkillList = [
    "Javascript",
    "Typescript",
    "Python",
    "React",
    "Next.js",
    "Tailwind",
    "Framer Motion",
    "Three.js",
    "T3F",
    "Node.js",
    "ExpresJs",
    "Flask",
    "Postgress",
    "MySQL",
    "MongoDB",
    "Supabase",
    "GraphQl",
    "Strapi",
    "Firebase",
    "Supabase",
    "JWT",
    "Docker",
    "Git",
    "Adobe XD",
  ];
  return (
    <div className="w-full bg-lightWhite py-16" id="info">
      <div className="w-[90vw] max-w-3xl p-2 md:p-10 mx-auto">
        <h1 className="text-secondary font-moda text-6xl py-3">
          <PositionAnimatedText onScroll={true}>Skills</PositionAnimatedText>
        </h1>
        <div className=" py-3">
          <AnimateSkillList list={SkillList} />
        </div>
      </div>
    </div>
  );
};

export default About;
