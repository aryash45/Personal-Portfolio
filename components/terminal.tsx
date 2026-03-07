"use client"

import { useEffect, useState } from "react"

const commands = [
  { cmd: "$ npm run build:ai-agent", color: "text-green-400" },
  { cmd: "  ✓ Compiled successfully in 2.3s", color: "text-muted-foreground" },
  { cmd: "$ forge deploy --network mainnet", color: "text-green-400" },
  { cmd: "  ✓ Contract deployed at 0x7a2...f9e", color: "text-cyan-400" },
  { cmd: "$ python train_model.py --epochs 100", color: "text-green-400" },
  { cmd: "  ✓ Model accuracy: 97.3% | Loss: 0.042", color: "text-violet-400" },
  { cmd: "$ cargo build --release", color: "text-green-400" },
  { cmd: "  ✓ Finished release [optimized] target", color: "text-muted-foreground" },
]

export function Terminal() {
  const [currentLine, setCurrentLine] = useState(0)
  const [currentChar, setCurrentChar] = useState(0)
  const [displayedLines, setDisplayedLines] = useState<string[]>([])

  useEffect(() => {
    const currentCommand = commands[currentLine]

    if (currentChar < currentCommand.cmd.length) {
      const timeout = setTimeout(
        () => {
          setDisplayedLines((prev) => {
            const newLines = [...prev]
            newLines[currentLine] = currentCommand.cmd.slice(0, currentChar + 1)
            return newLines
          })
          setCurrentChar(currentChar + 1)
        },
        currentCommand.cmd.startsWith("  ") ? 20 : 40 + Math.random() * 30
      )
      return () => clearTimeout(timeout)
    } else if (currentLine < commands.length - 1) {
      const timeout = setTimeout(() => {
        setCurrentLine(currentLine + 1)
        setCurrentChar(0)
      }, currentCommand.cmd.startsWith("  ") ? 600 : 1200)
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
    <div className="glass rounded-xl overflow-hidden glow">
      {/* Title bar */}
      <div className="flex items-center gap-2 px-4 py-3 border-b border-white/5">
        <div className="w-3 h-3 rounded-full bg-red-500/80" />
        <div className="w-3 h-3 rounded-full bg-yellow-500/80" />
        <div className="w-3 h-3 rounded-full bg-green-500/80" />
        <span className="ml-3 font-mono text-xs text-muted-foreground tracking-wider">
          TERMINAL
        </span>
      </div>

      {/* Terminal body */}
      <div className="p-5 font-mono text-sm space-y-1 min-h-[220px]">
        {displayedLines.map((line, index) => (
          <div key={index} className={commands[index]?.color || "text-muted-foreground"}>
            {line}
            {index === currentLine && (
              <span
                className="inline-block w-2 h-4 ml-0.5 align-middle animate-pulse"
                style={{ background: "var(--accent-primary)" }}
              />
            )}
          </div>
        ))}
        {displayedLines.length === 0 && (
          <div className="text-muted-foreground">
            <span
              className="inline-block w-2 h-4 animate-pulse"
              style={{ background: "var(--accent-primary)" }}
            />
          </div>
        )}
      </div>
    </div>
  )
}
