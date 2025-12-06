# 🦡 Hufflepuff Todo List - Frontend

> "Hard work and dedication" - 후플푸프 테마의 감성적인 할 일 관리 앱

![Next.js](https://img.shields.io/badge/Next.js-16-black?logo=next.js)
![React](https://img.shields.io/badge/React-19-61DAFB?logo=react)
![Tailwind CSS](https://img.shields.io/badge/Tailwind-3.4-38B2AC?logo=tailwindcss)

## 🌐 배포 URL

- **Frontend**: [Vercel 배포 URL]
- **Backend API**: https://todolist-back-fohi.onrender.com

## ✨ 주요 기능

| 기능 | 설명 |
|------|------|
| 📅 **주간 캘린더** | 날짜별 할 일 관리 및 시각화 |
| ✅ **할 일 관리** | 추가, 수정, 삭제, 완료 처리 |
| 📋 **서브태스크** | 할 일 하위에 세부 작업 추가 |
| 🔀 **드래그 앤 드롭** | 직관적인 순서 변경 |
| 📊 **진행률 표시** | 전체/일별 완료율 시각화 |
| 🔍 **필터링** | 전체/진행중/완료 필터 |
| 🌓 **다크 모드** | 눈이 편안한 다크 테마 |
| 🎨 **후플푸프 테마** | 따뜻한 골드 & 블랙 컬러 |

## 🛠️ 기술 스택

- **Framework**: Next.js 16 (Pages Router)
- **UI Library**: React 19
- **Styling**: Tailwind CSS 3.4
- **Icons**: Lucide React
- **Date Handling**: Day.js
- **Drag & Drop**: @dnd-kit/core, @dnd-kit/sortable
- **HTTP Client**: Axios

## 📁 프로젝트 구조

```
front/
├── components/
│   ├── Calendar/
│   │   ├── CalendarDay.jsx      # 캘린더 날짜 셀
│   │   ├── MonthlyCalendar.jsx  # 월간 캘린더
│   │   └── WeeklyCalendar.jsx   # 주간 캘린더
│   ├── Filter/
│   │   └── FilterButtons.jsx    # 필터 버튼 그룹
│   ├── Layout/
│   │   ├── DarkModeToggle.jsx   # 다크모드 토글
│   │   └── Header.jsx           # 헤더
│   ├── Progress/
│   │   └── ProgressBar.jsx      # 진행률 바
│   └── Todo/
│       ├── SubtaskList.jsx      # 서브태스크 목록
│       ├── TodoForm.jsx         # 할 일 입력 폼
│       ├── TodoItem.jsx         # 할 일 아이템
│       └── TodoList.jsx         # 할 일 목록
├── hooks/
│   ├── index.js                 # 훅 export
│   ├── useFilter.js             # 필터링 로직
│   ├── useProgress.js           # 진행률 계산
│   └── useTodos.js              # Todo CRUD 로직
├── pages/
│   ├── api/
│   │   └── proxy/[...path].js   # API 프록시
│   ├── _app.js
│   ├── _document.js
│   └── index.js                 # 메인 페이지
├── styles/
│   └── globals.css              # 전역 스타일
└── utils/
    ├── api.js                   # Axios 인스턴스
    └── holidays.js              # 공휴일 데이터
```

## 🚀 시작하기

### 사전 요구사항

- Node.js 18.x 이상
- npm 또는 yarn

### 설치 및 실행

```bash
# 의존성 설치
npm install

# 개발 서버 실행
npm run dev

# 프로덕션 빌드
npm run build

# 프로덕션 서버 실행
npm run start
```

### 환경 변수 설정 (선택)

`.env.local` 파일 생성:

```env
# 백엔드 API URL (기본값: https://todolist-back-fohi.onrender.com)
NEXT_PUBLIC_API_URL=http://localhost:5000
```

## 🎨 커스텀 테마

### 후플푸프 컬러 팔레트

```css
/* Light Mode */
--hufflepuff-gold: #FFC107      /* 메인 골드 */
--hufflepuff-yellow: #FFEB3B    /* 밝은 옐로우 */
--hufflepuff-black: #1A1A1A     /* 블랙 */
--hufflepuff-light: #FFF8E1     /* 배경 크림 */

/* Dark Mode */
--badger-brown: #2D2D2D         /* 다크 배경 */
--badger-cream: #E8E0D0         /* 크림 텍스트 */
```

### 커스텀 CSS 클래스

```css
.hufflepuff-card   /* 카드 스타일 */
.hufflepuff-btn    /* 버튼 스타일 */
.badger-badge      /* 뱃지 스타일 */
```

## 📜 스크립트

| 명령어 | 설명 |
|--------|------|
| `npm run dev` | 개발 서버 실행 (http://localhost:3000) |
| `npm run build` | 프로덕션 빌드 |
| `npm run start` | 프로덕션 서버 실행 |
| `npm run lint` | ESLint 실행 |

## 🔗 관련 저장소

- **Backend**: [TodoList_back](https://github.com/ShinYeoJin/TodoList_back)

## 📄 라이선스

MIT License

---

<div align="center">
  <p>🦡 Made with ❤️ and hard work</p>
  <p><i>"Those patient Hufflepuffs are true and unafraid of toil"</i></p>
</div>
