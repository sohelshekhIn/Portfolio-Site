const Work = () => {
  return (
    <div id="work" className="py-16  bg-lightWhite text-secondary">
      <div className="w-[90vw] max-w-3xl p-2 md:p-10 mx-auto">
        <h1 className="text-6xl font-moda">Work</h1>
        <div className="py-3 mt-8 flex flex-col gap-16">
          <div className="">
            <div className="w-full bg-gray-300 h-80"></div>
            <h1 className="mt-3 font-poppins text-secondary text-3xl font-semibold ">
              the soulspace
            </h1>
            <h2 className="text-primary">eCommerce Site</h2>
            <h4 className="text-gray-600 mt-2">
              "Celebrate artistry and efficiency with 'the soulspace,' where I
              transformed an artisanal on-demand art store into a digital
              sensation. Using Next.js 13, I built a user-friendly website
              complete with a Strapi-powered Admin Panel, diverse payment
              options, and logistics integration. This project streamlined order
              management, marking my prowess in design, development, and tech
              support as a dedicated freelancer.
            </h4>
            <div className="flex py-4 flex-wrap gap-2">
              <span className="stack-bubble nextjs">Next.js</span>
              <span className="stack-bubble ts">Typescript</span>
              <span className="stack-bubble tailwindcss">Tailwind CSS</span>
              <span className="stack-bubble graphql">GraphQl</span>
              <span className="stack-bubble strapi">Strapi</span>
              <span className="stack-bubble supabase">Supabase</span>
              <span className="stack-bubble postgres">PostgreSQL</span>
            </div>
          </div>
          {/* ------- BREAK ------- */}
          <div className="">
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
          </div>
          <div className="">
            <div className="w-full bg-gray-300 h-80"></div>
            <h1 className="mt-3 font-poppins text-secondary text-2xl font-semibold ">
              Mirror Institute
            </h1>
            <h2 className="text-primary">Student Management System</h2>
            <h4 className="text-gray-600 mt-2">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Obcaecati, est sit! Illo earum tempore est eligendi repudiandae
              quibusdam dolore similique? Porro velit adipisci quidem.
            </h4>
            <div className="flex py-4 flex-wrap gap-2">
              <span className="stack-bubble nextjs">Next.js</span>
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
