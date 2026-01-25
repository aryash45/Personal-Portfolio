"use client"

import { useEffect, useRef, useState } from "react"

export function AnimatedBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const scrollProgress = useRef(0)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext("2d")
    if (!ctx) return

    // Set canvas size
    const resizeCanvas = () => {
      canvas.width = window.innerWidth
      canvas.height = window.innerHeight
    }
    resizeCanvas()
    window.addEventListener("resize", resizeCanvas)

    // Geometric shapes that respond to scroll
    const shapes = [
      {
        x: canvas.width * 0.1,
        y: canvas.height * 0.15,
        size: 60,
        type: "square",
        color: "#D02020",
        scrollOffset: 0.3,
      },
      {
        x: canvas.width * 0.85,
        y: canvas.height * 0.25,
        size: 80,
        type: "circle",
        color: "#1040C0",
        scrollOffset: 0.5,
      },
      {
        x: canvas.width * 0.2,
        y: canvas.height * 0.7,
        size: 100,
        type: "square",
        color: "#F0C020",
        scrollOffset: 0.7,
      },
      {
        x: canvas.width * 0.75,
        y: canvas.height * 0.65,
        size: 70,
        type: "circle",
        color: "#121212",
        scrollOffset: 0.4,
      },
      {
        x: canvas.width * 0.5,
        y: canvas.height * 0.85,
        size: 50,
        type: "triangle",
        color: "#D02020",
        scrollOffset: 0.6,
      },
    ]

    const drawSquare = (x: number, y: number, size: number, color: string, rotation: number) => {
      ctx.save()
      ctx.translate(x, y)
      ctx.rotate(rotation)
      ctx.strokeStyle = color
      ctx.lineWidth = 3
      ctx.strokeRect(-size / 2, -size / 2, size, size)
      ctx.restore()
    }

    const drawCircle = (x: number, y: number, size: number, color: string, scale: number) => {
      ctx.strokeStyle = color
      ctx.lineWidth = 3
      ctx.beginPath()
      ctx.arc(x, y, (size / 2) * scale, 0, Math.PI * 2)
      ctx.stroke()
    }

    const drawTriangle = (x: number, y: number, size: number, color: string, rotation: number) => {
      ctx.save()
      ctx.translate(x, y)
      ctx.rotate(rotation)
      ctx.strokeStyle = color
      ctx.lineWidth = 3
      ctx.beginPath()
      ctx.moveTo(0, -size / 2)
      ctx.lineTo(size / 2, size / 2)
      ctx.lineTo(-size / 2, size / 2)
      ctx.closePath()
      ctx.stroke()
      ctx.restore()
    }

    const animate = () => {
      // Clear canvas
      ctx.fillStyle = "#F0F0F0"
      ctx.fillRect(0, 0, canvas.width, canvas.height)

      // Draw animated shapes
      shapes.forEach((shape) => {
        const offset = scrollProgress.current * shape.scrollOffset * 100
        const rotation = (scrollProgress.current * Math.PI) / 2

        if (shape.type === "square") {
          drawSquare(shape.x, shape.y + offset, shape.size, shape.color, rotation)
        } else if (shape.type === "circle") {
          const scale = 1 + Math.sin(scrollProgress.current * Math.PI * 2) * 0.1
          drawCircle(shape.x, shape.y + offset, shape.size, shape.color, scale)
        } else if (shape.type === "triangle") {
          drawTriangle(shape.x, shape.y + offset, shape.size, shape.color, rotation)
        }
      })

      requestAnimationFrame(animate)
    }

    animate()

    const handleScroll = () => {
      const scrollHeight = document.documentElement.scrollHeight - window.innerHeight
      scrollProgress.current = scrollHeight > 0 ? window.scrollY / scrollHeight : 0
    }

    window.addEventListener("scroll", handleScroll)

    return () => {
      window.removeEventListener("resize", resizeCanvas)
      window.removeEventListener("scroll", handleScroll)
    }
  }, [])

  return (
    <canvas
      ref={canvasRef}
      className="fixed top-0 left-0 w-full h-full pointer-events-none z-0 opacity-20"
      style={{ background: "transparent" }}
    />
  )
}
