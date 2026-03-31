# CustomerInfo 리팩토링 가이드

## 📋 개요

CustomerInfo 컴포넌트를 Figma 디자인에 맞춰 재구성했습니다.
기존의 단순한 고객 정보 표시에서 **2개의 주요 섹션**(정보 패널 + 템플릿 섹션)으로 확장되었습니다.

---

## 🏗️ 새로운 구조

### Container (세로 스택)
```
CustomerInfo (aside)
├── Section 1: 정보 패널
│   ├── InfoTabs (6개 탭)
│   └── InfoContainer (정보 표시)
└── Section 2: 템플릿 섹션
    ├── Padding Container (p-[10px])
    └── White Container (bg-white, rounded-[8px])
        ├── TemplateTab (4개 탭)
        ├── TemplateFilter (카테고리 + 구분선 + 필터)
        └── TemplateList (템플릿 목록 + 페이지네이션)
```

---

## 📁 생성된 새 파일

### Section 1: 정보 패널

#### `/components/InfoTab.tsx`
정보 컨테이너를 선택하는 탭 네비게이션
```tsx
<InfoTabs tabs={["상담방 정보", "고객정보", "태스크", ...]} activeIndex={0} />
```

**주요 기능:**
- 6개 탭: 상담방 정보, 고객정보, 태스크, 상담이력, 파일첨부, 메모
- Active/Inactive 상태 스타일
- 접근성: `role="tab"`, `aria-selected`
- Hover 효과

#### `/components/InfoField.tsx`
라벨-값 쌍을 표시하는 정보 필드
```tsx
<InfoField label="채널" value="해피톡" />
<InfoFieldGrid fields={[...]} />  // 3열 그리드
```

**주요 기능:**
- 단일 필드 (fullWidth 옵션)
- 그리드 필드 (3열 레이아웃)
- 반응형 레이아웃

#### `/components/TagBadge.tsx`
태그 표시 컴포넌트
```tsx
<TagSection title="상담방 태그" tags={[...]} />
```

**주요 기능:**
- 개별 태그 배지
- 태그 리스트 (flex-wrap)
- 태그 섹션 (제목 + 리스트)

#### `/components/InfoContainer.tsx`
정보를 담는 컨테이너
```tsx
<InfoContainer data={{ title, category, gridFields, tags }} />
```

**주요 구성:**
- 제목 필드
- 분류 필드
- 방번호 필드
- 3열 그리드 (채널, 상담사, 상담이력)
- 구분선 (Divider)
- 태그 섹션

---

### Section 2: 템플릿 섹션

#### `/components/TemplateTab.tsx`
2뎁스 템플릿 탭
```tsx
<TemplateTab tabs={["즐겨찾기", "상담템플릿", ...]} activeIndex={1} />
```

**주요 기능:**
- 4개 탭: 즐겨찾기, 상담템플릿, 템플릿 단축키, 자동완성
- 하단 Border 강조 (active)
- 접근성: `role="tablist"`, `role="tab"`

#### `/components/TemplateFilter.tsx`
리스트 뷰 필터 및 검색 옵션
```tsx
<TemplateFilter 
  categories={[...]} 
  activeCategory={0}
  onCategoryChange={...}
/>
```

**구조:**
1. **카테고리 태그**: 전체(45), 일반상담(22), 민원(1), ...
2. **Divider (Line 2)**: 카테고리와 필터 옵션 구분선
3. **FilterOptions**: 정렬, 검색, 액션 버튼

**주요 기능:**
- Active/Inactive 카테고리 태그
- 카테고리별 필터링
- 시각적 계층 구조 (카테고리 → 구분선 → 옵션)

#### `/components/FilterOptions.tsx`
필터 옵션 (정렬 + 색 + 액션 버튼)
```tsx
<FilterOptions 
  onSort={...}
  onDelete={...}
  onRegister={...}
/>
```

**주요 구성:**
- **Sorting**: 최신순 정렬 버튼
- **Search**: 3개 드롭다운 (전체, 키워드, 검색어 입력)
- **ActionButtons**: 삭제, 등록 버튼

**주요 기능:**
- Active/Inactive 카테고리 태그
- Hover 효과
- 검색 아이콘 버튼
- Aria 라벨
- 인라인 검색 입력

#### `/components/TemplateList.tsx`
템플릿 목록 및 항목
```tsx
<TemplateList 
  templates={[...]}
  onFavoriteToggle={(id) => ...}
/>
```

**주요 구성:**
- **TemplateItem**: 개별 템플릿 항목
  - Badge (공유/개인)
  - 텍스트
  - 즐겨찾기 아이콘
- **Pagination**: 페이지 네비게이션 (Figma BottomPaging)
  - FirstPage/PrevPage 버튼 (180도 회전, 비활성)
  - 페이지 번호 버튼 (1: 파란색 활성, 2: 회색)
  - NextPage/LastPage 버튼 (활성)
  - Chevron 아이콘 (svg-popayb2ses.ts)

**주요 기능:**
- 즐겨찾기 토글 (별 아이콘)
- Hover 효과 (배경색 변경)
- 뱃지 색상 구분:
  - 공유: 빨간색 배경 (`#ff4713`)
  - 개인: 회색 배경
- 페이지네이션:
  - 현재 페이지 강조 (`bg-[#5988fe]`)
  - Disabled 상태 (opacity-25)
  - Aria 라벨 (접근성)

#### `/components/TemplateSection.tsx`
템플릿 섹션 메인 컨테이너
```tsx
<TemplateSection 
  tabs={...}
  categories={...}
  templates={...}
  onTabChange={...}
  onCategoryChange={...}
  onFavoriteToggle={...}
/>
```

**역할:**
- 템플릿 탭, 필터, 리스트를 통합
- Props 전달 및 이벤트 핸들링

---

## 🔄 기존 파일 변경

### `/components/CustomerInfo.tsx`

#### Before
```tsx
// 단순한 고객 정보 표시
export function CustomerInfo() {
  return (
    <div>
      <CustomerBasicInfo />
      <CustomerOrderInfo />
      <ConsultHistory />
      <CustomerTags />
      <ActionButtons />
    </div>
  );
}
```

#### After
```tsx
// 2개 섹션으로 재구성
export function CustomerInfo() {
  return (
    <aside aria-label="고객 정보 및 템플릿 패널">
      {/* Section 1: 정보 패널 */}
      <div>
        <InfoTabs tabs={infoTabs} activeIndex={0} />
        <InfoContainer data={infoData} />
      </div>

      {/* Section 2: 템플릿 섹션 */}
      <TemplateSection 
        tabs={templateTabs}
        categories={templateCategories}
        templates={templates}
      />
    </aside>
  );
}
```

---

## 🎨 디자인 시스템

### 색상 팔레트

#### 탭 (InfoTabs, TemplateTab)
- **Active**: `bg-slate-600`, `text-white`, `font-bold`
- **Inactive**: `text-zinc-900`, `opacity-60`, `font-regular`
- **Hover**: `bg-gray-100` (Inactive 탭)

#### 카테고리 태그 (TemplateFilter)
- **Active**: `bg-slate-600`, `text-white`, `font-bold`
- **Inactive**: `bg-[rgba(140,140,156,0.12)]`, `border-[#eaeaea]`, `opacity-60`
- **Hover**: `bg-[rgba(140,140,156,0.18)]`

#### 템플릿 뱃지
- **공유**: `bg-[rgba(255,71,19,0.1)]`, `text-[#ff4713]`
- **개인**: `bg-[rgba(24,24,27,0.08)]`, `text-zinc-900`, `opacity-60`

#### 즐겨찾기 아이콘
- **Active**: `fill-[#FFCC66]`, `stroke-[#EAB308]`
- **Inactive**: `fill-[#3F3F46]`, `opacity-0.2`, `stroke-[#18181B]`

### 레이아웃

#### 정보 필드
```css
/* 단일 필드 */
.info-field {
  display: flex;
  gap: 8px;
}

.info-field-label {
  width: 40px;
  opacity: 0.6;
}

.info-field-value {
  opacity: 0.8;
}

/* 그리드 필드 */
.info-field-grid {
  display: flex;
  gap: 24px;
}
```

#### 태그
```css
.tag-badge {
  background: #e5e5e5;
  padding: 6px 12px;
  border-radius: 100px;
  font-size: 13px;
}

.tag-list {
  display: flex;
  flex-wrap: wrap;
  gap: 5px;
}
```

#### 템플릿 아이템
```css
.template-item {
  height: 44px;
  padding: 10px;
  display: flex;
  gap: 12px;
  border-bottom: 1px solid #f4f4f5;
}

.template-item:hover {
  background: #f9fafb;
  cursor: pointer;
}
```

---

## 🎯 주요 기능

### 1. 탭 네비게이션
- 정보 컨테이너 선택 (6개 탭)
- 템플릿 타입 선택 (4개 탭)
- Active 상태 표시
- 접근성 지원 (ARIA 속성)

### 2. 필터링 & 검색
- 카테고리별 필터
- 정렬 옵션
- 드롭다운 필터 (전체, 카테고리, 검색어)
- 실시간 검색

### 3. 즐겨찾기
- 템플릿 즐겨찾기 토글
- 별 아이콘으로 시각화
- 상태 변경 핸들링

### 4. 페이지네이션
- 다중 페이지 지원
- 현재 페이지 강조
- 이전/다음 네비게이션

---

## 📊 데이터 구조

### InfoContainer Data
```typescript
interface InfoContainerData {
  title: string;              // "1:1 채팅 상담 문의 드립니다."
  category: string;           // "상품문의(샘플) > 일반 상담(샘플)"
  gridFields: Array<{
    id: string;
    label: string;
    value: string;
  }>;
  tags: Array<{
    id: string;
    label: string;            // "# 긴급처리"
  }>;
}
```

### Template Data
```typescript
interface Template {
  id: string;
  badge?: {
    label: string;            // "공유" or "개인"
    color: string;            // "red" or "default"
  };
  text: string;               // "배송 지연 재품 발송 서비스..."
  isFavorite?: boolean;
}
```

---

## ✅ 개선사항

### 타입 안정성
- 모든 Props에 TypeScript 인터페이스 정의
- 명확한 데이터 구조

### 컴포넌트 분리
- 재사용 가능한 작은 컴포넌트들
- 단일 책임 원칙 준수

### 접근성
- Semantic HTML (`<aside>`, `<button>`)
- ARIA 속성 (`role`, `aria-label`, `aria-selected`)
- 키보드 네비게이션 지원

### 인터랙티비티
- Hover 효과
- Transition 애니메이션
- 클릭 이벤트 핸들링

### 유지보수성
- 명확한 파일 구조
- Props를 통한 데이터 전달
- 이벤트 콜백 패턴

---

## 🔧 사용 예시

### 기본 사용
```tsx
import { CustomerInfo } from "./components/CustomerInfo";

function App() {
  return (
    <div className="flex">
      {/* ... 다른 컴포넌트들 ... */}
      <CustomerInfo />
    </div>
  );
}
```

### 커스텀 데이터
```tsx
// 데이터 준비
const myInfoData = {
  title: "맞춤 제목",
  category: "카테고리 > 서브카테고리",
  gridFields: [
    { id: "1", label: "필드1", value: "값1" },
    { id: "2", label: "필드2", value: "값2" },
  ],
  tags: [
    { id: "1", label: "# 태그1" },
    { id: "2", label: "# 태그2" },
  ],
};

// 컴포넌트에 전달
<InfoContainer data={myInfoData} />
```

### 이벤트 핸들링
```tsx
const [activeTab, setActiveTab] = useState(1);
const [favorites, setFavorites] = useState<string[]>([]);

function handleFavoriteToggle(id: string) {
  setFavorites(prev => 
    prev.includes(id) 
      ? prev.filter(fav => fav !== id)
      : [...prev, id]
  );
}

<TemplateSection
  onTabChange={setActiveTab}
  onFavoriteToggle={handleFavoriteToggle}
  {...otherProps}
/>
```

---

## 🚀 확장 가능성

### 1. 정보 패널 확장
- 6개 탭별 다른 컨텐츠 구현
- 고객정보 탭: 상세 정보
- 태스크 탭: 할 일 목록
- 상담이력 탭: 이력 타임라인
- 파일첨부 탭: 파일 리스트
- 메모 탭: 메모 에디터

### 2. 템플릿 기능 확장
- 템플릿 편집 모달
- 새 템플릿 추가
- 템플릿 카테고리 관리
- 단축키 설정
- 자동완성 로직

### 3. 검색 기능 강화
- 실시간 검색 결과
- 하이라이팅
- 검색 이력
- 자동완성 제안

### 4. 데이터 연동
- API 연동
- 실시간 업데이트
- 낙관적 업데이트 (즐겨찾기)
- 로딩 상태 표시

---

## 🐛 알려진 제약사항

### 1. Mock Data
현재는 하드코딩된 Mock 데이터 사용
→ 실제 API 연동 필요

### 2. 상태 관리
컴포넌트 내부 상태만 사용
→ 전역 상태 관리 (Context, Zustand 등) 고려

### 3. 페이지네이션
UI만 구현, 실제 로직 없음
→ 페이지네이션 로직 구현 필요

### 4. 검색 기능
검색 입력 UI만 있음
→ 실제 필터링 로직 구현 필요

---

## 📖 참고 자료

### Figma Import
- `/imports/Panel.tsx` - 원본 Figma 코
- `/imports/svg-i71009d0sy.ts` - SVG 경로

### 관련 문서
- `/COMPONENT_STRUCTURE.md` - 전체 컴포넌트 구조
- `/REFACTORING_GUIDE.md` - 리팩토링 가이드
- `/types/index.ts` - 타입 정의

---

## 🎉 완성된 기능

✅ **Section 1: 정보 패널**
- 6개 탭 네비게이션
- 정보 필드 표시
- 3열 그리드 레이아웃
- 태그 리스트 (10개)

✅ **Section 2: 템플릿 섹션**
- 4개 탭 네비게이션
- 카테고리 필터 (6개)
- 정렬 & 드롭다운 필터
- 검색 입력
- 템플릿 리스트 (10개)
- 즐겨찾기 토글
- 페이지네이션

✅ **코드 품질**
- TypeScript 타입 정의
- 컴포넌트 분리
- 접근성 지원
- Hover/Transition 효과
- 반응형 레이아웃

---

**작성일**: 2025-11-10  
**버전**: 2.0.0  
**작성자**: Figma Make AI Assistant