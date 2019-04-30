import PropTypes from 'prop-types';

const ElementButton = ({ onClick, children, ...other }) => (
  <div
    onClick={onClick}
    onKeyPress={e => e.key === 'Enter' && onClick()}
    role="button"
    tabIndex={0}
    {...other}
  >
    {children}
  </div>
);

ElementButton.propTypes = {
  onClick: PropTypes.func.isRequired,
  children: PropTypes.node.isRequired,
};

export default ElementButton;
