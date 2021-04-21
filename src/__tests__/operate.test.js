import operate from '../logic/operate';
import '@testing-library/jest-dom/extend-expect';

describe('check if operate', () => {
  test('performs multiplication of two given numbers', () => {
    const total = operate('2', '11', 'X');
    expect(total).toEqual('22');
  });

  test('performs division of two given numbers', () => {
    const total = operate('30', '2', '÷');
    expect(total).toEqual('15');
  });

  test('performs addition of two given numbers', () => {
    const total = operate('30', '5', '+');
    expect(total).toEqual('35');
  });

  test('performs subtraction of two given numbers', () => {
    const total = operate('50', '12', '-');
    expect(total).toEqual('38');
  });
});
