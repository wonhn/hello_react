import { useState } from 'react'  // state를 사용하고 싶을때
import Button from './Button';
import Dice from './Dice'

// 1~n까지의 렌덤한 숫자를 반환하는 함수
function random(n) {
  return Math.ceil(Math.random() * n)
}

function App() {
  /* 
  state : react의 변수같은 개념으로, state를 바꾸면 리액트가 알아서 화면을 새로 렌더링 해준다.
  useState 함수의 경우 배열의 형태로 요소 두개를 리턴해줘서, 배열의 Destructuring문법으로 코드를 작성해주는 편
  이중 첫번째 요소는 state값. 변수 값. 두번째 요소는 setter함수. 값을 변경할때는 반드시 setter를 사용해야함
  */
  const [num, setNum] = useState(1)

  const handleRollClick = () => {
    setNum(random(6));
  }
  const handleClearClick = () => {
    setNum(1);
  }

  return (
    <div>
      <div>
        <Button onClick={handleRollClick}>던지기</Button>
        <Button onClick={handleClearClick}>처음부터</Button>
      </div>
      <Dice color="red" num={num} />
    </div>
  );
}
export default App;