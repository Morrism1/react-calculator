import { useState } from 'react';
import Display from './Display';
import ButtonPanel from './ButtonPanel';
import '../styles/App.css';

import calculate from '../logic/calculate';

const App = () => {
  const [total, setTotal] = useState('');
  const [next, setNext] = useState('');
  const [operation, setOperation] = useState('');

  const handleClick = (buttonName) => {
    const result = calculate({ total, next, operation }, buttonName);
    setTotal(result.total);
    setNext(result.next);
    setOperation(result.operation);
  };

  return (
    <table className="main-box" cellSpacing="0" cellPadding="0">
      <Display result={(next) || (total)} />
      <ButtonPanel handleCkick={(name) => handleClick(name)} />
    </table>
  );
};

export default App;
