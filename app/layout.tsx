import type React from "react";
import type { Metadata } from 'next'
import { Inter, JetBrains_Mono } from 'next/font/google'
import './globals.css'
import { ThemeProvider } from '@/components/theme-provider'
import SmoothScroll from '@/components/smooth-scroll'
import CustomCursor from '@/components/custom-cursor'
import Preloader from '@/components/preloader'

const inter = Inter({ subsets: ['latin'], variable: '--font-inter' })
const jetbrainsMono = JetBrains_Mono({ subsets: ['latin'], variable: '--font-jetbrains' })

export const metadata: Metadata = {
  title: 'ARYASH GUPTA | Full-Stack Developer & AI Engineer',
  description: 'Chill full-stack dev brewing chaotic AI apps. Building intelligent systems and immersive web experiences.',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" suppressHydrationWarning className="scroll-smooth">
      <body className={`${inter.variable} ${jetbrainsMono.variable} font-sans antialiased text-white bg-[#050505]`}>
        {/* Background Texture */}
        <div className="noise fixed inset-0 z-[-1] opacity-[0.03] pointer-events-none" />
        
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem={false}
          disableTransitionOnChange
        >
          <SmoothScroll>
            <CustomCursor />
            <Preloader />
            {children}
          </SmoothScroll>
        </ThemeProvider>
      </body>
    </html>
  )
}
