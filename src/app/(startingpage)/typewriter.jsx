
import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';



export default function Typewriter(props) {
  const [text, setText] = useState('');
  const message = props.text;

  const textVariant = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        delay: 0.5,
        duration: 0.5,
      },
    },
  };

  useEffect(() => {
    let i = 0;
    const interval = setInterval(() => {
      setText(message.substring(0, i));
      i++;
      if (i > message.length) {
        clearInterval(interval);
      }
    }, 50);

    return () => clearInterval(interval);
  }, []);

  return (
    <motion.div variants={textVariant} initial="hidden" animate="visible">{text}</motion.div>
  );
}
