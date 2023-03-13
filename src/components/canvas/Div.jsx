import * as THREE from 'three'
import React, { forwardRef, useImperativeHandle, useRef } from 'react'
import { useFrame, useThree } from '@react-three/fiber'

const Div = forwardRef((props, ref) => {
  const { size, ...rest } = props
  const groupRef = useRef()
  const { viewport, aspect } = useThree()
  const pixelSize = size / viewport.width * aspect
  const virtualScene = useFrame(({ camera }) => {
    if (!groupRef.current) return
    groupRef.current.quaternion.copy(camera.quaternion)
  }, 1)

  useImperativeHandle(ref, () => ({
    get threeObject() {
      return groupRef.current
    },
  }))

  return (
    <group ref={groupRef}>
      <mesh scale={[pixelSize, pixelSize, 1]} {...rest}>
        <planeBufferGeometry />
        <meshBasicMaterial />
      </mesh>
    </group>
  )
})

export default Div
