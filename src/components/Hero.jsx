import { motion } from 'framer-motion'
import { styles } from '../styles'
import { ComputersCanvas } from './canvas'
import { Bot } from './Bot'
import React, { Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import { Link } from 'react-router-dom';
const Hero = () => {
  return (
    <section className='relative w-full h-screen mx-auto '>
      <div className=' h-[91%] w-1/2 absolute left-2 top-[43px] translate-x-[-9px] flex justify-center items-center flex-col'>
      <p class="bg-gradient-to-r from-black to-white bg-clip-text text-transparent md:text-6xl ld:text-6xl sm:text-3xl  font-bold text-center box-border p-3 ml-4 absolute top-20 ">Start Solving/Summarizing</p>
          <Link to='/Image'>
        <button className='btn w-32'>
          Image
        </button>
          </Link>
          <Link to='/Video'>

        <button className='btn w-32'>
          Video
        </button>
          </Link>
      </div>
      <div className=' h-[91%] w-1/2 absolute right-2 top-[20px] ml-3 translate-x-[9px]  '>
      <Canvas style={{ height: "100vh" }} shadowMap>
  <ambientLight />
  <pointLight position={[10, 10, 10]} castShadow />
  <OrbitControls />
  <Suspense fallback={null}>
    <group position={[0, -1, 0]} scale={[0.9, 0.9, 0.9]} >
      <Bot className='bg-blue-400' receiveShadow />
    </group>
  </Suspense>
</Canvas>

      </div>

     
    </section>
  )
}

export default Hero
