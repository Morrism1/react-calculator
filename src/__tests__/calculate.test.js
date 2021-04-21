import calculate from '../logic/calculate';
import '@testing-library/jest-dom/extend-expect';

describe('check calculator', () => {
  test('multiplies two numbers', () => {
    const result = calculate({ total: '11', next: '2', operation: 'X' }, '=');
    const { total } = result;
    expect(total).toEqual('22');
  });

  test('divides two numbers', () => {
    const result = calculate({ total: '30', next: '2', operation: '÷' }, '=');
    const { total } = result;
    expect(total).toEqual('15');
  });

  test('sums two numbers', () => {
    const result = calculate({ total: '25', next: '5', operation: '+' }, '=');
    const { total } = result;
    expect(total).toEqual('30');
  });

  test('subtracts two numbers', () => {
    const result = calculate({ total: '5', next: '2', operation: '-' }, '=');
    const { total } = result;
    expect(total).toEqual('3');
  });

  test('calculates the percentage of a number', () => {
    const result = calculate({ total: '500', next: '', operation: '' }, '%');
    const { total } = result;
    expect(total).toEqual('5');
  });
});
