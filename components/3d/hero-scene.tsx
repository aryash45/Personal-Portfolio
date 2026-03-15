"use client"

import { Suspense } from "react"
import { Canvas } from "@react-three/fiber"
import { TorusMesh } from "./torus-mesh"
import { ParticleField } from "./particle-field"

interface HeroSceneProps {
  mouseX: number
  mouseY: number
}

export function HeroScene({ mouseX, mouseY }: HeroSceneProps) {
  return (
    <Canvas
      camera={{ position: [0, 0, 5], fov: 60 }}
      gl={{ antialias: true, alpha: true }}
      dpr={[1, 1.5]}
      style={{ background: "transparent" }}
    >
      {/* Lights matched to the portfolio's accent color palette */}
      <ambientLight intensity={0.2} />
      <pointLight position={[4, 4, 4]} intensity={2.5} color="#7c3aed" />
      <pointLight position={[-4, -3, 2]} intensity={1.5} color="#06b6d4" />

      <Suspense fallback={null}>
        <TorusMesh mouseX={mouseX} mouseY={mouseY} />
        <ParticleField />
      </Suspense>
    </Canvas>
  )
}
