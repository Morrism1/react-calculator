import Display from './Display';
import ButtonPanel from './ButtonPanel';
import '../styles/App.css';
// import calculate from '../logic/calculate';

function App() {
  return (
    <table className="main-box" cellSpacing="0" cellPadding="0">
      <Display />
      <ButtonPanel />
    </table>
  );
}

export default App;
