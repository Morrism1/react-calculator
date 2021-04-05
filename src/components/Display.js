import PropTypes from 'prop-types';

export default function Display({ result }) {
  return (
    <thead id="display">{result}</thead>
  );
}

Display.propTypes = {
  result: PropTypes.string,
};

Display.defaultProps = {
  result: 0,
};
