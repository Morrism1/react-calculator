import PropTypes from 'prop-types';
import Button from './Button';

export default function ButtonPanel({ handleCkick }) {
  const handleClick = (buttonName) => {
    handleCkick(buttonName);
  };
  return (
    <tbody className="inner-box">
      <tr>
        <Button name="AC" handleClick={(buttonName) => handleClick(buttonName)} />
        <Button name="+/-" handleClick={(buttonName) => handleClick(buttonName)} />
        <Button name="%" handleClick={(buttonName) => handleClick(buttonName)} />
        <Button name="÷" handleClick={(buttonName) => handleClick(buttonName)} className="blue-btn" />
      </tr>
      <tr>
        <Button name="7" handleClick={(buttonName) => handleClick(buttonName)} />
        <Button name="8" handleClick={(buttonName) => handleClick(buttonName)} />
        <Button name="9" handleClick={(buttonName) => handleClick(buttonName)} />
        <Button name="X" handleClick={(buttonName) => handleClick(buttonName)} className="blue-btn" />
      </tr>
      <tr>
        <Button name="4" handleClick={(buttonName) => handleClick(buttonName)} />
        <Button name="5" handleClick={(buttonName) => handleClick(buttonName)} />
        <Button name="6" handleClick={(buttonName) => handleClick(buttonName)} />
        <Button name="-" handleClick={(buttonName) => handleClick(buttonName)} className="blue-btn" />
      </tr>
      <tr>
        <Button name="1" handleClick={(buttonName) => handleClick(buttonName)} />
        <Button name="2" handleClick={(buttonName) => handleClick(buttonName)} />
        <Button name="3" handleClick={(buttonName) => handleClick(buttonName)} />
        <Button name="+" handleClick={(buttonName) => handleClick(buttonName)} className="blue-btn" />
      </tr>
      <tr>
        <Button name="0" handleClick={(buttonName) => handleClick(buttonName)} />
        <Button name="." handleClick={(buttonName) => handleClick(buttonName)} />
        <Button name="=" colSpan={2} className="equal" handleClick={(buttonName) => handleClick(buttonName)} />
      </tr>
    </tbody>
  );
}

ButtonPanel.propTypes = {
  handleCkick: PropTypes.func.isRequired,
};
