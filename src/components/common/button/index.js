import PropTypes from 'prop-types';
import classnames from 'classnames';

import './style.styl';

const Button = ({
  children, type, className, color, ...other
}) => (
  <button
    className={classnames('button', className, { button_secondary: color === 'secondary' })}
    type={type}
    {...other}
  >
    {children}
  </button>
);

Button.propTypes = {
  children: PropTypes.node.isRequired,
  type: PropTypes.string,
  className: PropTypes.string,
  color: PropTypes.string,
};

Button.defaultProps = {
  type: 'button',
  className: '',
  color: 'primary',
};

export default Button;
