import { useRef, useMemo, Suspense } from 'react'
import { Canvas, useFrame, useThree } from '@react-three/fiber'
import { Float, MeshDistortMaterial, Sphere, TorusKnot } from '@react-three/drei'
import * as THREE from 'three'
import { useReducedMotion } from '../hooks/useReducedMotion'

// Inner geometric security artifact
function SecurityArtifact() {
  const groupRef = useRef<THREE.Group>(null)
  const outerRingRef = useRef<THREE.Mesh>(null)
  const innerRingRef = useRef<THREE.Mesh>(null)
  const wireframeCageRef = useRef<THREE.Mesh>(null)
  const prefersReducedMotion = useReducedMotion()
  const { mouse } = useThree()

  // Pointer tracking
  const targetRotation = useRef({ x: 0, y: 0 })
  const currentRotation = useRef({ x: 0, y: 0 })

  useFrame((state) => {
    if (!groupRef.current || prefersReducedMotion) return

    const time = state.clock.elapsedTime

    // Smooth mouse tracking
    targetRotation.current.x = mouse.y * 0.25
    targetRotation.current.y = mouse.x * 0.25

    currentRotation.current.x += (targetRotation.current.x - currentRotation.current.x) * 0.04
    currentRotation.current.y += (targetRotation.current.y - currentRotation.current.y) * 0.04

    groupRef.current.rotation.x = currentRotation.current.x
    groupRef.current.rotation.y = time * 0.14 + currentRotation.current.y

    if (outerRingRef.current) {
      outerRingRef.current.rotation.z = time * 0.09
      outerRingRef.current.rotation.x = Math.PI / 2 + time * 0.05
    }
    if (innerRingRef.current) {
      innerRingRef.current.rotation.z = -time * 0.13
      innerRingRef.current.rotation.y = time * 0.07
    }
    if (wireframeCageRef.current) {
      wireframeCageRef.current.rotation.x = time * 0.08
      wireframeCageRef.current.rotation.y = -time * 0.1
    }
  })

  // Tactical cybersecurity color palette: Phosphor Emerald & Warm Uranium Amber
  const emeraldColor = '#00f59b'
  const amberColor = '#ffb020'

  return (
    <group ref={groupRef}>
      {/* Central obsidian core with distortion */}
      <Float speed={1.2} rotationIntensity={0.2} floatIntensity={0.35}>
        <Sphere args={[1.15, 64, 64]}>
          <MeshDistortMaterial
            color="#090d14"
            metalness={0.9}
            roughness={0.12}
            distort={0.22}
            speed={0.9}
            envMapIntensity={1.2}
          />
        </Sphere>
      </Float>

      {/* Wireframe Cryptographic Outer Cage (Icosahedron) */}
      <mesh ref={wireframeCageRef}>
        <icosahedronGeometry args={[1.7, 1]} />
        <meshBasicMaterial
          color={emeraldColor}
          wireframe
          transparent
          opacity={0.35}
        />
      </mesh>

      {/* Outer orbital ring */}
      <mesh ref={outerRingRef} rotation={[Math.PI / 2, 0, 0]}>
        <torusGeometry args={[2.15, 0.014, 12, 200]} />
        <meshStandardMaterial
          color={emeraldColor}
          emissive={emeraldColor}
          emissiveIntensity={1.2}
          metalness={1}
          roughness={0}
        />
      </mesh>

      {/* Inner orbital ring */}
      <mesh ref={innerRingRef} rotation={[Math.PI / 3, 0, 0]}>
        <torusGeometry args={[1.68, 0.01, 12, 160]} />
        <meshStandardMaterial
          color={amberColor}
          emissive={amberColor}
          emissiveIntensity={0.95}
          metalness={1}
          roughness={0}
        />
      </mesh>

      {/* Tactical radar beacons on rings */}
      {[
        { pos: [2.15, 0, 0] as [number, number, number], color: emeraldColor },
        { pos: [-2.15, 0, 0] as [number, number, number], color: emeraldColor },
        { pos: [0, 2.15, 0] as [number, number, number], color: amberColor },
        { pos: [0, -2.15, 0] as [number, number, number], color: amberColor },
        { pos: [1.52, 0, 1.52] as [number, number, number], color: emeraldColor },
        { pos: [-1.52, 0, -1.52] as [number, number, number], color: emeraldColor },
      ].map((node, i) => (
        <mesh key={i} position={node.pos}>
          <sphereGeometry args={[0.048, 12, 12]} />
          <meshStandardMaterial
            color={node.color}
            emissive={node.color}
            emissiveIntensity={2.2}
          />
        </mesh>
      ))}

      {/* Torus knot dense core accent */}
      <group scale={0.36} position={[0, 0, 0]}>
        <TorusKnot args={[1, 0.16, 200, 20, 2, 5]}>
          <meshStandardMaterial
            color="#0f1624"
            metalness={0.95}
            roughness={0.05}
            envMapIntensity={0.8}
            transparent
            opacity={0.65}
          />
        </TorusKnot>
      </group>

      {/* Point lights for high-contrast dramatic illumination */}
      <pointLight position={[4, 4, 4]} color={emeraldColor} intensity={2.8} distance={14} />
      <pointLight position={[-4, -4, -4]} color={amberColor} intensity={1.8} distance={12} />
      <pointLight position={[0, 6, 0]} color="#ffffff" intensity={0.9} distance={16} />
    </group>
  )
}

// Particle field
function ParticleField() {
  const points = useRef<THREE.Points>(null)
  const prefersReducedMotion = useReducedMotion()

  const particles = useMemo(() => {
    const count = 90
    const positions = new Float32Array(count * 3)
    for (let i = 0; i < count; i++) {
      const theta = Math.random() * Math.PI * 2
      const phi = Math.acos(2 * Math.random() - 1)
      const radius = 3.2 + Math.random() * 2.8
      positions[i * 3] = radius * Math.sin(phi) * Math.cos(theta)
      positions[i * 3 + 1] = radius * Math.sin(phi) * Math.sin(theta)
      positions[i * 3 + 2] = radius * Math.cos(phi)
    }
    return positions
  }, [])

  useFrame((state) => {
    if (!points.current || prefersReducedMotion) return
    points.current.rotation.y = state.clock.elapsedTime * 0.035
    points.current.rotation.x = state.clock.elapsedTime * 0.018
  })

  return (
    <points ref={points}>
      <bufferGeometry>
        <bufferAttribute
          attach="attributes-position"
          count={particles.length / 3}
          array={particles}
          itemSize={3}
        />
      </bufferGeometry>
      <pointsMaterial
        size={0.035}
        color="#00f59b"
        transparent
        opacity={0.55}
        sizeAttenuation
      />
    </points>
  )
}

export default function HeroScene() {
  const prefersReducedMotion = useReducedMotion()

  return (
    <div style={{ width: '100%', height: '100%', position: 'relative' }}>
      <Canvas
        camera={{ position: [0, 0, 5.2], fov: 46 }}
        dpr={[1, 1.5]}
        gl={{
          antialias: true,
          alpha: true,
          powerPreference: 'high-performance',
        }}
        style={{ background: 'transparent' }}
      >
        <ambientLight intensity={0.35} />
        <directionalLight position={[5, 8, 5]} intensity={1.2} />
        <directionalLight position={[-5, -4, -3]} color="#00f59b" intensity={0.8} />

        <Suspense fallback={null}>
          <SecurityArtifact />
          {!prefersReducedMotion && <ParticleField />}
        </Suspense>
      </Canvas>
    </div>
  )
}
