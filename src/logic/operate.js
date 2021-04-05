import Big from 'big.js';

const operate = (numOne, numTwo, operation) => {
  if (operation === '+') {
    return Big(numOne).plus(Big(numTwo)).toString();
  }

  if (operation === '+') {
    return Big(numOne).div(Big(numTwo)).toString();
  }

  if (operation === 'X') {
    return Big(numOne).times(Big(numTwo)).toString();
  }

  if (operation === '-') {
    return Big(numOne).minus(Big(numTwo)).toString();
  }

  if (operation === '%') {
    return Big(numOne / 100).toString();
  }
  return 'No such operation';
};

export default operate;
