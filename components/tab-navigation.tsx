"use client"

import { cn } from "@/lib/utils"

interface TabNavigationProps {
  activeTab: string
  onTabChange: (tab: string) => void
}

const tabs = [
  { id: "about", label: "ABOUT" },
  { id: "experience", label: "EXPERIENCE" },
  { id: "projects", label: "PROJECTS" },
  { id: "contact", label: "CONTACT" },
]

export function TabNavigation({ activeTab, onTabChange }: TabNavigationProps) {
  return (
    <div className="border-b border-muted">
      <div className="flex overflow-x-auto">
        {tabs.map((tab) => (
          <button
            key={tab.id}
            onClick={() => onTabChange(tab.id)}
            className={cn(
              "px-6 md:px-12 py-4 font-mono text-sm tracking-wider transition-colors whitespace-nowrap",
              "hover:bg-muted/20",
              activeTab === tab.id ? "bg-foreground text-background" : "text-muted-foreground",
            )}
          >
            {tab.label}
          </button>
        ))}
      </div>
    </div>
  )
}
