import ReactDOM from 'react-dom/client';
/*
const ReactDOM = require('react-dom')
위와같은 형태로도 쓸 수는 있으나, require함수의 경우 javascript표준이 아닌 
Node.js상에서 동작하는 코드로, import/export문법 사용을 권장한다고 함.
(https://create-react-app.dev/docs/importing-a-component/)
*/
/* 
ReactDOM.render(<h1>안녕 리액트!</h1>, document.getElementById('root'));
--> react_dom_client__WEBPACK_IMPORTED_MODULE_0__.render is not a function

[참고사항]
2022년 3월 8일 이후로 리액트의 18 버전이 업데이트 되었습니다.
그래서 영상의 내용과 다르게, index.js 파일의 코드 구조가 조금 바뀌었는데요.
새로운 버전으로 리액트 프로젝트를 생성하신 경우에는
ReactDOM.render 대신에 ReactDOM.createRoot를 사용하는 코드가 만들어집니다.
그런 경우에는 코드를 아래처럼 수정하시면 됩니다.
*/
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<h1>안녕 리액트!</h1>);
// JSX: javascript XML의 줄임말. React 엘리먼트를 생성. js와는 다른 문법.
