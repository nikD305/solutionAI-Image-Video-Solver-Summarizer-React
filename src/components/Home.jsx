import React from 'react'
import Image from './Image'
import Video from './Video'
import Hero from './Hero'
import Navbar from './Navbar'
import { motion ,AnimatePresence} from "framer-motion";
import ParticleBg from './ParticleBg';

const Home = () => {
  return (
    <motion.div
     
    initial={{width:0}}
    animate={{width:"100%"}}
    exit={{x:window.innerWidth}}
   transition={{duration:0.5}} 
    >
    
      <Hero/>
   
    </motion.div>
  )
}

export default Home