import ReactDOM from 'react-dom/client';

const root = ReactDOM.createRoot(document.getElementById('root'));

/*
1. 리액트 엘리먼트: 리액트 형태의 json object
  -> 리액트 화면 구성에 있어서 가장 기본적이고 핵심적인 요소

리액트 엘리먼트를 ReactDOM의 render메소드로 전달하게 되면 
리액트가 이 객체를 해석해서 HTML로 렌더링 하는 것.
*/
// const element = <h1>안녕 리액트!</h1>  // 리액트 엘리먼트
// console.log('element>>', element)
// root.render(element); 
/*
2. 리엑트 엘리먼트를 함수 형태로 만들면 커스텀태그 형태로 사용 가능
  -> 리액트 컴포넌트
  -> 함수이름의 첫글자를 대문자로 사용
  -> 반드시 JSX문법으로 만든 리액트 엘리먼트를 리턴해줘야 함
*/
// const Hello = () => <h1>안녕 리액트!2</h1>
// const element = (
//   <>
//     <Hello />
//     <Hello />
//     <Hello />
//   </>
// )
// root.render(element); 

