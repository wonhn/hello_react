import ReactDOM from 'react-dom/client';
import React, { Fragment } from "react";


/*
const ReactDOM = require('react-dom')
위와같은 형태로도 쓸 수는 있으나, require함수의 경우 javascript표준이 아닌 
Node.js상에서 동작하는 코드로, import/export문법 사용을 권장한다고 함.
(https://create-react-app.dev/docs/importing-a-component/)
*/
/* 
ReactDOM.render(<h3>안녕 리액트!</h3>, document.getElementById('root'));
--> react_dom_client__WEBPACK_IMPORTED_MODULE_0__.render is not a function

[참고사항]
2022년 3월 8일 이후로 리액트의 18 버전이 업데이트 되었습니다.
그래서 영상의 내용과 다르게, index.js 파일의 코드 구조가 조금 바뀌었는데요.
새로운 버전으로 리액트 프로젝트를 생성하신 경우에는
ReactDOM.render 대신에 ReactDOM.createRoot를 사용하는 코드가 만들어집니다.
그런 경우에는 코드를 아래처럼 수정하시면 됩니다.
*/
let product = "notebook"
let obj = {
  name: "노트북",
  imgUrl: "https://img.freepik.com/free-vector/flat-creativity-concept-illustration_52683-64279.jpg"
}
obj.func = (a,b) => {
  return a+b
}
obj.onClickEvent = (event,input) => {
  console.log(event)
  alert("노트북좋아!!"+ input)
}

// 나와너의 선택
let me = '-'
let other = ''


// 승리판정
const WINS = {
    rock: 'scissor',
    scissor: 'paper',
    paper: 'rock',
  }

// 결과 가져오기
function getResult(left, right) {
  if (WINS[left] === right) return '승리';
  else if (left === WINS[right]) return '패배';
  else if (left === right) return '무승부';
  return '...';
}

// 가위바위보 선택&결과
function handleClick(event, myChoice) {
  console.log('가위바위보!');

  me = myChoice
}


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <>
    <h3>나만의 {product.toUpperCase()} 주문하기</h3>
    <h3>나만의 {obj.name} 주문하기</h3>
    <img src={obj.imgUrl} width="300px" alt="노트북" />
    <button onClick={(event) => {obj.onClickEvent('??')}}>확인</button>

    <hr />
    <h3>계산기: 1 + 2 = {obj.func(1,2)}</h3>
    <hr />
    <h3 id="title">가위바위보</h3>
    <h5>{getResult(me, other)}</h5>
    <button onClick={(event) => handleClick(event, 'rock')}>가위</button>
    <button onClick={(event) => handleClick(event, 'scissor')}>바위</button>
    <button onClick={(event) => handleClick(event, 'paper')}>보</button>
  </>
);
// JSX: javascript XML의 줄임말. React 엘리먼트를 생성. js와는 다른 문법.
/* 
플래그먼트(Fragment). render되는 HTML의 가장 상위 태그는 무조건 1개의 태그로 이루어져있어야 함.
이때 기존 구조는 손대지 않고 사용할 수 있는 태그 <Flagment></Flagment>. <></>도 동일한 의미.
*/