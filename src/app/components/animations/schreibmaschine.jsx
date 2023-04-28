import { motion } from "framer-motion";

const TypewriterText = ({ text, fontSize }) => {
  const textArray = text.split("");
  const variants = {
    visible: (i) => ({
      opacity: 1,
      transition: {
        delay: i * 0.1,
      },
    }),
    hidden: { opacity: 0 },
  };

  return (
    <div style={{textAlign: "center"}}>
      {textArray.map((letter, i) => (
        <motion.span
          key={i}
          custom={i}
          variants={variants}
          initial="hidden"
          animate="visible"
          style={{fontSize: "1.5rem"}}
        >
          {letter}
        </motion.span>
      ))}
    </div>
  );
};

export default TypewriterText;
