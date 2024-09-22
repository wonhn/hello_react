// function Button({ text }) {
//   return <button>{text}</button>;
// }

/*
컴포넌트 함수에서 따로 활요하지 않고 보여주기만 하는 경우
children prop을 사용하면 된다

문자열 뿐만 아니라 다른 컴포넌트나 다른HTML태그도 작성할 수 있음.
*/
function Button({ children }) {
  return <button>{children}</button>;
}

export default Button;