import PropTypes from 'prop-types';

export default function Button({ name, className }) {
  return (
    <>
      <td>
        <button type="button" className={className}>
          {name}
        </button>
      </td>
    </>

  );
}

Button.propTypes = {
  name: PropTypes.string.isRequired,
  className: PropTypes.string,
};

Button.defaultProps = {
  className: 'light-mode',
};
