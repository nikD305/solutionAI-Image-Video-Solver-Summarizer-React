import React from 'react'
import { Route,Routes, useLocation} from "react-router-dom"
import Home from './Home'
import Image from './Image'
import Video from './Video'
import { motion ,AnimatePresence} from "framer-motion";

const AnimatedRoutes = () => {
    const location = useLocation()
  return (
    <AnimatePresence>
    <Routes location={location} key={location.pathname}>
    <Route path="/" element={<Home/>}/>
    <Route path="/Image" element={<Image/>}/>
    <Route path="/Video" element={<Video/>}/>
   </Routes>
   </AnimatePresence>
  )
}

export default AnimatedRoutes