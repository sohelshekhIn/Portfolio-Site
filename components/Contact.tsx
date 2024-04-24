import Image from "next/image";
import Flag from "@/public/images/flag.svg";
import ContactForm from "./ContactForm";
import {
  OpacityAnimatedElement,
  PositionAnimatedText,
} from "./AnimateClientComps/HomeText";

const Contact = () => {
  return (
    <div id="contact">
      <div className="bg-secondary pt-16">
        <div className="w-[90vw] max-w-3xl p-2 md:p-10 mx-auto">
          <h1 className="font-moda text-5xl text-primary">
            <PositionAnimatedText onScroll={true}>
              Get in touch
            </PositionAnimatedText>
          </h1>
          <OpacityAnimatedElement delay={0.3}>
            <ContactForm />
          </OpacityAnimatedElement>
          <div className="mt-16">
            <h1 className="font-moda text-5xl text-primary">
              <PositionAnimatedText onScroll={true}>
                Socials
              </PositionAnimatedText>
            </h1>
            <div className="">
              <OpacityAnimatedElement
                delay={0.3}
                className="flex flex-col sm:flex-row gap-2 md:gap-10 mt-5"
                margin="0px 0px -30px 0px"
              >
                <a
                  href="
            https://www.linkedin.com/in/sohelshekh/"
                  target="_blank"
                  rel="noreferrer"
                  className="flex flex-row gap-2 py-2 items-center text-lightWhite/50 hover:text-lightWhite"
                >
                  {/* linked in svg */}
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    x="0px"
                    y="0px"
                    width="30"
                    height="30"
                    viewBox="0 0 50 50"
                    className="fill-current text-lightWhite w-7"
                  >
                    <path d="M41,4H9C6.24,4,4,6.24,4,9v32c0,2.76,2.24,5,5,5h32c2.76,0,5-2.24,5-5V9C46,6.24,43.76,4,41,4z M17,20v19h-6V20H17z M11,14.47c0-1.4,1.2-2.47,3-2.47s2.93,1.07,3,2.47c0,1.4-1.12,2.53-3,2.53C12.2,17,11,15.87,11,14.47z M39,39h-6c0,0,0-9.26,0-10 c0-2-1-4-3.5-4.04h-0.08C27,24.96,26,27.02,26,29c0,0.91,0,10,0,10h-6V20h6v2.56c0,0,1.93-2.56,5.81-2.56 c3.97,0,7.19,2.73,7.19,8.26V39z"></path>
                  </svg>
                  <span>LinkedIn</span>
                </a>
                {/* github */}
                <a
                  href="
              https://github.com/sohelshekhIn"
                  target="_blank"
                  rel="noreferrer"
                  className="flex flex-row gap-2 py-2 items-center text-lightWhite/50 hover:text-lightWhite"
                >
                  {/* github svg */}
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    x="0px"
                    y="0px"
                    width="30"
                    height="30"
                    viewBox="0 0 62 62"
                    className="fill-current text-lightWhite w-7"
                  >
                    <path d="M36,12c13.255,0,24,10.745,24,24c0,10.656-6.948,19.685-16.559,22.818c0.003-0.009,0.007-0.022,0.007-0.022	s-1.62-0.759-1.586-2.114c0.038-1.491,0-4.971,0-6.248c0-2.193-1.388-3.747-1.388-3.747s10.884,0.122,10.884-11.491	c0-4.481-2.342-6.812-2.342-6.812s1.23-4.784-0.426-6.812c-1.856-0.2-5.18,1.774-6.6,2.697c0,0-2.25-0.922-5.991-0.922	c-3.742,0-5.991,0.922-5.991,0.922c-1.419-0.922-4.744-2.897-6.6-2.697c-1.656,2.029-0.426,6.812-0.426,6.812	s-2.342,2.332-2.342,6.812c0,11.613,10.884,11.491,10.884,11.491s-1.097,1.239-1.336,3.061c-0.76,0.258-1.877,0.576-2.78,0.576	c-2.362,0-4.159-2.296-4.817-3.358c-0.649-1.048-1.98-1.927-3.221-1.927c-0.817,0-1.216,0.409-1.216,0.876s1.146,0.793,1.902,1.659	c1.594,1.826,1.565,5.933,7.245,5.933c0.617,0,1.876-0.152,2.823-0.279c-0.006,1.293-0.007,2.657,0.013,3.454	c0.034,1.355-1.586,2.114-1.586,2.114s0.004,0.013,0.007,0.022C18.948,55.685,12,46.656,12,36C12,22.745,22.745,12,36,12z"></path>
                  </svg>
                  <span>Github</span>
                </a>
                {/* email */}
                <a
                  href="mailto:hi@sohel.tech
              "
                  target="_blank"
                  rel="noreferrer"
                  className="flex flex-row gap-2 py-2 items-center text-lightWhite/50 hover:text-lightWhite"
                >
                  {/* email svg */}
                  {/* <svg
                xmlns="http://www.w3.org/2000/svg"
                x="0px"
                y="0px"
                width="30"
                height="30"
                viewBox="0 0 50 50"
                className="fill-current text-lightWhite w-7"
              >
                <path d="M45,6H5C3.897,6,3,6.897,3,8v34c0,1.103,0.897,2,2,2h40c1.103,0,2-0.897,2-2V8C47,6.897,46.103,6,45,6z M5,10h40v4H5V10z M5,40V18l20,12L45,18v22H5z"></path>
              </svg> */}
                  {/* svg of @ sign */}
                  <p className="text-xl text-lightWhite px-1">@</p>

                  <span>Email</span>
                </a>
              </OpacityAnimatedElement>
            </div>
          </div>
          <div className="mt-10 text-lightWhite p-2">
            <span className="flex gap-1 justify-center text-xs">
              <p className="text-center">Made with ❤️</p>
            </span>
            {/* <span className="flex gap-1 justify-center text-xs">
              <p className="text-center">Made with ❤️ in</p>
              <Image className="w-4" src={Flag} alt="The Republic of India" />
            </span> */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
