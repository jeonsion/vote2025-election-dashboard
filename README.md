# 제21대 대통령선거 실시간 투표율 대시보드

2022년 3월 9일 실시된 제21대 대통령선거의 실시간 투표율을 모니터링할 수 있는 웹 대시보드입니다.

![투표율 대시보드](./public/screenshot.png)

## 🚀 주요 기능

### 📊 실시간 투표율 모니터링
- 전국 실시간 투표율 현황
- 17개 시도별 세부 투표율 정보
- 시간대별 투표율 변화 그래프
- 5초마다 자동 업데이트

### 📱 반응형 디자인
- 모바일, 태블릿, 데스크톱 최적화
- 다크 테마 기본 적용
- 직관적인 사용자 인터페이스

### 🎨 한국적 디자인
- 대한민국 국정색상 활용 (빨간색, 파란색)
- 깔끔하고 현대적인 UI/UX
- 투표율 변화 애니메이션 효과

## 🛠️ 기술 스택

- **Frontend**: Next.js 15, React 18
- **Styling**: Tailwind CSS
- **Charts**: Recharts
- **Icons**: Lucide React
- **Date**: date-fns
- **Language**: JavaScript (TypeScript 미사용)

## 📁 프로젝트 구조

```
vote2025-dashboard/
├── app/
│   ├── components/
│   │   ├── Header.js              # 상단 헤더 (선거명, 시간, 전체 투표율)
│   │   ├── MainDashboard.js       # 메인 대시보드 (큰 투표율 표시)
│   │   ├── VotingRateCard.js      # 지역별 투표율 카드
│   │   ├── TimeChart.js           # 시간대별 투표율 차트
│   │   └── Footer.js              # 푸터 (출처 정보)
│   ├── data/
│   │   └── mockData.js            # 모의 데이터 및 시뮬레이션 로직
│   ├── globals.css                # 글로벌 스타일 및 CSS 변수
│   ├── layout.js                  # 루트 레이아웃
│   └── page.js                    # 메인 페이지
├── public/                        # 정적 파일
├── tailwind.config.mjs           # Tailwind CSS 설정
└── package.json                   # 프로젝트 의존성
```

## 🚀 설치 및 실행

### 필요 조건
- Node.js 18.0.0 이상
- npm 또는 yarn

### 설치 방법

1. **저장소 클론**
```bash
git clone [repository-url]
cd vote2025-dashboard
```

2. **의존성 설치**
```bash
npm install
```

3. **개발 서버 실행**
```bash
npm run dev
```

4. **브라우저에서 확인**
```
http://localhost:3000
```

### 빌드 및 배포

```bash
# 프로덕션 빌드
npm run build

# 빌드된 앱 실행
npm start
```

## 📊 데이터 구조

### 지역별 투표 데이터
```javascript
{
  name: '서울특별시',
  voters: 7734950,          // 총 유권자 수
  currentRate: 76.8,        // 현재 투표율
  previousRate: 76.5,       // 이전 투표율 (변화량 계산용)
  voted: 5940202,           // 투표 완료자 수
  code: 'seoul'             // 지역 코드
}
```

### 시간대별 투표율
```javascript
{
  time: 14,                 // 시간 (24시간 형식)
  rate: 56.2                // 해당 시간까지의 누적 투표율
}
```

## 🎯 주요 컴포넌트 설명

### Header.js
- 선거 정보 및 실시간 시간 표시
- 전국 투표율 실시간 업데이트
- 반응형 레이아웃 지원

### MainDashboard.js
- 메인 투표율 대형 표시
- 프로그레스 바 애니메이션
- 투표 현황 통계 (총 유권자, 투표 완료, 미투표)

### VotingRateCard.js
- 각 시도별 투표율 카드
- 투표율 변화 화살표 표시
- 호버 효과 및 트랜지션

### TimeChart.js
- Recharts를 이용한 시간대별 투표율 그래프
- 커스텀 툴팁 및 반응형 차트
- 다크 테마 최적화

## 🔧 설정 및 커스터마이징

### 색상 테마 변경
`app/globals.css`에서 CSS 변수를 수정하여 색상을 변경할 수 있습니다:

```css
:root {
  --korean-red: 0 72% 51%;
  --korean-blue: 220 91% 54%;
}
```

### 업데이트 간격 조정
`app/page.js`에서 데이터 업데이트 간격을 변경할 수 있습니다:

```javascript
// 5초마다 업데이트 (5000ms)
const interval = setInterval(() => {
  const newData = generateCurrentData()
  setData(newData)
}, 5000)
```

### 모의 데이터 수정
`app/data/mockData.js`에서 지역별 유권자 수, 투표율 등을 수정할 수 있습니다.

## 📱 반응형 브레이크포인트

- **모바일**: < 768px
- **태블릿**: 768px - 1024px
- **데스크톱**: > 1024px

각 디바이스에 최적화된 레이아웃을 제공합니다.

## 🌟 주요 특징

### 실시간 애니메이션
- 투표율 증가 애니메이션
- 프로그레스 바 스무스 트랜지션
- 로딩 스피너 및 펄스 효과

### 데이터 시각화
- 시간대별 투표율 라인 차트
- 지역별 투표율 프로그레스 바
- 실시간 업데이트 인디케이터

### 사용자 경험
- 직관적인 정보 배치
- 명확한 데이터 표시
- 접근성 고려 설계

## 🔮 향후 개선 사항

- [ ] 실제 선거 데이터 API 연동
- [ ] 지도 기반 시각화 추가
- [ ] 더 상세한 통계 정보
- [ ] 투표소별 세부 현황
- [ ] PWA 지원
- [ ] 다국어 지원

## 📄 라이선스

MIT License

## 🤝 기여하기

1. Fork the Project
2. Create your Feature Branch (`git checkout -b feature/AmazingFeature`)
3. Commit your Changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the Branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📞 문의

프로젝트에 대한 문의사항이나 버그 리포트는 Issues를 통해 알려주세요.

---

**⚠️ 주의사항**: 본 프로젝트는 교육 및 데모 목적으로 제작되었으며, 실제 선거 데이터가 아닌 모의 데이터를 사용합니다.
