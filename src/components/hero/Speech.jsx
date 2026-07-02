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
            "AI Engineer building production-ready LLM apps.",
            1000,
            "RAG systems, AI agents, confidence-aware pipelines.",
            1000,
            "Data scientist at heart, full-stack by training.",
            1000,
            "Claude Code + multi-agent orchestration, daily driver.",
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
