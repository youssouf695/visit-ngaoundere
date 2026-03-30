'use client'

import { useEffect, useState } from 'react'
import { motion } from 'framer-motion'
import { FaEye, FaChartLine } from 'react-icons/fa'

export default function VisitCounter() {
  const [count, setCount] = useState(null)
  const [isHovered, setIsHovered] = useState(false)

  useEffect(() => {
    fetch('/api/visits', { method: 'POST' })
      .then(res => res.json())
      .then(data => setCount(data.count))
      .catch(() => setCount(42))
  }, [])

  if (count === null) {
    return <div className="h-10 w-36 bg-gray-200 animate-pulse rounded-full" />
  }

  return (
    <motion.div
      whileHover={{ scale: 1.05 }}
      onHoverStart={() => setIsHovered(true)}
      onHoverEnd={() => setIsHovered(false)}
      className="relative"
    >
      <div className="inline-flex items-center gap-3 bg-white/80 backdrop-blur-sm px-5 py-2 rounded-full border border-gray-200 shadow-lg">
        <div className="relative">
          <FaEye className="w-4 h-4 text-orange-500" />
          <motion.div
            animate={{ scale: isHovered ? 1.2 : 1 }}
            className="absolute -top-1 -right-1 w-2 h-2 bg-green-500 rounded-full"
          />
        </div>
        <span className="font-bold text-gray-900">{count}</span>
        <span className="text-gray-500 text-sm">visiteurs</span>
        <FaChartLine className="w-3 h-3 text-green-500" />
      </div>
    </motion.div>
  )
}