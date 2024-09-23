import Button from '../Button';
import Button1 from '../Button1';
import Dice from '../Dice'

function App() {
  // 숫자의 경우 중괄호로 감싸서 바로 사용 가능!
  return (
    <div>
      <div>
        {/* text props을 사용하는 경우 */}
        <Button1 text="던지기"></Button1>
        <Button1 text="처음부터"></Button1>
        <br />
        {/* children props으로 바꾸는 경우 */}
        <Button>던지기</Button>
        <Button>처음부터</Button>
      </div>
      <Dice color="red" num={2} />
    </div>
  );
}
export default App;