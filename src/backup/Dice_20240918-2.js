// 이미지를 사용할 경우 import받아서 사용해야함(프로젝트 내부만 그런건가..??)
import diceBlue01 from './assets/dice-blue-1.svg';

function Dice() {
  return <img src={diceBlue01} alt='주사위01' />;
}
export default Dice;