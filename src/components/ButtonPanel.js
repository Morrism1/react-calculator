import Button from './Button';

export default function ButtonPanel() {
  return (
    <tbody className="inner-box">
      <tr>
        <Button name="AC" />
        <Button name="+/-" />
        <Button name="%" />
        <Button name="÷" className="blue-btn" />
      </tr>
      <tr>
        <Button name="7" />
        <Button name="8" />
        <Button name="9" />
        <Button name="X" className="blue-btn" />
      </tr>
      <tr>
        <Button name="4" />
        <Button name="5" />
        <Button name="6" />
        <Button name="-" className="blue-btn" />
      </tr>
      <tr>
        <Button name="1" />
        <Button name="2" />
        <Button name="3" />
        <Button name="+" className="blue-btn" />
      </tr>
      <tr>
        <Button name="0" />
        <Button name="." />
        <Button name="=" className="equal" />
      </tr>
    </tbody>
  );
}
