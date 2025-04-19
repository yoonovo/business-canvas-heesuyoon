# 프론트엔드 개발자 윤희수

## 📘 프로젝트 소개

이 프로젝트는 React, Typescript, Ant Design을 기반으로 하는 웹 애플리케이션입니다.
기본적으로 회원 목록의 추가, 수정, 삭제 등 기능을 제공하고 localStorage 모드 지원을 통해 스토리지 방식도 유연하게 설정 가능합니다.

## 🛠️ 주요 기술 스택

- Node v.22
- Npm v10
- Vite v6 (https://ko.vite.dev/guide/)
- React v18
- Typescript v5
- react-router-dom v7.5
- Antd v5.24 (https://ant.design/components/overview/)
- Dayjs v1.11
- Uuid v.11.1

## 📁 프로젝트 구조

```
src/
├── assets/             # 이미지 혹은 font 파일
├── components/         # 재사용 가능한 공통 컴포넌트
├── pages/              # 주요 페이지 컴포넌트
├── storage/            # 로컬 스토리지 및 상태 관리
├── types/              # TypeScript 타입 정의
├── utils/              # 유틸리티 함수 정의
├── App.tsx             # 앱 엔트리
└── main.tsx            # Vite 진입점
```

## 📦 설치 및 실행 방법

### 1. 프로젝트 클론

```
git clone https://github.com/yoonovo/business-canvas-heesuyoon.git
cd business-canvas-heesuyoon
```

### 2. 패키지 설치

```
npm install
```

### 3. 개발 서버 실행

- 기본 모드로 실행

```
npm run dev
```

- LocalStorage 모드로 실행

```
npm run dev:storage
```

## 🧾 Git 커밋 메시지 컨벤션

| 타입       | 설명                                       |
| ---------- | ------------------------------------------ |
| `feat`     | 새로운 기능을 추가할 경우                  |
| `fix`      | 버그를 고친 경우                           |
| `docs`     | 문서를 수정한 경우                         |
| `design`   | CSS 등 사용자 UI 디자인 변경               |
| `refactor` | 프로덕션 코드 리팩토링                     |
| `comment`  | 필요한 주석 추가 및 변경                   |
| `test`     | 테스트 추가, 테스트 리팩토링 (코드 변경 X) |

## ✅ 주요 요구사항

### 필드

- [x] 필드의 `type` 속성에 따라 다른 form을 구현 (`text`, `textarea`, `date`, `select`, `checkbox`)
- [x] text type의 최대 글자수는 20자
- [x] textarea type의 최대 글자수는 50자
- [x] 회원 레코드에는 총 6개의 필드가 존재합니다.

```
// type, label, required 순으로
text, ‘이름‘, true
text, ‘주소‘, false
textarea, ‘메모‘, false
date, ‘가입일‘, true
select, ‘직업‘, false
checkbox, ‘이메일 수신 동의’, false
```

### 레코드

- [x] 레코드 목록을 테이블 형태로 구현
- [x] 각 필드를 column으로 구현
- [x] 필드별 filtering 기능
- [x] 레코드 추가 기능
- [x] 레코드 수정 기능
- [x] 레코드 삭제 기능
- [x] 초기 레코드 설정

## 저장 기능

- [x] 개발 서버를 실행 시 env로 STORAGE를 `in-memory` 또는 `local-storage`로 설정
- [x] `local-storage`로 설정 시 레코드들을 로컬 스토리지에 저장
      (개발 서버를 재실행하거나 브라우저를 새로고침 해도 데이터가 보존됨)
