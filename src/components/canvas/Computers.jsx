import {React,Suspense,useEffect,useState} from 'react'
import { Canvas } from '@react-three/fiber'
import { OrbitControls,Preload,useGLTF} from '@react-three/drei'
import CanvasLoader from '../Loader'
import { Model } from '../Desktop'
// const Computers = () => {
  
//   const computer = useGLTF('/desktop_pc/scene.gltf')
//   return (
//    <mesh> 
//     <hemisphereLight intensity={0.15}
//      groundColor="black"
//     />
//     <pointLight intensity={1}/>
//     <primitive
//      object={computer.scene}
//     />
//    </mesh> 

//   )
// }

const ComputersCanvas = () =>{
 
   return (
    <Canvas  >
    <OrbitControls />
    <ambientLight intensity={0.5}/>
    <directionalLight position={[2,1,1]} intensity={1}/>
    <Suspense fallback={null}>
    <Model/>
    </Suspense>
          </Canvas>

   )

}

export default ComputersCanvas