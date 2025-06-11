import React, {useRef, useState} from 'react'
import {Canvas, MeshProps, useFrame} from '@react-three/fiber/native'
import {Color, Mesh} from 'three'
import {StyleSheet} from 'react-native'

function Box(props: MeshProps) {
  const mesh = useRef<Mesh>(null!)
  const [hovered, setHover] = useState(false)
  const [active, setActive] = useState(false)
  // callback before frame render
  useFrame((state, delta) => (mesh.current.rotation.x += delta))
  return (
    <mesh
      {...props}
      ref={mesh}
      scale={active ? 1.5 : 1}
      onClick={(event) => setActive(!active)}>
      <boxGeometry args={[1, 1, 1]} />
      <meshStandardMaterial color={hovered ? 'hotpink' : 'orange'} />
    </mesh>
  )
}

export const ThreedViewTest = () => {
  return (
    <Canvas style={StyleSheet.absoluteFillObject}>
      <ambientLight
        intensity={Math.PI / 2}
        color={new Color().setHex(0x00ffff)}
      />
      <spotLight
        position={[10, 10, 10]}
        angle={0.15}
        penumbra={1}
        decay={0}
        intensity={Math.PI}
      />
      <pointLight position={[-10, -10, -10]} decay={0} intensity={Math.PI} />
      <Box position={[-1.2, 0, 0]} />
      <Box position={[1.2, 0, 0]} />
    </Canvas>
  )
}
