import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'
import { useFrame } from '@react-three/fiber'

export function Bot(props) {
  const { nodes, materials } = useGLTF('/bot-transformed.glb')
  const group = useRef();
  useFrame(({ clock }) => {
    group.current.rotation.y = Math.sin(clock.getElapsedTime()) * 0.5;
  });
  return (
    <group {...props} dispose={null} ref={group}  >
      <group position={[0, 2.91, 0]} rotation={[Math.PI / 2, 0, -Math.PI]}>
        <group rotation={[-Math.PI, 0, 0]}>
          <mesh geometry={nodes.CABEZA_1_CABEZA_1_0.geometry} material={materials.CABEZA_1} rotation={[Math.PI / 2, 0, 0]}  />
          <mesh geometry={nodes.PECHO_1_PECHO_1_0.geometry} material={materials.PECHO_1} rotation={[Math.PI / 2, 0, 0]} />
          <mesh geometry={nodes.HOMBRO_1_HOMBRO_1_0.geometry} material={materials.HOMBRO_1} rotation={[Math.PI / 2, 0, 0]} />
        </group>
      </group>
    </group>
  )
}

useGLTF.preload('/bot-transformed.glb')

// wrap <Bot /> in a div with bg-blue-500 class
function App() {
  return (
    <div className="bg-blue-500">
      <Bot />
    </div>
  )
}

export default App;
