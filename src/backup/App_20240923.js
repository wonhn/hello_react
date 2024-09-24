import { useState } from 'react'
import Button from '../Button';
import Dice from '../Dice'

function random(n) {
  return Math.ceil(Math.random() * n)
}

function App() {
  const [num, setNum] = useState(1)
  const [sum, setSum] = useState(0);
  const [gameHistory, setGameHistory] = useState([]);

  const handleRollClick = () => {
    const nextNum = random(6);
    setNum(nextNum);
    setSum(sum + nextNum);
    /*
    gameHistory.push(nextNum)
    setGameHistory(gameHistory)

    참조형 변수의 경우 변수값을 담고있는 영역의 주소값을 가지고 있기 때문에
    기존 state에 배열 인자만 추가해줄 경우, 동일한 주소값을 가지고 있기 때문에
    state입장에서는 상태값이 바뀌지 않았다고 받아들여 화면이 reload가 되지 않음!
    
    따라서 아래와 같이 배열을 새로 만들어줘야함
    */
    setGameHistory([...gameHistory, nextNum]);
  }
  const handleClearClick = () => {
    setNum(1);
    setSum(0);
    setGameHistory([]);
  }

  return (
    <div>
      <div>
        <Button onClick={handleRollClick}>던지기</Button>
        <Button onClick={handleClearClick}>처음부터</Button>
      </div>
      <div>
        <h2>나</h2>
        <Dice color='blue' num={num} />
        <h2>총점</h2>
        <p>{sum}</p>
        <h2>기록</h2>
        {gameHistory.join(', ')}
      </div>
    </div>
  );
}
export default App;