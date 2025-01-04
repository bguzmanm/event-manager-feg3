import PropTypes from "prop-types";

export default function PropTypeExample({ title, count }) {
  return (
    <div>
      <h3>{title}</h3>
      <p>El valor del contador es: {count}</p>
    </div>
  );
}

PropTypeExample.propTypes = {
  title: PropTypes.string.isRequired,
  count: PropTypes.number,
};

PropTypeExample.defaultProps = { count: 0 };
