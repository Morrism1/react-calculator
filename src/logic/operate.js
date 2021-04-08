import Big from 'big.js';

const operate = (numOne, numTwo, operation) => {
  let total;
  const number1 = Big(numOne);
  const number2 = Big(numTwo);
  switch (operation) {
    case 'X':
      total = Big(number1.times(number2));
      break;
    case '÷':
      total = Big(number1.div(number2));
      break;
    case '+':
      total = Big(number1.plus(number2));
      break;
    case '-':
      total = Big(number1.minus(number2));
      break;
    case '%':
      total = `${Big(number1.div(100))}%`;
      break;
    default:
      total = '0';
  }
  return total.toString();
};

export default operate;
