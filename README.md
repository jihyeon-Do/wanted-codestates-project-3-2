# 카트라이더 TMI

## 🚀 배포 링크

https://wanted-preonboarding-nexon.netlify.app

## 💿 실행 방법

```
$ git clone https://github.com/jihyeon-Do/wanted-codestates-project-9.git

$ npm install

$ npm run start
```

## 🎇사용 기술스택

- Javascript
- React
- Redux
- styled-components
- Axios
- chart.js
- react-router

## ✨구현 기능

### 유저 정보 표시

![1](https://user-images.githubusercontent.com/62285862/160132920-44322092-0700-40a4-8296-50ea5cef940d.gif)

![2](https://user-images.githubusercontent.com/62285862/160133040-e14f17b4-6cf6-409b-9de0-70e8e2255baa.gif)

![3](https://user-images.githubusercontent.com/62285862/160133092-c15814f6-837a-429c-ba26-b873307ed6e1.gif)

![4](https://user-images.githubusercontent.com/62285862/160133143-a6158dac-7783-4ba1-955b-1d2c3a1fd74d.gif)

![5](https://user-images.githubusercontent.com/62285862/160133233-a757551a-52d6-4833-b5a2-4ac2f3c62bfb.gif)

- api로 받아온 정보를 redux에 넣어서 관리
- 개인전, 팀전 구분해서 정보 가져오기 (스피드 개인전, 스피드 팀전을 기준으로 하였습니다.)
- 종합 전적 : 승률, 완주율, 리타이어율 표시
- 순위변동 추이 : 지난 200경기, 최근 50경기 데이터 chart.js 라이브러리로 표시
- 응원 한마디 : 댓글기능으로 구현, 갯수 count 할 수 있음
- 최근 200개의 데이터 가져와서 경기 기록 표시

## ❗구현 못한 기능

### 전역

- 홈 페이지
- 유저 별 라우팅
- 로딩 인디케이터

### 개인 전적 페이지

- 없는 유저 정보 검색시 에러 핸들링
- 경기 기록 표시 중 데이터는 가공했지만 스타일링 반영 못함
- 트랙, 카드 정보 표시 (왼쪽 아래 컴포넌트)

### 랭킹 페이지

- 기본적인 페이지 구성 및 스타일을 제외한 전반적인 기능 부족

## 애니메이션

- 종합 전적 도넛 그래프 (svg로 구현)
- 1대1매칭 가상대결 그라디언트 백그라운드
- 통합, 매우빠름, 무한부스터 탭 border 애니메이션
- 랭킹 페이지 백그라운드 파도 애니메이션

## Etc

- 웹 표준을 지키려고 시멘틱태그를 사용하였습니다.
