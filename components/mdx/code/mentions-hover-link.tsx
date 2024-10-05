"use client"

import React from "react"
import { motion, type AnimationProps } from "framer-motion"

import { cn } from "@/lib/utils"

const animationProps = {
  initial: { "--x": "100%" },
  animate: { "--x": "-100%" },
  transition: {
    repeat: Infinity,
    repeatType: "loop",
    repeatDelay: 0,
    type: "spring",
    stiffness: 20,
    damping: 15,
    mass: 2,
    scale: {
      type: "spring",
      stiffness: 200,
      damping: 5,
      mass: 0.5,
    },
  },
} as AnimationProps

interface CodeMentionProps {
  children: React.ReactNode
  className?: string
}

const CodeMentionHoverLink = ({
  children,
  className,
  ...props
}: CodeMentionProps) => {
  return (
    <motion.span
      {...animationProps}
      {...props}
      className={cn(
        "relative inline-block rounded-lg px-1.5 font-medium outline-dotted outline-1 hover:outline-2 outline-white/20 hover:outline-white/50 ease-[cubic-bezier(0.95,0.05,0.795,0.035)] transition-[outline-color] cursor-context-menu hover:bg-slate-800",
        className,
      )}
    >
      <span
        className={cn(
          "relative block size-full",
          "hover:[mask-image:linear-gradient(-75deg,hsl(var(--primary)/85)_calc(var(--x)_+_20%),rgba(0,0,0,0.80)_calc(var(--x)_+_30%),hsl(var(--primary)/20)_calc(var(--x)_+_100%));]",
        )}
      >
        {children}
      </span>
    </motion.span>
  )
}

export default CodeMentionHoverLink
