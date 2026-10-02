# leeosolha · 개발자 포트폴리오

React + Vite + TypeScript로 만든 개인 포트폴리오 웹사이트입니다.
GitHub 저장소·언어 비율·기여 그래프를 실시간으로 불러오고, 대표 프로젝트를 카드/리스트 형태로 소개합니다.

🔗 **[라이브 사이트](https://05solar.github.io/PF/)** · 💻 **[GitHub 저장소](https://github.com/05solar/PF)**

![포트폴리오 스크린샷](docs/screenshot.png)

## 주요 기능

- **실시간 GitHub 연동** — 저장소·언어 사용 비율·기여(잔디) 그래프를 GitHub에서 직접 불러옵니다. API 호출 한도에 걸리면 저장본(fallback)으로 자동 대체되어 화면이 비지 않습니다.
- **대표 프로젝트 카드** — 커버 이미지, 직접 작성한 소개, 핵심 기술 태그(CV·RAG·MCP 등), 펼치면 보이는 README까지 한 카드에 담았습니다.
- **카드형 ↔ 리스트형 전환** — 상단 토글로 보기 방식을 바꿀 수 있고, 펼침은 한 번에 하나만(아코디언) 동작합니다.
- **README 내장** — 프로젝트 README를 빌드에 포함해, GitHub API 한도와 무관하게 항상 표시됩니다.
- **반응형 · 모션 최소화 대응** — 화면 크기에 맞춰 레이아웃이 조정되고, `prefers-reduced-motion` 사용자에게는 애니메이션을 끕니다.

## 기술 스택

React · TypeScript · Vite · CSS (프레임워크 없이 직접 작성)

## 실행

```bash
npm install
npm run dev      # 개발 서버
npm run build    # 프로덕션 빌드 (dist)
npm run preview  # 빌드 결과 미리보기
```

## GitHub Pages

이 저장소는 `05solar/PF`의 프로젝트 페이지로 배포되도록 구성되어 있습니다.

- Vite base path: `/PF/` (`vite.config.ts`)
- Build output: `dist`
- Deploy workflow: `.github/workflows/deploy.yml`
