import { TypeAnimation } from 'react-type-animation'
import { motion } from 'motion/react'

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
            'Building sleek websites, one line of code at a time.',
            1000,
            'Learning to make the web a prettier place.',
            1000,
            'Frontend enthusiast on a mission!',
            1000,
            'Still learning, always improving.',
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
  )
}

export default Speech
