import { Component } from 'react';
import Display from './Display';
import ButtonPanel from './ButtonPanel';
import '../styles/App.css';

import calculate from '../logic/calculate';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      total: null,
      next: null,
      operation: null,
    };

    this.handleClick = this.handleClick.bind(this);
  }

  handleClick = (buttonName) => {
    const result = calculate(this.state, buttonName);
    this.setState(result);
  }

  render() {
    const { total, next } = this.state;
    return (
      <table className="main-box" cellSpacing="0" cellPadding="0">
        <Display result={(next) || (total)} />
        <ButtonPanel handleCkick={(name) => this.handleClick(name)} />
      </table>
    );
  }
}

export default App;
