'use client'

import { useRef } from 'react'
import { useFrame } from '@react-three/fiber'
import * as THREE from 'three'

export default function MuscularGorilla() {
  const groupRef = useRef<THREE.Group>(null)

  useFrame((state) => {
    if (groupRef.current) {
      groupRef.current.rotation.y = Math.sin(state.clock.elapsedTime * 0.3) * 0.1
    }
  })

  const skinColor = '#2a1f1f'
  const muscleColor = '#3d2828'
  const highlightColor = '#4a3333'

  return (
    <group ref={groupRef} position={[0, 0, 0]}>
      {/* Голова - меньше относительно тела */}
      <group position={[0, 3.2, 0]}>
        <mesh castShadow>
          <sphereGeometry args={[0.55, 32, 32]} />
          <meshStandardMaterial color={skinColor} roughness={0.9} metalness={0.1} />
        </mesh>

        {/* Челюсть */}
        <mesh castShadow position={[0, -0.25, 0.35]}>
          <boxGeometry args={[0.5, 0.35, 0.4]} />
          <meshStandardMaterial color={skinColor} roughness={0.9} />
        </mesh>

        {/* Глаза */}
        <mesh castShadow position={[-0.2, 0.1, 0.45]}>
          <sphereGeometry args={[0.08, 16, 16]} />
          <meshStandardMaterial color="#000" />
        </mesh>
        <mesh castShadow position={[0.2, 0.1, 0.45]}>
          <sphereGeometry args={[0.08, 16, 16]} />
          <meshStandardMaterial color="#000" />
        </mesh>

        {/* Брови - массивные */}
        <mesh castShadow position={[0, 0.25, 0.4]}>
          <boxGeometry args={[0.6, 0.15, 0.2]} />
          <meshStandardMaterial color={muscleColor} roughness={0.95} />
        </mesh>
      </group>

      {/* Шея - очень мускулистая */}
      <mesh castShadow position={[0, 2.6, 0]}>
        <cylinderGeometry args={[0.45, 0.6, 0.6, 32]} />
        <meshStandardMaterial color={muscleColor} roughness={0.85} metalness={0.15} />
      </mesh>

      {/* Трапеции - огромные */}
      <mesh castShadow position={[0, 2.4, 0]}>
        <sphereGeometry args={[0.8, 32, 32, 0, Math.PI * 2, 0, Math.PI / 2]} />
        <meshStandardMaterial color={highlightColor} roughness={0.8} metalness={0.2} />
      </mesh>

      {/* Торс - массивный */}
      <group position={[0, 1.6, 0]}>
        {/* Грудь - огромная */}
        <mesh castShadow position={[0, 0.3, 0.15]} scale={[1.6, 1, 1.2]}>
          <sphereGeometry args={[0.7, 32, 32]} />
          <meshStandardMaterial color={muscleColor} roughness={0.8} metalness={0.2} />
        </mesh>

        {/* Пекторальные мышцы */}
        <mesh castShadow position={[-0.4, 0.35, 0.5]} rotation={[0, 0, -0.3]}>
          <sphereGeometry args={[0.35, 32, 32]} />
          <meshStandardMaterial color={highlightColor} roughness={0.75} metalness={0.25} />
        </mesh>
        <mesh castShadow position={[0.4, 0.35, 0.5]} rotation={[0, 0, 0.3]}>
          <sphereGeometry args={[0.35, 32, 32]} />
          <meshStandardMaterial color={highlightColor} roughness={0.75} metalness={0.25} />
        </mesh>

        {/* Пресс */}
        <mesh castShadow position={[0, -0.2, 0.4]}>
          <boxGeometry args={[0.6, 0.8, 0.3]} />
          <meshStandardMaterial color={muscleColor} roughness={0.85} />
        </mesh>

        {/* Латеральные мышцы */}
        <mesh castShadow position={[-0.7, 0.1, 0]} rotation={[0, 0, 0.5]}>
          <sphereGeometry args={[0.45, 32, 32]} />
          <meshStandardMaterial color={highlightColor} roughness={0.8} metalness={0.2} />
        </mesh>
        <mesh castShadow position={[0.7, 0.1, 0]} rotation={[0, 0, -0.5]}>
          <sphereGeometry args={[0.45, 32, 32]} />
          <meshStandardMaterial color={highlightColor} roughness={0.8} metalness={0.2} />
        </mesh>
      </group>

      {/* Правая рука - гипертрофированная */}
      <group position={[1.1, 2, 0]}>
        {/* Плечо - огромное */}
        <mesh castShadow position={[0.2, 0, 0]}>
          <sphereGeometry args={[0.5, 32, 32]} />
          <meshStandardMaterial color={highlightColor} roughness={0.75} metalness={0.25} />
        </mesh>

        {/* Бицепс */}
        <mesh castShadow position={[0.3, -0.6, 0]} rotation={[0, 0, 0.2]}>
          <capsuleGeometry args={[0.35, 0.7, 32, 32]} />
          <meshStandardMaterial color={muscleColor} roughness={0.8} metalness={0.2} />
        </mesh>

        {/* Предплечье */}
        <mesh castShadow position={[0.35, -1.5, 0]} rotation={[0, 0, 0.15]}>
          <capsuleGeometry args={[0.25, 0.8, 32, 32]} />
          <meshStandardMaterial color={muscleColor} roughness={0.85} />
        </mesh>

        {/* Кисть */}
        <mesh castShadow position={[0.4, -2.2, 0]}>
          <sphereGeometry args={[0.3, 32, 32]} />
          <meshStandardMaterial color={skinColor} roughness={0.9} />
        </mesh>
      </group>

      {/* Левая рука - гипертрофированная */}
      <group position={[-1.1, 2, 0]}>
        {/* Плечо - огромное */}
        <mesh castShadow position={[-0.2, 0, 0]}>
          <sphereGeometry args={[0.5, 32, 32]} />
          <meshStandardMaterial color={highlightColor} roughness={0.75} metalness={0.25} />
        </mesh>

        {/* Бицепс */}
        <mesh castShadow position={[-0.3, -0.6, 0]} rotation={[0, 0, -0.2]}>
          <capsuleGeometry args={[0.35, 0.7, 32, 32]} />
          <meshStandardMaterial color={muscleColor} roughness={0.8} metalness={0.2} />
        </mesh>

        {/* Предплечье */}
        <mesh castShadow position={[-0.35, -1.5, 0]} rotation={[0, 0, -0.15]}>
          <capsuleGeometry args={[0.25, 0.8, 32, 32]} />
          <meshStandardMaterial color={muscleColor} roughness={0.85} />
        </mesh>

        {/* Кисть */}
        <mesh castShadow position={[-0.4, -2.2, 0]}>
          <sphereGeometry args={[0.3, 32, 32]} />
          <meshStandardMaterial color={skinColor} roughness={0.9} />
        </mesh>
      </group>

      {/* Правая нога */}
      <group position={[0.4, 0.8, 0]}>
        {/* Бедро - массивное */}
        <mesh castShadow position={[0, -0.3, 0]}>
          <capsuleGeometry args={[0.45, 0.9, 32, 32]} />
          <meshStandardMaterial color={muscleColor} roughness={0.8} metalness={0.2} />
        </mesh>

        {/* Колено */}
        <mesh castShadow position={[0, -0.9, 0.1]}>
          <sphereGeometry args={[0.35, 32, 32]} />
          <meshStandardMaterial color={highlightColor} roughness={0.85} />
        </mesh>

        {/* Голень */}
        <mesh castShadow position={[0, -1.5, 0.05]}>
          <capsuleGeometry args={[0.3, 0.9, 32, 32]} />
          <meshStandardMaterial color={muscleColor} roughness={0.85} />
        </mesh>

        {/* Стопа */}
        <mesh castShadow position={[0, -2.1, 0.25]}>
          <boxGeometry args={[0.35, 0.25, 0.55]} />
          <meshStandardMaterial color={skinColor} roughness={0.9} />
        </mesh>
      </group>

      {/* Левая нога */}
      <group position={[-0.4, 0.8, 0]}>
        {/* Бедро - массивное */}
        <mesh castShadow position={[0, -0.3, 0]}>
          <capsuleGeometry args={[0.45, 0.9, 32, 32]} />
          <meshStandardMaterial color={muscleColor} roughness={0.8} metalness={0.2} />
        </mesh>

        {/* Колено */}
        <mesh castShadow position={[0, -0.9, 0.1]}>
          <sphereGeometry args={[0.35, 32, 32]} />
          <meshStandardMaterial color={highlightColor} roughness={0.85} />
        </mesh>

        {/* Голень */}
        <mesh castShadow position={[0, -1.5, 0.05]}>
          <capsuleGeometry args={[0.3, 0.9, 32, 32]} />
          <meshStandardMaterial color={muscleColor} roughness={0.85} />
        </mesh>

        {/* Стопа */}
        <mesh castShadow position={[0, -2.1, 0.25]}>
          <boxGeometry args={[0.35, 0.25, 0.55]} />
          <meshStandardMaterial color={skinColor} roughness={0.9} />
        </mesh>
      </group>

      {/* Венозность - выступающие вены */}
      {[...Array(15)].map((_, i) => (
        <mesh
          key={i}
          castShadow
          position={[
            (Math.random() - 0.5) * 1.5,
            1 + Math.random() * 1.5,
            0.3 + Math.random() * 0.3
          ]}
          rotation={[
            Math.random() * Math.PI,
            Math.random() * Math.PI,
            Math.random() * Math.PI
          ]}
        >
          <capsuleGeometry args={[0.02, 0.3, 8, 8]} />
          <meshStandardMaterial
            color="#1a1212"
            roughness={0.7}
            metalness={0.3}
            emissive="#0a0505"
            emissiveIntensity={0.2}
          />
        </mesh>
      ))}
    </group>
  )
}
