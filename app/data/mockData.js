// 실제 2022년 제21대 대통령선거 데이터를 기반으로 한 모의 데이터
export const regions = [
  { 
    name: '서울특별시', 
    voters: 7734950, 
    baseRate: 76.8,
    code: 'seoul'
  },
  { 
    name: '부산광역시', 
    voters: 2762140, 
    baseRate: 77.9,
    code: 'busan'
  },
  { 
    name: '대구광역시', 
    voters: 1957013, 
    baseRate: 78.4,
    code: 'daegu'
  },
  { 
    name: '인천광역시', 
    voters: 2376345, 
    baseRate: 77.2,
    code: 'incheon'
  },
  { 
    name: '광주광역시', 
    voters: 1174234, 
    baseRate: 79.1,
    code: 'gwangju'
  },
  { 
    name: '대전광역시', 
    voters: 1206234, 
    baseRate: 78.5,
    code: 'daejeon'
  },
  { 
    name: '울산광역시', 
    voters: 924567, 
    baseRate: 77.3,
    code: 'ulsan'
  },
  { 
    name: '세종특별자치시', 
    voters: 298765, 
    baseRate: 80.2,
    code: 'sejong'
  },
  { 
    name: '경기도', 
    voters: 10234567, 
    baseRate: 76.5,
    code: 'gyeonggi'
  },
  { 
    name: '강원특별자치도', 
    voters: 1234567, 
    baseRate: 79.8,
    code: 'gangwon'
  },
  { 
    name: '충청북도', 
    voters: 1287654, 
    baseRate: 78.9,
    code: 'chungbuk'
  },
  { 
    name: '충청남도', 
    voters: 1734567, 
    baseRate: 79.5,
    code: 'chungnam'
  },
  { 
    name: '전북특별자치도', 
    voters: 1456789, 
    baseRate: 80.1,
    code: 'jeonbuk'
  },
  { 
    name: '전라남도', 
    voters: 1534567, 
    baseRate: 81.2,
    code: 'jeonnam'
  },
  { 
    name: '경상북도', 
    voters: 2145678, 
    baseRate: 78.7,
    code: 'gyeongbuk'
  },
  { 
    name: '경상남도', 
    voters: 2734567, 
    baseRate: 77.8,
    code: 'gyeongnam'
  },
  { 
    name: '제주특별자치도', 
    voters: 487654, 
    baseRate: 78.1,
    code: 'jeju'
  }
]

// 시간대별 투표율 진행 패턴 (실제 선거 패턴 기반)
export const timeProgression = [
  { time: 6, rate: 0.0 },
  { time: 7, rate: 2.5 },
  { time: 8, rate: 8.1 },
  { time: 9, rate: 15.4 },
  { time: 10, rate: 23.8 },
  { time: 11, rate: 32.1 },
  { time: 12, rate: 40.7 },
  { time: 13, rate: 48.9 },
  { time: 14, rate: 56.2 },
  { time: 15, rate: 62.8 },
  { time: 16, rate: 68.5 },
  { time: 17, rate: 73.2 },
  { time: 18, rate: 77.1 }
]

// 전체 유권자 수 (실제 2022년 대선 기준)
export const totalVotersCount = 44197692

// 현재 시뮬레이션을 위한 시간 진행
export function getCurrentTimeBasedRate() {
  const now = new Date()
  const hour = now.getHours()
  const minute = now.getMinutes()
  
  // 오전 6시 이전이면 0%
  if (hour < 6) return 0
  
  // 오후 6시 이후면 최종 투표율
  if (hour >= 18) return 77.1
  
  // 현재 시간대의 기본 투표율
  const currentHourData = timeProgression.find(t => t.time === hour)
  const nextHourData = timeProgression.find(t => t.time === hour + 1)
  
  if (!currentHourData) return 0
  if (!nextHourData) return currentHourData.rate
  
  // 분 단위로 보간
  const minuteProgress = minute / 60
  const rateDiff = nextHourData.rate - currentHourData.rate
  
  return currentHourData.rate + (rateDiff * minuteProgress)
}

// 지역별 투표율 변화량 계산
export function getRegionVariation() {
  // 각 지역마다 약간의 무작위 변화 (±0.5% 범위)
  return (Math.random() - 0.5) * 1.0
}

// 실시간 데이터 시뮬레이션
export function generateCurrentData() {
  const baseRate = getCurrentTimeBasedRate()
  const totalVoted = Math.floor((totalVotersCount * baseRate) / 100)
  
  const regionsData = regions.map(region => {
    const variation = getRegionVariation()
    const currentRate = Math.max(0, Math.min(100, baseRate + variation))
    const voted = Math.floor((region.voters * currentRate) / 100)
    const previousRate = Math.max(0, currentRate - (Math.random() * 0.3 + 0.1))
    
    return {
      ...region,
      currentRate,
      previousRate,
      voted
    }
  })
  
  return {
    overallRate: baseRate,
    totalVoters: totalVotersCount,
    totalVoted,
    regions: regionsData,
    timeData: timeProgression.slice(0, Math.max(1, Math.min(13, new Date().getHours() - 5)))
  }
} 