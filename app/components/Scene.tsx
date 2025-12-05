'use client'

import { Canvas } from '@react-three/fiber'
import { OrbitControls, PerspectiveCamera, Environment } from '@react-three/drei'
import MuscularGorilla from './MuscularGorilla'

export default function Scene() {
  return (
    <Canvas shadows>
      <PerspectiveCamera makeDefault position={[0, 2, 8]} />
      <OrbitControls
        enablePan={true}
        enableZoom={true}
        enableRotate={true}
        minDistance={4}
        maxDistance={15}
        target={[0, 1.5, 0]}
      />

      <ambientLight intensity={0.5} />
      <directionalLight
        position={[5, 8, 5]}
        intensity={1.5}
        castShadow
        shadow-mapSize-width={2048}
        shadow-mapSize-height={2048}
      />
      <directionalLight position={[-5, 5, -5]} intensity={0.8} />
      <spotLight position={[0, 10, 0]} intensity={0.5} angle={0.6} penumbra={1} />

      <Environment preset="warehouse" />

      <MuscularGorilla />

      <mesh receiveShadow rotation={[-Math.PI / 2, 0, 0]} position={[0, 0, 0]}>
        <planeGeometry args={[20, 20]} />
        <meshStandardMaterial color="#1a1a2e" roughness={0.8} metalness={0.2} />
      </mesh>
    </Canvas>
  )
}
