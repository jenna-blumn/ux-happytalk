# 컴포넌트 구조 가이드

채팅 상담 시스템의 컴포넌트 구조를 정의한 문서입니다.

## 전체 구조

```
App.tsx
├── LeftSidebar (왼쪽 네비게이션)
├── Container
    ├── Header (상단 헤더)
    └── Body
        ├── ChatListPanel (채팅 목록 패널)
        │   ├── StatusArea (상태 영역)
        │   └── ChatList (채팅 목록)
        ├── ChatDetail (채팅 상세)
        │   ├── ChatHeader
        │   │   ├── ChatFavoriteTabs
        │   │   ├── ChatInformation
        │   │   └── ChatMemo
        │   ├── ChatMessages (메시지 영역)
        │   └── ChatInput
        │       ├── ChatInputForm
        │       └── ChatToolBar
        └── CustomerInfo (고객 정보 패널)
            ├── Section 1: 정보 패널
            │   ├── InfoTabs (탭 네비게이션)
            │   └── InfoContainer
            │       ├── InfoField (정보 필드)
            │       ├── InfoFieldGrid (필드 그리드)
            │       └── TagSection (태그 섹션)
            └── Section 2: 템플릿 섹션
                ├── Padding Container (p-[10px])
                └── White Container (bg-white, rounded-[8px])
                    ├── TemplateTab (템플릿 탭)
                    ├── TemplateFilter
                    │   ├── CategoryTags (카테고리)
                    │   ├── Divider (Line 2)
                    │   └── FilterOptions (정렬 + 검색 + 버튼)
                    └── TemplateList
                        ├── TemplateItem × N
                        └── Pagination (BottomPaging)
```

## 파일별 역할

### 메인 컴포넌트

- **`/App.tsx`** - 메인 레이아웃 컨테이너
- **`/components/LeftSidebar.tsx`** - 왼쪽 네비게이션 바
- **`/components/Header.tsx`** - 상단 헤더
- **`/components/ChatListPanel.tsx`** - 채팅 목록 패널 래퍼

### 채팅 목록 영역

- **`/components/StatusArea.tsx`** - 상담 현황 표시 영역
- **`/components/ChatList.tsx`** - 채팅 목록

### 채팅 상세 영역

- **`/components/ChatDetail.tsx`** - 채팅 상세 메인 컨테이너
- **`/components/ChatHeader.tsx`** - 채팅 헤더 래퍼
  - **`/components/ChatFavoriteTabs.tsx`** - 즐겨찾기 탭
  - **`/components/ChatInformation.tsx`** - 채팅 정보
  - **`/components/ChatMemo.tsx`** - 메모 영역
- **`/components/ChatInput.tsx`** - 입력 영역 래퍼
  - **`/components/ChatInputForm.tsx`** - 입력 폼
  - **`/components/ChatToolBar.tsx`** - 툴바

### 고객 정보 패널 (CustomerInfo)

#### Section 1: 정보 패널
- **`/components/CustomerInfo.tsx`** - 고객 정보 메인 컨테이너
- **`/components/InfoTab.tsx`** - 정보 컨테이너 선택 탭
  - `InfoTab` - 개별 탭 컴포넌트
  - `InfoTabs` - 탭 그룹 컴포넌트
- **`/components/InfoContainer.tsx`** - 정보 컨테이너
- **`/components/InfoField.tsx`** - 정보 필드 컴포넌트
  - `InfoField` - 단일 필드 (label-value 쌍)
  - `InfoFieldGrid` - 그리드 레이아웃 필드
- **`/components/TagBadge.tsx`** - 태그 관련 컴포넌트
  - `TagBadge` - 개별 태그
  - `TagList` - 태그 목록
  - `TagSection` - 태그 섹션 (제목 + 목록)

#### Section 2: 템플릿 섹션
- **`/components/TemplateSection.tsx`** - 템플릿 섹션 메인 컨테이너
- **`/components/TemplateTab.tsx`** - 2뎁스 탭 (즐겨찾기, 상담템플릿 등)
- **`/components/TemplateFilter.tsx`** - 템플릿 필터 (카테고리 태그)
- **`/components/FilterOptions.tsx`** - 필터 옵션 (정렬 + 검색 + 액션 버튼)
  - Sorting - 정렬 버튼
  - Search - 3개 드롭다운 (전체, 키워드, 검색어)
  - ActionButtons - 삭제, 등록 버튼
- **`/components/TemplateList.tsx`** - 템플릿 목록
  - `TemplateItem` - 개별 템플릿 항목
  - `FavoriteIcon` - 즐겨찾기 아이콘
  - `TemplateBadge` - 템플릿 뱃지 (공유/개인)
  - `Pagination` - 페이지네이션

### 타입 정의

- **`/types/index.ts`** - 공통 타입 정의

## 컴포넌트 계층 상세

### CustomerInfo 구조 상세

```tsx
<CustomerInfo>  // 메인 컨테이너 (aside)
  │
  ├─ <Section 1: 정보 패널>
  │   ├─ <InfoTabs>  // 탭 네비게이션
  │   │   └─ <InfoTab> × 6  // 개별 탭
  │   │       - 상담방 정보 (active)
  │   │       - 고객정보
  │   │       - 태스크
  │   │       - 상담이력
  │   │       - 파일첨부
  │   │       - 메모
  │   │
  │   └─ <InfoContainer>  // 정보 컨텐츠
  │       ├─ <InfoField label="제목" fullWidth />
  │       ├─ <InfoField label="분류" fullWidth />
  │       ├─ <InfoField label="방번호" />
  │       ├─ <InfoFieldGrid>  // 3열 그리드
  │       │   ├─ <InfoField label="채널" />
  │       │   ├─ <InfoField label="상담사" />
  │       │   └─ <InfoField label="상담이력" />
  │       ├─ <Divider />
  │       └─ <TagSection title="상담방 태그">
  │           └─ <TagList>
  │               └─ <TagBadge> × 10  // 태그들
  │
  └─ <Section 2: 템플릿 섹션>
      └─ <TemplateSection>
          ├─ <Padding Container (p-[10px])>  // 외부 패딩
          │   └─ <White Container (bg-white, rounded-[8px])>  // 흰색 배경
          │       │
          │       ├─ <TemplateTab>  // 2뎁스 탭
          │       │   ├─ 즐겨찾기
          │       │   ├─ 상담템플릿 (active)
          │       │   ├─ 템플릿 단축키
          │       │   └─ 자동완성
          │       │
          │       ├─ <TemplateFilter>  // 필터 및 검색
          │       │   ├─ <CategoryTag> × N  // 카테고리 태그들
          │       │   ├─ <Divider (Line 2) />  // 구분선
          │       │   └─ <FilterOptions>
          │       │       ├─ <Sorting />  // 최신순
          │       │       ├─ <Search>  // 3개 드롭다운 + 검색 입력
          │       │       └─ <ActionButtons />  // 삭제, 등록
          │       │
          │       └─ <TemplateList>  // 템플릿 목록
          │           ├─ <TemplateItem> × 10
          │           │   ├─ <TemplateBadge />  // 공유/개인
          │           │   ├─ 텍스트
          │           │   └─ <FavoriteIcon />  // 즐겨찾기
          │           └─ <Pagination>  // Figma BottomPaging
          │               ├─ FirstPage (≪)
          │               ├─ PrevPage (<)
          │               ├─ PageNumber (1, 2, ...)
          │               ├─ NextPage (>)
          │               └─ LastPage (≫)
```

## 데이터 흐름

### CustomerInfo Props 구조

```typescript
// InfoTabs
interface InfoTabsProps {
  tabs: string[];
  activeIndex?: number;
  onTabChange?: (index: number) => void;
}

// InfoContainer
interface InfoContainerData {
  title: string;
  category: string;
  gridFields: Array<{
    id: string;
    label: string;
    value: string;
  }>;
  tags: Array<{
    id: string;
    label: string;
  }>;
}

// TemplateSection
interface TemplateSectionProps {
  tabs: string[];
  activeTab?: number;
  categories: Array<{ id: string; label: string; }>;
  activeCategory?: number;
  templates: Array<{
    id: string;
    badge?: { label: string; color: string; };
    text: string;
    isFavorite?: boolean;
  }>;
  onTabChange?: (index: number) => void;
  onCategoryChange?: (index: number) => void;
  onFavoriteToggle?: (id: string) => void;
}
```

## 디자인 원칙

### 색상
- **Primary Blue**: `#306afe` (메시지 버블, 버튼)
- **Warning Orange**: `#f9643a` (상담 종료 버튼)
- **Memo Yellow**: `#ffe79a` (고정 메모 배경)
- **Background**: `#f2f4f7` (입력 영역 배경)
- **Border**: `zinc-400`, `zinc-200`, `rgba(60,60,67,0.08)`

### 폰트
- **Spoqa Han Sans Neo**: 한글 텍스트
- **Pretendard**: 일반 텍스트, 버튼
- **Noto Sans KR**: 특정 텍스트

### 스타일 특징
- 둥근 모서리: `rounded-[4px]`, `rounded-[8px]`, `rounded-[100px]`
- 그림자: `shadow-sm`, `shadow-[0px_1px_2px_0px_rgba(0,0,0,0.05)]`
- 테두리 구분: `border-zinc-400`, `border-zinc-200`

---

## 🔧 주요 기술 스택

- **React**: 컴포넌트 기반 UI
- **TypeScript**: 타입 안정성
- **Tailwind CSS**: 유틸리티 우선 스타일링
- **SVG Icons**: Figma에서 import한 벡터 아이콘

---

## 📝 파일 명명 규칙

- **메인 컴포넌트**: PascalCase (예: `ChatHeader.tsx`)
- **내보내기**: Named export (예: `export function ChatHeader()`)
- **SVG 임포트**: `/imports/svg-*.ts` 형식
- **이미지**: `figma:asset/...` 경로

---

## 🚀 확장 가능성

현재 구조는 다음과 같은 확장이 용이합니다:

1. **상태 관리 추가**: ChatList, ChatDetail 간 상태 공유
2. **실시간 업데이트**: WebSocket 연동
3. **추가 기능**: 
   - AI 어시스트 기능 구현
   - 템플릿 관리
   - 파일 업로드
   - 이모지 선택기
4. **테마 시스템**: 다크모드, 커스텀 테마

---

## 📌 특이사항

### 스크롤 영역
- **ChatList**: `h-screen` - 브라우저 높이에 맞춰 확장, 스크롤 가능
- **ChatMessages**: `flex-1` - 남은 공간 차지, 스크롤 가능

### 테두리 구분
- **StatusArea**: 오른쪽 테두리로 ChatList와 구분
- **ChatList**: 오른쪽 테두리로 ChatDetail과 구분

### Figma Import
- 모든 SVG 경로는 `/imports/svg-*.ts` 파일에서 관리
- 구조와 스타일은 Figma import 코드 유지
- 필요시에만 수정 (사용자 요청 또는 인터랙티비티 추가)

---

## 🔄 업데이트 히스토리

### Phase 1: 기본 레이아웃
- App.tsx 구조 설정
- LeftSidebar, Header 구현

### Phase 2: 채팅 목록
- ChatListPanel 구조화
- StatusArea: 상태 필터 (테두리 추가)
- ChatList: 20개 아이템, 스크롤 (테두리 추가)

### Phase 3: 채팅 헤더
- ChatHeader 3개 컴포넌트로 분리:
  - ChatFavoriteTabs: 즐겨찾기 탭
  - ChatInformation: 상담 정보
  - ChatMemo: 고정 메모

### Phase 4: 채팅 입력
- ChatInput 3개 컴포넌트로 분리:
  - ChatInputForm: AI 기능 + 입력 영역
  - ChatToolBar: 상담 기능 툴바

### Phase 5: CustomerInfo 리팩토링 (2025-11-11)
- **FilterOptions 컴포넌트 분리**:
  - TemplateFilter에서 필터 옵션 영역을 별도 컴포넌트로 추출
  - Sorting + Search + ActionButtons 통합 관리
  - Figma의 Options.tsx 디자인 반영
  
- **TemplateSection 구조 개선**:
  - Container에 padding 10px 추가
  - 내부에 bg-white, rounded-[8px] 컨테이너 추가
  - Figma PanelSection템플릿.tsx 구조 완벽 반영
  
- **TemplateFilter 계층 구조 정리**:
  - CategoryTags → Divider (Line 2) → FilterOptions 순서로 재배치
  - 카테고리와 필터 옵션 사이 시각적 구분선 추가
  - 리스트 우선순위 명확화 (카테고리 > 옵션)
  
- **Pagination 완전 재구성**:
  - Figma BottomPaging 디자인에 맞춰 재작성
  - 6개 버튼: FirstPage, PrevPage, PageNumber×2, NextPage, LastPage
  - SVG 아이콘 추가 (svg-popayb2ses.ts)
  - 180도 회전, 비활성 상태, aria-label 등 접근성 개선
  
- **문서 업데이트**:
  - CUSTOMERINFO_REFACTORING.md: 모든 컴포넌트 상세 설명 업데이트
  - COMPONENT_STRUCTURE.md: 최신 구조 반영

---

## 💡 개발 팁

### 컴포넌트 수정 시
1. 독립적인 컴포넌트이므로 개별 수정 가능
2. 부모 컴포넌트는 단순히 import하여 사용
3. 스타일 변경 시 Figma import 구조 유지

### 새 기능 추가 시
1. 관련 컴포넌트 파일에서 수정
2. 복잡한 경우 새 컴포넌트로 분리
3. 부모 컴포넌트에서 import

### 디버깅
- 각 컴포넌트는 독립적으로 테스트 가능
- `data-name` 속성으로 Figma 원본 요소 추적 가능

---

**마지막 업데이트**: 2025-11-10
**버전**: 1.0.0