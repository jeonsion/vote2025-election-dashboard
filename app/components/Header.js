'use client'

import { useState, useEffect } from 'react'
import { Clock, Vote } from 'lucide-react'
import { format } from 'date-fns'
import { ko } from 'date-fns/locale'

export default function Header({ overallRate }) {
  const [currentTime, setCurrentTime] = useState(new Date())

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTime(new Date())
    }, 1000)

    return () => clearInterval(timer)
  }, [])

  return (
    <header className="bg-gray-800 border-b border-gray-700 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
        <div className="flex flex-col sm:flex-row justify-between items-center gap-4">
          <div className="flex items-center gap-3">
            <div className="bg-korean-red p-2 rounded-lg">
              <Vote className="w-6 h-6 text-white" />
            </div>
            <div>
              <h1 className="text-xl sm:text-2xl font-bold text-white">제21대 대통령선거</h1>
              <p className="text-sm text-gray-400">2022년 3월 9일 (수) 실시간 투표율</p>
            </div>
          </div>
          
          <div className="flex flex-col sm:flex-row items-center gap-4 sm:gap-6">
            <div className="text-center">
              <p className="text-sm text-gray-400">전국 투표율</p>
              <p className="text-2xl sm:text-3xl font-bold korean-blue animate-count-up">
                {overallRate.toFixed(1)}%
              </p>
            </div>
            
            <div className="flex items-center gap-2 text-gray-300">
              <Clock className="w-4 h-4" />
              <span className="text-sm font-mono">
                {format(currentTime, 'HH:mm:ss', { locale: ko })}
              </span>
            </div>
          </div>
        </div>
      </div>
    </header>
  )
} 