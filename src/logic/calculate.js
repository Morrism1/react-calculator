import operate from './operate';

const calculate = (data, buttonName) => {
  let { total, next, operation } = data;

  if (buttonName === 'AC') {
    total = null;
    next = null;
    operation = null;
  }

  if (buttonName === '+/-') {
    if (next) {
      next *= -1;
    } else {
      total *= -1;
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

  if (buttonName === ('+' || '-' || 'X' || '÷')) {
    if (!total) {
      total = 0;
    }
    if (!total && !next && !operation) {
      total = operate(total, next, operation);
      next = null;
    }
    operation = buttonName;
  }

  if (buttonName === '=') {
    if (!operation) {
      total = operate(total, next, operation);
      next = '';
      operation = '';
    }
  }

  return { total, next, operation };
};

export default calculate;
