// import { maf, tss } from "@/public/images";
// import Image from "next/image";
// import {
//   OpacityAnimatedElement,
//   OpacityAnimatedText,
//   PositionAnimatedText,
//   SlideInText,
// } from "./AnimateClientComps/HomeText";

// const Work = () => {
//   return (
//     <div id="work" className="py-16  bg-lightWhite text-secondary">
//       <div className="w-[90vw] max-w-3xl p-2 md:p-10 mx-auto">
//         <h1 className="text-6xl font-moda">
//           <PositionAnimatedText onScroll={true}>Work</PositionAnimatedText>
//         </h1>
//         <div className="py-3 mt-8 flex flex-col gap-16">
//           <div className="">
//             <OpacityAnimatedElement delay={0.5}>
//               <div className="w-full bg-gray-300 h-auto md:h-[30rem] overflow-hidden ">
//                 <Image src={tss} alt="the soulspace" />
//               </div>
//             </OpacityAnimatedElement>
//             <h1 className="mt-3 font-poppins text-secondary text-3xl font-semibold ">
//               <SlideInText onScroll={true}>the soulspace</SlideInText>
//             </h1>
//             <h2 className="text-primary">
//               <SlideInText onScroll={true} delay={0.3}>
//                 eCommerce Site
//               </SlideInText>
//             </h2>
//             <h4 className="text-gray-600 mt-2">
//               <SlideInText onScroll={true} delay={0.5}>
//                 <strong>
//                   Developed a full-fledged eCommerce website for &quot;the
//                   SoulSpace,&quot; enhancing customer experience, online sales,
//                   and brand presence.
//                 </strong>
//                 <br />
//                 <br />
//                 <br />
//                 <strong>User-Centric Design: </strong>
//                 Built a comprehensive product catalog with clear categorization
//                 and descriptions, facilitating easy product discovery and
//                 purchase. <br />
//                 <br />
//                 <strong>Seamless Shopping Journey: </strong>
//                 Created a smooth shopping cart and checkout process with secure
//                 payment gateway integration (e.g., Instamojo) for a frictionless
//                 buying experience. <br />
//                 <br />
//                 <strong>Customer Accounts: </strong>
//                 Implemented user account functionalities like registration,
//                 login, and profile management, fostering customer loyalty and
//                 enabling personalized shopping experiences.
//                 <br />
//                 <br />
//                 <strong>Mobile-Responsive Design: </strong>
//                 Ensured the website is responsive across various devices
//                 (mobiles, tablets, desktops) for improved accessibility and user
//                 satisfaction. <br />
//                 <br />
//                 <strong>Enhanced Transparency: </strong>
//                 Implemented order tracking to keep customers informed about
//                 their order status, building trust and confidence. Performance
//                 Optimization: Optimized website performance for faster loading
//                 times and a smooth user experience, leading to reduced bounce
//                 rates. <br />
//                 <br />
//                 <strong>Robust Security: </strong>
//                 Implemented security measures to safeguard customer data and
//                 transactions, maintaining customer trust and data integrity.
//                 <br />
//                 <br />
//                 <strong>Data-Driven Approach: </strong>
//                 Integrated analytics tools (e.g., Google Analytics, Microsoft
//                 Clarity) to track store performance, customer behavior, and
//                 inform data-driven decision-making for marketing and sales
//                 strategies. <br />
//                 <br />
//                 <strong>SEO Implementation: </strong>
//                 Contributed to Search Engine Optimization (SEO) efforts to
//                 increase organic website traffic and brand visibility.
//               </SlideInText>
//             </h4>
//             {/* link to open external website */}
//             <div className="my-5">
//               <a
//                 href="https://thesoulspace.in?ref=sohel.tech"
//                 target="_blank"
//                 className="text-primary p-3 font-semibold bg-secondary mt-5 w-auto hover:bg-primary hover:text-secondary transition-all duration-300 ease-in-out"
//               >
//                 Visit Site
//               </a>
//             </div>

//             <div className="flex py-4 flex-wrap gap-2">
//               <span className="stack-bubble nextjs">Next.js v13</span>
//               <span className="stack-bubble ts">Typescript</span>
//               <span className="stack-bubble tailwindcss">Tailwind CSS</span>
//               <span className="stack-bubble graphql">GraphQl</span>
//               <span className="stack-bubble strapi">Strapi</span>
//               <span className="stack-bubble supabase">Supabase</span>
//               <span className="stack-bubble postgres">PostgreSQL</span>
//             </div>
//           </div>
//           <div className="">
//             <div>
//               <OpacityAnimatedElement delay={0.5}>
//                 <iframe
//                   className="w-full h-[30rem]"
//                   src="https://www.youtube-nocookie.com/embed/J2yxxGCQ6ps?si=xyfzoVMPr6uxhJla&amp;controls=0"
//                   title="YouTube video player"
//                   allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
//                   allowFullScreen
//                 ></iframe>
//               </OpacityAnimatedElement>
//             </div>
//             <h1 className="mt-3 font-poppins text-secondary text-2xl font-semibold ">
//               <SlideInText onScroll={true}>Mirror Institute</SlideInText>
//             </h1>
//             <h2 className="text-primary">
//               <SlideInText onScroll={true} delay={0.3}>
//                 Student Management System
//               </SlideInText>
//             </h2>
//             <h4 className="text-gray-600 mt-2">
//               <SlideInText onScroll={true} delay={0.5}>
//                 <strong>
//                   Developed a comprehensive Student Management System for a K-12
//                   institute, improving communication, efficiency, and
//                   record-keeping for staff and parents.
//                 </strong>
//                 <br />
//                 <br />
//                 <strong>User-friendly Features: </strong>
//                 Designed a custom calendar UI for attendance tracking, a
//                 dedicated parent dashboard for easy access to student
//                 information, and intuitive faculty portals with role-based
//                 authorization. <br /> <br />
//                 <strong>Enhanced Communication: </strong>
//                 Implemented attendance reminders, SMS alerts for absences and
//                 test results, and work submission notifications, fostering
//                 better engagement between parents, staff, and students. <br />
//                 <br /> <strong>Streamlined Processes: </strong>
//                 Built modules for student management (add, view, export data),
//                 test results management (faculty input, parent updates), and
//                 work submissions, simplifying record-keeping and saving time for
//                 staff. <br /> <br />
//                 <strong>Data Management: </strong>
//                 Enabled easy import/export of data to Excel sheets, facilitating
//                 administrative tasks. <br />
//                 <br /> <strong>Modern UI/UX: </strong>
//                 Developed a responsive user interface with a clean, modern
//                 design for a smooth and intuitive user experience.
//               </SlideInText>
//             </h4>
//             <div className=" cursor-not-allowed">
//               <p className="py-3 font-semibold w-auto text-secondary">
//                 <OpacityAnimatedText>
//                   Access Restricted to Authorized Personnel
//                 </OpacityAnimatedText>
//               </p>
//             </div>
//             <div className="flex py-4 flex-wrap gap-2">
//               <span className="stack-bubble nextjs">Next.js v12</span>
//               <span className="stack-bubble js">Javascript</span>
//               <span className="stack-bubble bg-black text-white">
//                 Tailwind CSS
//               </span>
//               <span className="stack-bubble strapi">Strapi</span>
//               <span className="stack-bubble graphql">GraphQl</span>
//               <span className="stack-bubble express">ExpressJs</span>
//               <span className="stack-bubble postgres">PostgreSQL</span>
//             </div>
//           </div>
//           <div className="">
//             <OpacityAnimatedElement delay={0.5}>
//               <div className="w-full bg-gray-300 h-auto  overflow-hidden ">
//                 <Image src={maf} alt="Ma Ashapuri Fireworks" />
//               </div>
//             </OpacityAnimatedElement>
//             <h1 className="mt-3 font-poppins text-secondary text-3xl font-semibold ">
//               <SlideInText onScroll={true}>Ashapuri Fireworks</SlideInText>
//             </h1>
//             <h2 className="text-primary">
//               <SlideInText onScroll={true} delay={0.3}>
//                 Product Catalogue Website
//               </SlideInText>
//             </h2>
//             <h4 className="text-gray-600 mt-2">
//               <SlideInText onScroll={true} delay={0.5}>
//                 <strong>
//                   Developed a comprehensive product catalog website and
//                   implemented innovative solutions to streamline operations and
//                   increase online presence for Ma Ashapuri Fireworks.
//                 </strong>
//                 <br />
//                 <br />
//                 <br />
//                 <strong>Robust Product Catalog: </strong>
//                 Built a website showcasing over 300 fireworks with detailed
//                 descriptions, enhancing product visibility and customer. <br />
//                 <br />
//                 <strong>Content Management System (CMS): </strong>
//                 Designed and implemented a user-friendly portal for effortless
//                 product maintenance, allowing the client to update the catalog
//                 without technical expertise. <br />
//                 <br />
//                 <strong>Custom WhatsApp Product Management: </strong>
//                 Developed a creative WhatsApp bot using web scraping techniques,
//                 enabling the owner to directly submit and update product
//                 information through messages, streamlining product management.
//                 <br />
//                 <br />
//                 <strong>Enhanced Online Presence: </strong>
//                 Increased brand visibility through strategic SEO implementation.
//                 This included adding the business to Google Maps and optimizing
//                 the website using Google Search Console and Bing Search Console,
//                 leading to significant improvements in search engine rankings.
//               </SlideInText>
//             </h4>
//             {/* link to open external website */}
//             <div className="my-5">
//               <a
//                 href="https://maashapurifireworks.in?ref=sohel.tech"
//                 target="_blank"
//                 className="text-primary p-3 font-semibold bg-secondary mt-5 w-auto hover:bg-primary hover:text-secondary transition-all duration-300 ease-in-out"
//               >
//                 Visit Site
//               </a>
//             </div>

//             <div className="flex py-4 flex-wrap gap-2">
//               <span className="stack-bubble ts">Typescript</span>
//               <span className="stack-bubble nextjs">Next.js v13</span>
//               <span className="stack-bubble supabase">Supabase</span>
//               <span className="stack-bubble tailwindcss">Tailwind CSS</span>
//               <span className="stack-bubble postgres">PostgreSQL</span>
//               <span className="stack-bubble graphql">Flask</span>
//               <span className="stack-bubble supabase">Node.js</span>
//               <span className="stack-bubble supabase">WPPConnect.js</span>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Work;

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
