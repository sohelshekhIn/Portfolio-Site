"use client";
import {
  OpacityAnimatedElement,
  PositionAnimatedText,
  SlideInText,
} from "./AnimateClientComps/HomeText";
import { motion, useAnimation, useInView } from "framer-motion";
import { useEffect, useRef } from "react";

interface WorkExperience {
  title: string;
  company: string;
  startDate: string;
  endDate: string;
  description: string[];
}

const experiences: WorkExperience[] = [
  {
    title: "Incomming Co-op Developer",
    company: "Government of Ontario",
    startDate: "Jan 2026",
    endDate: "Apr 2026",
    description: [
      "Will be joining the Quality Assurance Services team as a Developer in the Enterprise Applications Branch, supporting the Treasury Board of Canada Secretariat under the Ministry of Public and Business Service Delivery and Procurement (MPBSDP).",
    ],
  },
  {
    title: "VP of Backend",
    company: "Hack Canada",
    startDate: "Sep 2025",
    endDate: "Present",
    description: [
      "Led backend engineering strategy and architecture, ensuring scalable, secure, and high-performance systems.",
      "Migrated legacy backend infrastructure to modern platforms, overseeing DNS, database, and core system configurations",
      "Oversaw API design, infrastructure optimization, and seamless integration with frontend and third-party platforms.",
    ],
  },
  {
    title: "Software Developer Co-op",
    company: "Knovatek Inc.",
    startDate: "May 2025",
    endDate: "Aug 2025",
    description: [
      "Spearheaded the development of 3 key features for a client-facing application, improving user engagement by 25%.",
      "Collaborated with a team of 5 developers to resolve 50+ bug reports, ensuring timely product releases and a 98% bug-free production environment.",
      "Played a key role in automating deployment processes using CI/CD pipelines, reducing deployment time by 30%.",
    ],
  },
  {
    title: "Cloud Automation Engineer",
    company: "Confidential (Remote)",
    startDate: "Sep 2024",
    endDate: "Present",
    description: [
      "Built a cloud-native automation platform (Node.js, Redis, AWS) handling 4M+ database operations with 99.9288% uptime",
      "Applied Redis caching, async queues, and circuit breakers for fault tolerance under heavy load",
      "Set up real-time monitoring and alerting with AWS CloudWatch, improving reliability and system visibility",
    ],
  },
  {
    title: "Backend Executive",
    company: "UofTHacks - University of Toronto",
    startDate: "May 2025",
    endDate: "Sep 2025",
    description: [
      "Migrated backend infrastructure from JavaScript to TypeScript, improving maintainability and scalability by 18%.",
      "Designed multiple RESTful API endpoints, reducing response times by up to 40%. Integrated OpenAPI documentation, streamlining developer onboarding and reducing errors by 30%.",
      "Revamped user and admin dashboards with a modern UI/UX design, introducing real-time analytics and notifications. Strengthened system security with JWT authentication and role-based access controls.",
    ],
  },
  {
    title: "Backend Developer",
    company: "Zeuty",
    startDate: "Mar 2024",
    endDate: "Jan 2025",
    description: [
      "Built scalable backend solutions using Express.js and TypeScript, supporting onboarding of 4k+ users.",
      "Designed a PostgreSQL schema with 12 tables and optimized database queries, improving data retrieval speed by 30%.",
      "Created reusable utility functions, reducing code duplication by 600–650 lines. Configured an email server to integrate transactional emails, improving communication efficiency.",
    ],
  },
  {
    title: "Full Stack Executive",
    company: "Hackathons Canada",
    startDate: "Jul 2024",
    endDate: "Mar 2025",
    description: [
      "Contributed to the design and development of user-friendly interfaces for the hacker dashboard, focusing on responsive layouts and modern design principles to enhance accessibility across devices.",
      "Assisted with implementing backend features for the admin dashboard, including real-time analytics and event management tools, while optimizing database queries and integrating secure APIs.",
      "Supported the management of hackathon logistics, including participant registration, team formation, and event scheduling, ensuring smooth event execution.",
    ],
  },
  {
    title: "Full Stack Developer",
    company: "Ashapuri Fireworks",
    startDate: "Sep 2023",
    endDate: "Oct 2023",
    description: [
      "Developed a product catalog website showcasing over 300 fireworks with detailed descriptions.",
      "Created a custom WhatsApp bot for seamless product management via messages using web scraping techniques.",
      "Enhanced online presence through strategic SEO implementation and Google Maps integration. Optimized website performance using Google Search Console and Bing Search Console for better search engine rankings.",
    ],
  },
  {
    title: "Full Stack Developer",
    company: "Mirror Institute",
    startDate: "Aug 2022",
    endDate: "Feb 2023",
    description: [
      "Developed a Student Management System for a K–12 institute, improving communication between staff and parents.",
      "Built custom calendar UI for attendance tracking and dashboards with role-based access for parents and faculty.",
      "Implemented SMS alerts for absences and test results, improving parent engagement. Streamlined administrative tasks with Excel import/export functionality for data management.",
    ],
  },
];

const Work = () => {
  return (
    <div id="work" className="py-16 bg-lightWhite text-secondary">
      <div className="w-[90vw] max-w-3xl p-2 md:p-10 mx-auto">
        <h1 className="text-6xl font-moda">
          <PositionAnimatedText onScroll={true}>
            Experience
          </PositionAnimatedText>
        </h1>
        <div className="py-3 mt-12 relative">
          {experiences.map((exp, index) => (
            <WorkItem
              key={index}
              {...exp}
              isLast={index === experiences.length - 1}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

const TimelineLine = () => {
  const ref = useRef(null);
  const controls = useAnimation();
  const isInView = useInView(ref, {
    once: true,
    margin: "0px 0px -150px 0px",
  });

  useEffect(() => {
    if (isInView) {
      controls.start("visible");
    }
  }, [isInView, controls]);

  return (
    <motion.div
      ref={ref}
      className="absolute left-0 top-0 w-0.5 h-full bg-gray-300"
      initial={{ opacity: 0 }}
      animate={controls}
      variants={{
        visible: {
          opacity: 1,
          transition: {
            delay: 0.3,
            duration: 0.5,
          },
        },
      }}
    />
  );
};

const WorkItem = ({
  title,
  company,
  startDate,
  endDate,
  description,
  isLast,
}: WorkExperience & { isLast: boolean }) => {
  const isPresent = endDate.toLowerCase() === "present";

  return (
    <div className={`relative pl-8 md:pl-12 ${!isLast ? "pb-12" : ""}`}>
      {/* Timeline line - reveals on scroll */}
      {!isLast && <TimelineLine />}

      {/* Timeline dot with animation */}
      <div className="absolute left-0 top-1 transform -translate-x-1/2 z-10">
        <OpacityAnimatedElement delay={0.2}>
          <div
            className={`w-4 h-4 rounded-full border-4 border-lightWhite transition-all duration-300 ${
              isPresent
                ? "bg-primary animate-pulse"
                : "bg-primary hover:scale-125"
            }`}
          />
        </OpacityAnimatedElement>
      </div>

      {/* Date badge with scroll animation */}
      <div className="mb-3">
        <SlideInText onScroll={true} delay={0.1}>
          <span className="inline-flex items-center gap-2 text-primary font-bold text-sm md:text-base">
            <span>{startDate}</span>
            <span className="text-gray-400">—</span>
            <span className={isPresent ? "relative" : ""}>
              {endDate}
              {isPresent && (
                <span className="ml-2 px-2 py-0.5 bg-primary/10 text-primary rounded-full text-xs font-semibold">
                  Current
                </span>
              )}
            </span>
          </span>
        </SlideInText>
      </div>

      {/* Position & Company */}
      <h1 className="font-poppins text-secondary text-2xl md:text-3xl font-bold mb-1">
        <SlideInText onScroll={true} delay={0.2}>
          {title}
        </SlideInText>
      </h1>

      <h2 className="text-primary text-lg md:text-xl font-semibold mb-3">
        <SlideInText onScroll={true} delay={0.3}>
          {company}
        </SlideInText>
      </h2>

      {/* Description bullets - bullets now animate with text */}
      <div className="space-y-3">
        {description.map((item, index) => (
          <div key={index} className="flex gap-3 items-start">
            <SlideInText onScroll={true} delay={0.4 + index * 0.1}>
              <div className="flex gap-3 items-start">
                <span className="text-primary mt-1.5 text-lg leading-none flex-shrink-0">
                  •
                </span>
                <p className="text-gray-600 text-sm md:text-base leading-relaxed">
                  {item}
                </p>
              </div>
            </SlideInText>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Work;
