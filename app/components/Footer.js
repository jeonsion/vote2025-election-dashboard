'use client'

import { Shield, ExternalLink } from 'lucide-react'

export default function Footer() {
  return (
    <footer className="bg-gray-800 border-t border-gray-700 mt-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="flex items-center gap-3">
            <div className="bg-gray-700 p-2 rounded-lg">
              <Shield className="w-5 h-5 text-gray-300" />
            </div>
            <div>
              <h3 className="text-sm font-semibold text-white">중앙선거관리위원회</h3>
              <p className="text-xs text-gray-400">공식 투표율 현황</p>
            </div>
          </div>
          
          <div className="flex flex-col md:flex-row items-center gap-4 text-sm text-gray-400">
            <div className="flex items-center gap-1">
              <span>데이터 출처:</span>
              <a 
                href="https://www.nec.go.kr" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-korean-blue hover:text-blue-300 flex items-center gap-1 transition-colors"
              >
                중앙선거관리위원회
                <ExternalLink className="w-3 h-3" />
              </a>
            </div>
            
            <div className="text-xs">
              <span>업데이트: 5분마다 자동 갱신</span>
            </div>
          </div>
        </div>
        
        <div className="mt-4 pt-4 border-t border-gray-700 text-center">
          <p className="text-xs text-gray-500">
            본 사이트의 투표율 정보는 실시간으로 제공되며, 최종 개표 결과와 다를 수 있습니다.
          </p>
        </div>
      </div>
    </footer>
  )
} 