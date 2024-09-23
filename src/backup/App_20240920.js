import Dice from '../Dice'

function App() {
  // 숫자의 경우 중괄호로 감싸서 바로 사용 가능!
  return (
    <div>
      <Dice color="red" num={2} />
    </div>
  );
}
export default App;