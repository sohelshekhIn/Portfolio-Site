"use client";
import {
  Variants,
  cubicBezier,
  motion,
  useAnimation,
  useInView,
} from "framer-motion";
import React, { useEffect, useRef } from "react";

interface PositionAnimatedTextProps extends React.PropsWithChildren {
  children: React.ReactNode;
  x?: number;
  y?: number;
  delay?: number;
  ref?: React.Ref<HTMLDivElement>;
  type?: "normal" | "small";
  onScroll?: boolean;
}

const PositionAnimatedText = ({
  children,
  x = 0,
  y = 20,
  delay = 0,
  type = "normal",
  onScroll = false,
  ...rest
}: PositionAnimatedTextProps) => {
  const text = React.Children.toArray(children).join(""); // convert children to string

  // const letters = Array.from(text);
  const letters = text.split(" ");
  const ref = useRef(null);
  const controls = useAnimation();
  const isInView = useInView(ref, {
    once: true,
  });

  useEffect(() => {
    if (onScroll && isInView) {
      controls.start("visible");
    }
  }, [isInView]);

  const container: Variants = {
    hidden: {
      opacity: 0,
    },
    visible: (i = 1) => ({
      opacity: 1,
      transition: {
        staggerChildren: 0.085,
        delayChildren: 0.055 * i + delay,
      },
    }),
  };

  const child: Variants = {
    hidden: {
      opacity: 0,
      x: x,
      y: y,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 12,
      },
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 12,
      },
    },
  };

  return (
    <motion.div
      ref={ref}
      className="overflow-hidden"
      variants={container}
      initial="hidden"
      animate={onScroll ? controls : "visible"}
      {...rest}
    >
      {letters.map((word, index) => (
        <motion.span className="inline-block" key={index} variants={child}>
          <motion.div
            variants={container}
            initial="hidden"
            animate={onScroll ? controls : "visible"}
            className={type === "small" ? "mr-1 md:mr-2" : "mr-3 md:mr-7"}
          >
            {word.split("").map((letter, index) => (
              <motion.span
                className="inline-block"
                key={index}
                variants={child}
              >
                {letter === " " ? "\u00A0" : letter}
              </motion.span>
            ))}
          </motion.div>
        </motion.span>
      ))}
      {/* {letters.map((letter, index) => (
        <motion.span className="inline-block" key={index} variants={child}>
          {letter === " " ? "\u00A0" : letter}
        </motion.span>
      ))} */}
    </motion.div>
  );
};

interface OpacityAnimatedTextProps extends React.PropsWithChildren {
  children: React.ReactNode;
  delay?: number;
}

const OpacityAnimatedText = ({
  children,
  delay = 0,
  ...rest
}: OpacityAnimatedTextProps) => {
  const text = React.Children.toArray(children).join(""); // convert children to string
  const letters = Array.from(text);
  const container: Variants = {
    hidden: {
      opacity: 0,
    },
    visible: (i = 1) => ({
      opacity: 1,
      transition: {
        staggerChildren: 0.085,
        delayChildren: 0.055 * i + delay,
      },
    }),
  };

  const child: Variants = {
    hidden: {
      opacity: 0,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 12,
      },
    },
    visible: {
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 12,
      },
    },
  };

  return (
    <motion.div
      className="overflow-hidden"
      variants={container}
      initial="hidden"
      animate="visible"
      {...rest}
    >
      {letters.map((letter, index) => (
        <motion.span className="inline-block" key={index} variants={child}>
          {letter === " " ? "\u00A0" : letter}
        </motion.span>
      ))}
    </motion.div>
  );
};

interface SlideInTextProps extends React.PropsWithChildren {
  children: React.ReactNode;
  delay?: number;
  onScroll?: boolean;
}

const SlideInText = ({
  children,
  delay = 0,
  onScroll = false,
  ...rest
}: SlideInTextProps) => {
  const ref = useRef(null);
  const controls = useAnimation();
  const isInView = useInView(ref, {
    once: true,
  });

  useEffect(() => {
    if (onScroll && isInView) {
      controls.start("visible");
    }
  }, [isInView]);

  const container: Variants = {
    hidden: {
      opacity: 0,
      y: 20,
    },
    visible: (i = 1) => ({
      opacity: 1,
      y: 0,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 12,
        delay: delay,
      },
    }),
  };

  return (
    <motion.span
      ref={ref}
      className="overflow-hidden inline-block"
      variants={container}
      initial="hidden"
      animate={onScroll ? controls : "visible"}
      {...rest}
    >
      {children}
    </motion.span>
  );
};

interface SlidingInLoadingProps extends React.PropsWithChildren {
  children: React.ReactNode;
}
const SlideInLoading = ({ children, ...rest }: SlidingInLoadingProps) => {
  const container: Variants = {
    hidden: {
      y: "-100%",
    },
    visible: {
      y: 0,
      transition: {
        duration: 1,
        ease: cubicBezier(0.22, 1, 0.36, 1),
      },
    },
  };

  return (
    <motion.div
      variants={container}
      initial="hidden"
      animate="visible"
      {...rest}
    >
      {children}
    </motion.div>
  );
};

interface AnimateSkillListProps extends React.PropsWithRef<{}> {
  list: string[];
  delay?: number;
}

const AnimateSkillList = ({ list, ...rest }: AnimateSkillListProps) => {
  const ref = useRef(null);
  const controls = useAnimation();
  const isInView = useInView(ref, {
    once: true,
  });

  useEffect(() => {
    if (isInView) {
      controls.start("visible");
    }
  }, [isInView]);

  const container: Variants = {
    hidden: {
      opacity: 0,
    },
    visible: (i = 1) => ({
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 12,
      },
    }),
  };

  const child = {
    hidden: {
      opacity: 0,
      y: -20,
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 12,
      },
    },
  };

  return (
    <motion.div
      variants={container}
      initial="hidden"
      animate={controls}
      ref={ref}
      className="grid grid-cols-3 gap-3"
    >
      {list.map((skill: string, index: number) => (
        <motion.p key={index} variants={child}>
          {skill}
        </motion.p>
      ))}
    </motion.div>
  );
};

export {
  PositionAnimatedText,
  OpacityAnimatedText,
  SlideInText,
  SlideInLoading,
  AnimateSkillList,
};
