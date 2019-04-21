import PropTypes from 'prop-types';

import './style.styl';

const Button = ({
  children, type, className, ...other
}) => (
  <button className={`button ${className}`} type={type} {...other}>
    {children}
  </button>
);

Button.propTypes = {
  children: PropTypes.node.isRequired,
  type: PropTypes.string,
  className: PropTypes.string,
};

Button.defaultProps = {
  type: 'button',
  className: '',
};

export default Button;
