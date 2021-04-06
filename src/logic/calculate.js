import operate from './operate';

const calculate = (data, buttonName) => {
  let { total, next, operation } = data;

  if (buttonName === 'AC') {
    total = 0;
    next = null;
    operation = null;
  }

  if (buttonName === '+/-') {
    if (next) {
      next = operate(next, -1, 'X');
    } else {
      total = operate(total, -1, 'X');
    }
  }

  if (buttonName === '%') {
    if (next) {
      next = operate(next, 100, '÷');
    } else {
      total = operate(total, 100, '÷');
    }
  }

  if (/[0-9]/.test(buttonName)) {
    if (!operation) {
      if (!total) {
        total = buttonName;
      } else if (typeof total === 'number') {
        total = buttonName;
      } else {
        total += buttonName;
      }
    } else if (!next) {
      next = buttonName;
    } else {
      next += buttonName;
    }
  }

  if (buttonName === '.') {
    if (!operation) {
      if (!total) {
        total = 0 + buttonName;
      } else if (!/[.]/.test(total)) {
        total += buttonName;
      }
    } else if (!next) {
      next = 0 + buttonName;
    } else if (!/[.]/.test(next)) {
      next += buttonName;
    }
  }

  if (['+', '-', 'X', '÷'].includes(buttonName)) {
    if (total && next === null) {
      operation = buttonName;
    }
  }

  if (buttonName === '=') {
    if (total && next) {
      total = operate(total, next, operation);
      next = null;
      operation = null;
    }
  }

  return { total, next, operation };
};

export default calculate;
