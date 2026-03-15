"use client"

import { useRef } from "react"
import { useFrame } from "@react-three/fiber"
import * as THREE from "three"

interface TorusMeshProps {
  mouseX: number
  mouseY: number
}

export function TorusMesh({ mouseX, mouseY }: TorusMeshProps) {
  const meshRef  = useRef<THREE.Mesh>(null!)
  // Auto-rotation accumulator (separate from mouse parallax)
  const autoRotY = useRef(0)
  const autoRotX = useRef(0)
  // Smoothed mouse parallax offsets
  const parallaxX = useRef(0)
  const parallaxY = useRef(0)

  useFrame((_, delta) => {
    if (!meshRef.current) return

    // Continuous auto-rotation
    autoRotY.current += delta * 0.18
    autoRotX.current += delta * 0.07

    // Smooth mouse parallax (lerp toward normalized mouse position)
    parallaxX.current += (mouseY * 0.45 - parallaxX.current) * 0.04
    parallaxY.current += (mouseX * 0.45 - parallaxY.current) * 0.04

    // Combine: auto-rotation + mouse tilt
    meshRef.current.rotation.x = autoRotX.current + parallaxX.current
    meshRef.current.rotation.y = autoRotY.current + parallaxY.current
  })

  return (
    <mesh ref={meshRef}>
      <torusKnotGeometry args={[1.0, 0.32, 128, 32]} />
      <meshStandardMaterial
        color="#7c3aed"
        wireframe
        emissive="#4c1d95"
        emissiveIntensity={0.6}
      />
    </mesh>
  )
}
