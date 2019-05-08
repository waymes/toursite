import PropTypes from 'prop-types';

import './style.styl';

const Title = ({ children, className, secondary }) => (
  <h2 className={`title ${secondary ? 'title__secondary' : ''} ${className}`}>
    {children}
  </h2>
);

Title.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.node,
    PropTypes.string,
  ]).isRequired,
  className: PropTypes.string,
  secondary: PropTypes.bool,
};

Title.defaultProps = {
  className: '',
  secondary: false,
};

export default Title;
