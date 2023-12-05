"use client";

import { Variants, motion, cubicBezier } from "framer-motion";

const Navbar = () => {
  const containerVariant: Variants = {
    hidden: {
      opacity: 0,
      y: -20,
    },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        delay: 4,
        duration: 0.5,
        ease: cubicBezier(0.22, 1, 0.36, 1),
      },
    },
  };

  return (
    <div className="sticky top-0 z-50 bg-90 md:bg-md-90 ">
      <motion.div
        variants={containerVariant}
        initial="hidden"
        animate="visible"
        className="flex justify-around p-5 md:p-5 mx-auto uppercase text-primary text-sm"
      >
        <a className="w-full text-center" href="#home">
          Home
        </a>
        <a className="w-full text-center" href="#info">
          Info
        </a>
        <a className="w-full text-center" href="#work">
          Work
        </a>
        <a className="w-full text-center" href="#contact">
          Contact
        </a>
        <a
          className="w-full text-center"
          target="_blank"
          href="/Sohel Shekh Resume.pdf"
        >
          Resume
        </a>
      </motion.div>
    </div>
  );
};

export default Navbar;
