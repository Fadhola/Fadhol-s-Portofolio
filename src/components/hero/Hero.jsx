import { Canvas } from '@react-three/fiber'
import './hero.css'
import Speech from './Speech'
import { motion } from 'motion/react'
import Shape from './Shape'
import VirtualBadge from './VirtualBadge'
import { Suspense } from 'react'

const awardVariants = {
  initial: {
    x: -100,
    opacity: 0,
  },
  animate: {
    x: 0,
    opacity: 1,
    transition: {
      duration: 1,
      straggerChildren: 0.2,
    },
  },
}
const followVariants = {
  initial: {
    y: -100,
    opacity: 0,
  },
  animate: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 1,
      straggerChildren: 0.2,
    },
  },
}

const Hero = () => {
  return (
    <div className="hero">
      <div className="hSection left">
        <motion.h1
          initial={{ y: -100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 1 }}
          className="hTitle"
        >
          Hey There,
          <br />
          <span>I&apos;m Fadhol!</span>
        </motion.h1>
        {/* <motion.div
          variants={awardVariants}
          initial="initial"
          animate="animate"
          className="awards"
        >
          <motion.h2 variants={awardVariants}>Web Developer</motion.h2>
          <motion.p variants={awardVariants}>
            Front-end Developer enthusiast
          </motion.p>
          <motion.div variants={awardVariants} className="awardList">
            <motion.img variants={awardVariants} src="/html.jpg" alt="" />
            <motion.img variants={awardVariants} src="/css.png" alt="" />
            <motion.img variants={awardVariants} src="/js.png" alt="" />
            <motion.img variants={awardVariants} src="/node.png" alt="" />
            <motion.img variants={awardVariants} src="/react.png" alt="" />
            <motion.img variants={awardVariants} src="/vue.png" alt="" />
          </motion.div>
        </motion.div> */}
        <motion.a
          animate={{ y: [0, 5], opacity: [0, 1, 0] }}
          transition={{ repeat: Infinity, duration: 4, ease: 'easeInOut' }}
          href="#services"
          className="scroll"
        >
          <svg
            width="50px"
            height="50px"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M5 15C5 16.8565 5.73754 18.6371 7.05029 19.9498C8.36305 21.2626 10.1435 21.9999 12 21.9999C13.8565 21.9999 15.637 21.2626 16.9498 19.9498C18.2625 18.6371 19 16.8565 19 15V9C19 7.14348 18.2625 5.36305 16.9498 4.05029C15.637 2.73754 13.8565 2 12 2C10.1435 2 8.36305 2.73754 7.05029 4.05029C5.73754 5.36305 5 7.14348 5 9V15Z"
              stroke="#000000"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <motion.path
              animate={{ y: [0, 5] }}
              transition={{ repeat: Infinity, duration: 4, ease: 'easeInOut' }}
              href="#services"
              className="scroll"
              d="M12 6V14"
              stroke="#000000"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <motion.path
              animate={{ y: [0, 5] }}
              transition={{ repeat: Infinity, duration: 4, ease: 'easeInOut' }}
              href="#services"
              className="scroll"
              d="M15 11L12 14L9 11"
              stroke="#000000"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </motion.a>
      </div>
      <div className="hSection right">
        {/* <motion.div
          variants={followVariants}
          initial="initial"
          animate="animate"
          className="follow"
        >
          <motion.a variants={followVariants} href="/">
            <img src="/instagram.png" alt="" />
          </motion.a>
          <motion.a variants={followVariants} href="/">
            <img src="/facebook.png" alt="" />
          </motion.a>
          <motion.a variants={followVariants} href="/">
            <img src="/youtube.png" alt="" />
          </motion.a>
          <motion.div variants={followVariants} className="followTextContainer">
            <div className="followText">FOLLOW ME</div>
          </motion.div>
        </motion.div> */}
        <Speech />
        {/* <motion.div
          className="certificate"
          animate={{ opacity: [0, 1] }}
          transition={{ duration: 1 }}
        >
          <img src="/certificate.png" alt="" />
          <br />
          FRONT-END DEVELOPER
          <br />
          ENTHUSIAST
        </motion.div> */}
        <motion.a
          href="#contact"
          className="contactLink"
          animate={{ x: [200, 0], opacity: [0, 1] }}
          transition={{ duration: 2 }}
        >
          <motion.div
            className="contactButton"
            // animate={{ rotate: [0, 360] }}
            // transition={{
            //   duration: 4,
            //   repeat: Infinity,
            //   ease: 'anticipate',
            // }}
          >
            <svg viewBox="0 0 200 200" width="150" height="150">
              <circle cx="100" cy="100" r="90" fill="#36BA98" />
              <path
                id="innerCirclePath"
                fill="none"
                d="M 100,100 m -60,0 a 60,60 0 1,1 120,0 a 60,60 0 1,1 -120,0"
              />
              <text className="circleText">
                <textPath href="#innerCirclePath">Hire Now •</textPath>
              </text>
              <text className="circleText">
                <textPath href="#innerCirclePath" startOffset="44%">
                  Contact Me •
                </textPath>
              </text>
            </svg>
            <div className="arrow">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                width="50"
                height="50"
                fill="none"
                stroke="black"
                strokeWidth="2"
              >
                <line x1="6" y1="18" x2="18" y2="6" />
                <polyline points="9 6 18 6 18 15" />
              </svg>
            </div>
          </motion.div>
        </motion.a>
      </div>
      <div className="bg">
        {/* 3d */}
        <Canvas>
          <Suspense fallback="loading...">
            <Shape />
          </Suspense>
        </Canvas>
      </div>
      <div className="hImg">
        <VirtualBadge />
      </div>
    </div>
  )
}

export default Hero
