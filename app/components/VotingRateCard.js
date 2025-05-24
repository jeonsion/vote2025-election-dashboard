'use client'

import { TrendingUp, TrendingDown } from 'lucide-react'

export default function VotingRateCard({ region, currentRate, previousRate, voters, voted }) {
  const trend = currentRate > previousRate ? 'up' : 'down'
  const trendColor = trend === 'up' ? 'text-green-400' : 'text-red-400'
  const TrendIcon = trend === 'up' ? TrendingUp : TrendingDown

  return (
    <div className="bg-gray-800 rounded-lg p-4 border border-gray-700 hover:border-gray-600 transition-all duration-300 hover:shadow-lg">
      <div className="flex justify-between items-start mb-2">
        <h3 className="text-lg font-semibold text-white">{region}</h3>
        <div className={`flex items-center gap-1 ${trendColor}`}>
          <TrendIcon className="w-4 h-4" />
          <span className="text-sm font-medium">
            {Math.abs(currentRate - previousRate).toFixed(1)}%
          </span>
        </div>
      </div>
      
      <div className="mb-3">
        <div className="flex items-end gap-1 mb-1">
          <span className="text-3xl font-bold korean-blue">{currentRate.toFixed(1)}</span>
          <span className="text-lg text-gray-400 mb-1">%</span>
        </div>
        
        <div className="w-full bg-gray-700 rounded-full h-2">
          <div 
            className="bg-korean-blue h-2 rounded-full transition-all duration-1000 ease-out"
            style={{ width: `${Math.min(currentRate, 100)}%` }}
          ></div>
        </div>
      </div>
      
      <div className="text-sm text-gray-400">
        <div className="flex justify-between">
          <span>투표자 수:</span>
          <span className="font-medium text-white">{voted.toLocaleString()}명</span>
        </div>
        <div className="flex justify-between">
          <span>유권자 수:</span>
          <span className="font-medium text-white">{voters.toLocaleString()}명</span>
        </div>
      </div>
    </div>
  )
} 