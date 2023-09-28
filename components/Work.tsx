import { tss } from "@/public/images";
import Image from "next/image";

const Work = () => {
  return (
    <div id="work" className="py-16  bg-lightWhite text-secondary">
      <div className="w-[90vw] max-w-3xl p-2 md:p-10 mx-auto">
        <h1 className="text-6xl font-moda">Work</h1>
        <div className="py-3 mt-8 flex flex-col gap-16">
          <div className="">
            <div className="w-full bg-gray-300 h-auto md:h-[30rem] overflow-hidden ">
              <Image src={tss} alt="the soulspace" />
            </div>
            <h1 className="mt-3 font-poppins text-secondary text-3xl font-semibold ">
              the soulspace
            </h1>
            <h2 className="text-primary">eCommerce Site</h2>
            <h4 className="text-gray-600 mt-2">
              &quot;Celebrate artistry and efficiency with &apos;the
              soulspace,&apos; where I transformed an artisanal on-demand art
              store into a digital sensation. Using Next.js 13, I built a
              user-friendly website complete with a Strapi-powered Admin Panel,
              diverse payment options, and logistics integration. This project
              streamlined order management, marking my prowess in design,
              development, and tech support as a dedicated freelancer.
            </h4>
            {/* link to open external website */}
            <div className="my-5">
              <a
                href="https://thesoulspace.in"
                target="_blank"
                className="text-primary p-3 font-semibold bg-secondary mt-5 w-auto hover:bg-primary hover:text-secondary transition-all duration-300 ease-in-out"
              >
                Visit Site
              </a>
            </div>

            <div className="flex py-4 flex-wrap gap-2">
              <span className="stack-bubble nextjs">Next.js v13</span>
              <span className="stack-bubble ts">Typescript</span>
              <span className="stack-bubble tailwindcss">Tailwind CSS</span>
              <span className="stack-bubble graphql">GraphQl</span>
              <span className="stack-bubble strapi">Strapi</span>
              <span className="stack-bubble supabase">Supabase</span>
              <span className="stack-bubble postgres">PostgreSQL</span>
            </div>
          </div>
          {/* ------- BREAK ------- */}
          {/* <div className="">
            <div className="w-full bg-gray-300 h-80"></div>
            <h1 className="mt-3 font-poppins text-secondary text-2xl font-semibold ">
              Kanan International
            </h1>
            <h2 className="text-primary">Student Attendance Portal</h2>
            <h4 className="text-gray-600 mt-2">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Obcaecati, est sit! Illo earum tempore est eligendi repudiandae
              quibusdam dolore similique? Porro velit adipisci quidem.
            </h4>
            <div className="flex py-4 flex-wrap gap-2">
              <span className="stack-bubble nextjs">Next.js</span>
              <span className="stack-bubble ts">Typescript</span>
              <span className="stack-bubble tailwindcss">Tailwind CSS</span>
              <span className="stack-bubble tailwindcss">ShadCN</span>
              <span className="stack-bubble supabase">Supabase</span>
              <span className="stack-bubble postgres">PostgreSQL</span>
            </div>
          </div> */}
          <div className="">
            <div>
              <iframe
                className="w-full h-[30rem]"
                src="https://www.youtube-nocookie.com/embed/J2yxxGCQ6ps?si=xyfzoVMPr6uxhJla&amp;controls=0"
                title="YouTube video player"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
              ></iframe>
            </div>
            <h1 className="mt-3 font-poppins text-secondary text-2xl font-semibold ">
              Mirror Institute
            </h1>
            <h2 className="text-primary">Student Management System</h2>
            <h4 className="text-gray-600 mt-2">
              Transformed &apos;Miror Institute&apos; with a Student Management
              System, handling student data, attendance, assessments, and
              homework submissions via a user-friendly dashboard. Managed staff
              access, batch organization, and SMS notifications. Replaced
              traditional methods with Next.js v12, Strapi, Express.js, and
              PostgreSQL. As a freelance developer, I led the entire project,
              overcoming rendering challenges and intricate database design,
              revolutionizing education management
            </h4>
            <div className=" cursor-not-allowed">
              <p className="py-3 font-semibold w-auto text-secondary">
                Access Restricted to Authorized Personnel
              </p>
            </div>
            <div className="flex py-4 flex-wrap gap-2">
              <span className="stack-bubble nextjs">Next.js v12</span>
              <span className="stack-bubble js">Javascript</span>
              <span className="stack-bubble bg-black text-white">
                Tailwind CSS
              </span>
              <span className="stack-bubble strapi">Strapi</span>
              <span className="stack-bubble graphql">GraphQl</span>
              <span className="stack-bubble express">ExpressJs</span>
              <span className="stack-bubble postgres">PostgreSQL</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Work;
