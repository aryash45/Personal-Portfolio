"use client"

import { useEffect, useState } from "react"

const commands = [
  "$ npm run build:ai-agent",
  "$ forge deploy --network mainnet",
  "$ python train_model.py --epochs 100",
  "$ cargo build --release",
  "$ docker push neural-trade:latest",
  "$ kubectl apply -f production.yaml",
]

export function Terminal() {
  const [currentLine, setCurrentLine] = useState(0)
  const [currentChar, setCurrentChar] = useState(0)
  const [displayedLines, setDisplayedLines] = useState<string[]>([])

  useEffect(() => {
    const currentCommand = commands[currentLine]

    if (currentChar < currentCommand.length) {
      const timeout = setTimeout(
        () => {
          setDisplayedLines((prev) => {
            const newLines = [...prev]
            newLines[currentLine] = currentCommand.slice(0, currentChar + 1)
            return newLines
          })
          setCurrentChar(currentChar + 1)
        },
        50 + Math.random() * 50,
      )
      return () => clearTimeout(timeout)
    } else if (currentLine < commands.length - 1) {
      const timeout = setTimeout(() => {
        setCurrentLine(currentLine + 1)
        setCurrentChar(0)
      }, 1500)
      return () => clearTimeout(timeout)
    } else {
      const timeout = setTimeout(() => {
        setDisplayedLines([])
        setCurrentLine(0)
        setCurrentChar(0)
      }, 3000)
      return () => clearTimeout(timeout)
    }
  }, [currentChar, currentLine])

  return (
    <div className="border border-border p-6 font-mono text-sm bg-background">
      <div className="flex items-center gap-2 mb-4 pb-4 border-b border-border">
        <div className="w-3 h-3 border border-muted-foreground" />
        <div className="w-3 h-3 border border-muted-foreground" />
        <div className="w-3 h-3 border border-muted-foreground" />
        <span className="ml-4 text-muted-foreground text-xs">TERMINAL</span>
      </div>
      <div className="space-y-2 min-h-[180px]">
        {displayedLines.map((line, index) => (
          <div key={index} className="text-muted-foreground">
            {line}
            {index === currentLine && <span className="animate-pulse">█</span>}
          </div>
        ))}
        {displayedLines.length === 0 && (
          <div className="text-muted-foreground">
            <span className="animate-pulse">█</span>
          </div>
        )}
      </div>
    </div>
  )
}
