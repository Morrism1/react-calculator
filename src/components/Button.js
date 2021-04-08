import PropTypes from 'prop-types';

export default function Button({
  name, className, handleClick, colSpan,
}) {
  const Click = () => handleClick(name);
  return (
    <>
      <td colSpan={colSpan}>
        <button type="button" className={className} onClick={() => Click()}>
          {name}
        </button>
      </td>
    </>

  );
}

Button.propTypes = {
  name: PropTypes.string.isRequired,
  className: PropTypes.string,
  handleClick: PropTypes.func.isRequired,
  colSpan: PropTypes.number,
};

Button.defaultProps = {
  className: 'light-mode',
  colSpan: 1,
};
