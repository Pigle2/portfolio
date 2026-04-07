# 포트폴리오 웹사이트 (portfolio) — Claude 작업 지침

> Public 저장소 | GitHub: Pigle2/portfolio
> GitHub Pages: https://pigle2.github.io/portfolio/

## 기획서 위치 (중요)
콘텐츠 / 포지셔닝 / 사이트 구조 관련 정보는 모두 **기획서 문서**에 있음.
CLAUDE.md에는 기획 내용을 중복 기록하지 말 것.

- **포트폴리오 기획서:** `docs/포트폴리오-기획서.md`
- **이력서 기획서:** `docs/이력서-기획서.md`

**작업 규칙:**
- 콘텐츠 / 포지셔닝 관련 수정은 **기획서를 먼저 확인**한 뒤 구현
- 기획 내용 자체가 바뀌면 **해당 기획서를 먼저 수정**하고 버전 · 변경 이력 갱신
- 포지셔닝 제약조건 위반 여부는 `docs/포트폴리오-기획서.md` 의 **4. 포지셔닝 제약조건** 참조

## 기술 스택
- HTML / CSS / JS (순수, 프레임워크 없음)
- Google Fonts (Noto Sans KR)
- GitHub Pages 배포

## 파일 구조
- `index.html` — 포트폴리오 메인 페이지 (기획서: `docs/포트폴리오-기획서.md`)
- `resume.html` — 웹 이력서 (기획서: `docs/이력서-기획서.md`)
- `style.css`, `script.js` — 포트폴리오 공통 스타일/스크립트
- `v1/` — 이전 버전 디자인 보존 (삭제 금지)
- `docs/` — 기획서 문서

## 작업 방식
- 수정 후 `git push` 하면 1~2분 후 GitHub Pages에 자동 반영
- 기획 문서 버전 관리: 각 기획서의 **변경 이력** 표 갱신 + git 커밋

## 연관 저장소
| 저장소 | 공개 | 용도 |
|--------|------|------|
| `Pigle2/career-` | Private | 이력서 / 면접 준비 (이력서 마스터 소스) |
| `Pigle2/cc_business` | Private | AI Agent Teams 사업 분석 |
