import PropTypes from 'prop-types';

export default function Display({ result }) {
  return (
    <thead>
      <tr>
        <th colSpan={5}>
          <div className="calc-display" id="display">
            {result}
          </div>
        </th>
      </tr>
    </thead>

  );
}

Display.propTypes = {
  result: PropTypes.string,
};

Display.defaultProps = {
  result: 0,
};
