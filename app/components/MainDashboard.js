'use client'

import { Users, TrendingUp, Target } from 'lucide-react'

export default function MainDashboard({ 
  overallRate, 
  totalVoters, 
  totalVoted, 
  targetRate = 77.1 
}) {
  const progressPercentage = (overallRate / targetRate) * 100
  const remainingVoters = totalVoters - totalVoted

  return (
    <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-8">
      {/* 메인 투표율 */}
      <div className="lg:col-span-2 bg-gray-800 rounded-lg p-8 border border-gray-700">
        <div className="text-center mb-6">
          <h2 className="text-lg text-gray-400 mb-2">전국 실시간 투표율</h2>
          <div className="flex items-end justify-center gap-2 mb-4">
            <span className="text-6xl md:text-8xl font-bold korean-blue animate-count-up">
              {overallRate.toFixed(1)}
            </span>
            <span className="text-3xl md:text-4xl text-gray-400 mb-4">%</span>
          </div>
          
          <div className="relative w-full bg-gray-700 rounded-full h-4 mb-4">
            <div 
              className="bg-gradient-to-r from-korean-blue to-blue-500 h-4 rounded-full transition-all duration-1000 ease-out relative"
              style={{ width: `${Math.min(progressPercentage, 100)}%` }}
            >
              <div className="absolute right-0 top-0 w-2 h-4 bg-white rounded-full animate-pulse-slow"></div>
            </div>
          </div>
          
          <p className="text-sm text-gray-400">
            목표 투표율 {targetRate}% 까지 {(targetRate - overallRate).toFixed(1)}%p 남음
          </p>
        </div>
      </div>

      {/* 투표 현황 통계 */}
      <div className="space-y-4">
        <div className="bg-gray-800 rounded-lg p-6 border border-gray-700">
          <div className="flex items-center gap-3 mb-4">
            <div className="bg-blue-600 p-2 rounded-lg">
              <Users className="w-5 h-5 text-white" />
            </div>
            <h3 className="text-lg font-semibold text-white">총 유권자 수</h3>
          </div>
          <p className="text-2xl font-bold text-white">
            {totalVoters.toLocaleString()}명
          </p>
        </div>

        <div className="bg-gray-800 rounded-lg p-6 border border-gray-700">
          <div className="flex items-center gap-3 mb-4">
            <div className="bg-green-600 p-2 rounded-lg">
              <TrendingUp className="w-5 h-5 text-white" />
            </div>
            <h3 className="text-lg font-semibold text-white">투표 완료</h3>
          </div>
          <p className="text-2xl font-bold korean-blue">
            {totalVoted.toLocaleString()}명
          </p>
        </div>

        <div className="bg-gray-800 rounded-lg p-6 border border-gray-700">
          <div className="flex items-center gap-3 mb-4">
            <div className="bg-orange-600 p-2 rounded-lg">
              <Target className="w-5 h-5 text-white" />
            </div>
            <h3 className="text-lg font-semibold text-white">미투표</h3>
          </div>
          <p className="text-2xl font-bold text-gray-300">
            {remainingVoters.toLocaleString()}명
          </p>
        </div>
      </div>
    </div>
  )
} 