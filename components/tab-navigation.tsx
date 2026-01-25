"use client"

import { cn } from "@/lib/utils"

interface TabNavigationProps {
  activeTab: string
  onTabChange: (tab: string) => void
}

const tabs = [
  { id: "about", label: "01. ABOUT", color: "#D02020" },
  { id: "experience", label: "02. EXPERIENCE", color: "#1040C0" },
  { id: "projects", label: "03. PROJECTS", color: "#F0C020" },
  { id: "contact", label: "04. CONTACT", color: "#121212" },
]

export function TabNavigation({ activeTab, onTabChange }: TabNavigationProps) {
  const activeTab_obj = tabs.find((t) => t.id === activeTab)

  return (
    <div className="border-b-4 border-[#121212] bg-[#F0F0F0] sticky top-0 z-40">
      <div className="flex overflow-x-auto max-w-7xl mx-auto">
        {tabs.map((tab) => (
          <button
            key={tab.id}
            onClick={() => onTabChange(tab.id)}
            className={cn(
              "px-4 md:px-8 py-6 font-black text-sm tracking-widest uppercase whitespace-nowrap transition-all duration-200 border-b-4",
              activeTab === tab.id
                ? "bg-[#121212] text-white border-b-4 border-[#121212] shadow-[0_4px_0px_0px_rgba(0,0,0,0.1)]"
                : "text-[#121212] border-b-4 border-transparent hover:bg-[#E0E0E0]",
            )}
            style={activeTab === tab.id ? { backgroundColor: tab.color } : {}}
          >
            {tab.label}
          </button>
        ))}
      </div>
    </div>
  )
}
