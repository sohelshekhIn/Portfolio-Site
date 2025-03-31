"use client";

import { useEffect, useState } from "react";
import { motion, useSpring, useTransform } from "framer-motion";

const CustomCursor = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isHovering, setIsHovering] = useState(false);

  // Smooth spring animations for cursor movement
  const springConfig = { damping: 25, stiffness: 700 };
  const cursorX = useSpring(0, springConfig);
  const cursorY = useSpring(0, springConfig);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    const handleMouseOver = () => setIsHovering(true);
    const handleMouseOut = () => setIsHovering(false);

    // Update spring values when mouse moves
    cursorX.set(mousePosition.x);
    cursorY.set(mousePosition.y);

    window.addEventListener("mousemove", handleMouseMove);

    // Add hover listeners to all interactive elements
    const interactiveElements = document.querySelectorAll(
      "a, button, [role='button'], input, select, textarea, span"
    );
    interactiveElements.forEach((el) => {
      el.addEventListener("mouseover", handleMouseOver);
      el.addEventListener("mouseout", handleMouseOut);
    });

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      interactiveElements.forEach((el) => {
        el.removeEventListener("mouseover", handleMouseOver);
        el.removeEventListener("mouseout", handleMouseOut);
      });
    };
  }, [mousePosition, cursorX, cursorY]);

  return (
    <>
      <motion.div
        className="fixed w-3 h-3 bg-orange-300 rounded-full pointer-events-none z-[100] mix-blend-hard-light"
        style={{
          x: useTransform(cursorX, (x) => x - 6),
          y: useTransform(cursorY, (y) => y - 6),
        }}
        animate={{
          scale: isHovering ? 4 : 1,
        }}
        transition={{
          type: "spring",
          damping: 15,
          stiffness: 200,
        }}
      />
      <motion.div
        className="fixed w-8 h-8 border-2 border-orange-400 rounded-full pointer-events-none z-[100] mix-blend-normal"
        style={{
          x: useTransform(cursorX, (x) => x - 16),
          y: useTransform(cursorY, (y) => y - 16),
        }}
        animate={{
          scale: isHovering ? 1.5 : 1,
        }}
        transition={{
          type: "spring",
          damping: 15,
          stiffness: 200,
        }}
      />
    </>
  );
};

export default CustomCursor;
