import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: '제21대 대통령선거 실시간 투표율 | 2022.03.09',
  description: '제21대 대통령선거 실시간 투표율 현황을 확인하세요. 전국 17개 시도별 투표율과 시간대별 투표 현황을 실시간으로 제공합니다.',
  keywords: '대통령선거, 투표율, 실시간, 2022, 중앙선거관리위원회',
}

export default function RootLayout({ children }) {
  return (
    <html lang="ko" className="dark">
      <body className={`${inter.className} min-h-screen bg-gray-900 text-white`}>
        {children}
      </body>
    </html>
  )
}
