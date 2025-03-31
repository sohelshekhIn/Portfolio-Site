"use client";

import { Variants, motion, cubicBezier } from "framer-motion";
import Link from "next/link";

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
    <div className="sticky py-5 top-0 z-50 bg-90 md:bg-md-90">
      <motion.div
        variants={containerVariant}
        initial="hidden"
        animate="visible"
        className="flex flex-col md:flex-row py-3 px-5 md:px-8 mx-auto uppercase text-primary text-sm"
      >
        <div className="flex justify-between items-center mb-2 md:mb-0 md:flex-1 md:justify-around md:gap-8 w-full">
          <motion.a
            whileHover={{ scale: 1.1, color: "#FF6B6B" }}
            className="hover:text-accent transition-colors cursor-none"
            href="/#home"
          >
            Home
          </motion.a>
          <motion.a
            whileHover={{ scale: 1.1, color: "#FF6B6B" }}
            className="hover:text-accent transition-colors cursor-none"
            href="/#hackathons"
          >
            Hackathons
          </motion.a>
          <motion.a
            whileHover={{ scale: 1.1, color: "#FF6B6B" }}
            className="hover:text-accent transition-colors cursor-none"
            href="/#info"
          >
            Skills
          </motion.a>
        </div>
        <div className="flex justify-between items-center md:flex-1 md:justify-around md:gap-8">
          <motion.a
            whileHover={{ scale: 1.1, color: "#FF6B6B" }}
            className="hover:text-accent transition-colors cursor-none"
            href="/#work"
          >
            Experience
          </motion.a>
          <motion.a
            whileHover={{ scale: 1.1, color: "#FF6B6B" }}
            className="hover:text-accent transition-colors cursor-none"
            href="/#contact"
          >
            Contact
          </motion.a>
          <motion.div whileHover={{ scale: 1.1, color: "#FF6B6B" }}>
            <Link
              className="hover:text-accent transition-colors cursor-none"
              href="/resume"
            >
              Resume
            </Link>
          </motion.div>
        </div>
      </motion.div>
    </div>
  );
};

export default Navbar;
