// import React from 'react'

import Sidebar from '../sidebar/Sidebar'
import { motion } from 'motion/react'

const Navbar = () => {
  return (
    <div className="navbar">
      {/* {Sidebar} */}
      <Sidebar />
      <div className="wrapper">
        <motion.span
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
        >
          Fadhola Asandi MP{' '}
        </motion.span>
        <div className="social">
          <a href="#">
            <img src='"/facebook.png' alt=""></img>
          </a>
          <a href="#">
            <img src='"/instagram.png' alt=""></img>
          </a>
          <a href="#">
            <img src='"/youtube.png' alt=""></img>
          </a>
          <a href="#">
            <img src='"/dribble.png' alt=""></img>
          </a>
        </div>
      </div>
    </div>
  )
}

export default Navbar
