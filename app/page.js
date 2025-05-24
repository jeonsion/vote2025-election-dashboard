'use client'

import { useState, useEffect } from 'react'
import Header from './components/Header'
import MainDashboard from './components/MainDashboard'
import VotingRateCard from './components/VotingRateCard'
import TimeChart from './components/TimeChart'
import Footer from './components/Footer'
import { generateCurrentData } from './data/mockData'

export default function Home() {
  const [data, setData] = useState(null)
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    // 초기 데이터 로드
    const initialData = generateCurrentData()
    setData(initialData)
    setIsLoading(false)

    // 5초마다 데이터 업데이트 (실제 상황에서는 더 긴 간격 사용)
    const interval = setInterval(() => {
      const newData = generateCurrentData()
      setData(newData)
    }, 5000)

    return () => clearInterval(interval)
  }, [])

  if (isLoading || !data) {
    return (
      <div className="min-h-screen bg-gray-900 flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-korean-blue mx-auto mb-4"></div>
          <p className="text-white text-lg">투표율 데이터 로딩 중...</p>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-gray-900">
      <Header overallRate={data.overallRate} />
      
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* 메인 대시보드 */}
        <MainDashboard 
          overallRate={data.overallRate}
          totalVoters={data.totalVoters}
          totalVoted={data.totalVoted}
        />

        {/* 시간대별 투표율 차트 */}
        <div className="mb-8">
          <TimeChart data={data.timeData} />
        </div>

        {/* 지역별 투표율 현황 */}
        <div className="mb-8">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-2xl font-bold text-white">시도별 투표율 현황</h2>
            <div className="flex items-center gap-2 text-sm text-gray-400">
              <div className="w-3 h-3 bg-korean-blue rounded-full animate-pulse"></div>
              <span>실시간 업데이트 중</span>
            </div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
            {data.regions.map((region) => (
              <VotingRateCard
                key={region.code}
                region={region.name}
                currentRate={region.currentRate}
                previousRate={region.previousRate}
                voters={region.voters}
                voted={region.voted}
              />
            ))}
          </div>
        </div>

        {/* 투표 참여 안내 */}
        <div className="bg-gradient-to-r from-korean-red to-red-600 rounded-lg p-6 mb-8 text-center">
          <h3 className="text-xl font-bold text-white mb-2">
            아직 투표하지 않으셨나요?
          </h3>
          <p className="text-red-100 mb-4">
            투표 시간: 오전 6시 ~ 오후 6시까지
          </p>
          <div className="text-sm text-red-100">
            <p>투표는 국민의 소중한 권리이자 의무입니다.</p>
            <p>여러분의 한 표가 대한민국의 미래를 결정합니다.</p>
          </div>
        </div>

        {/* 통계 요약 */}
        <div className="bg-gray-800 rounded-lg p-6 border border-gray-700">
          <h3 className="text-xl font-bold text-white mb-4">실시간 투표 현황 요약</h3>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4 text-center">
            <div>
              <p className="text-2xl font-bold korean-blue">17</p>
              <p className="text-sm text-gray-400">시도</p>
            </div>
            <div>
              <p className="text-2xl font-bold korean-blue">
                {data.totalVoters.toLocaleString()}
              </p>
              <p className="text-sm text-gray-400">총 유권자</p>
            </div>
            <div>
              <p className="text-2xl font-bold korean-blue">
                {data.totalVoted.toLocaleString()}
              </p>
              <p className="text-sm text-gray-400">투표 완료</p>
            </div>
            <div>
              <p className="text-2xl font-bold korean-blue">
                {data.overallRate.toFixed(1)}%
              </p>
              <p className="text-sm text-gray-400">전국 투표율</p>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  )
}
