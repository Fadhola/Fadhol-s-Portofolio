import { TypeAnimation } from "react-type-animation";
import { motion } from "motion/react";

const Speech = () => {
  return (
    <motion.div
      className="bubbleContainer"
      animate={{ opacity: [0, 1] }}
      transition={{ duration: 1 }}
    >
      <div className="bubble">
        <TypeAnimation
          sequence={[
            1000,
            "Turning data into decisions.",
            1000,
            "Scientist at heart, web dev by training.",
            1000,
            "Analyzing patterns, building solutions.",
            1000,
            "Frontend? Backend? Been there.",
            1000,
            "Still learning, always improving.",
            1000,
          ]}
          wrapper="span"
          speed={40}
          deletionSpeed={60}
          repeat={Infinity}
        />
      </div>
      {/* <img src="/grobot.png" alt="" /> */}
    </motion.div>
  );
};

export default Speech;
