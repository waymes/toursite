import PropTypes from 'prop-types';

const ElementButton = ({
  onClick, onDoubleClick, children, ...other
}) => (
  <div
    onClick={onClick}
    onDoubleClick={onDoubleClick}
    onKeyPress={e => e.key === 'Enter' && onClick()}
    role="button"
    tabIndex={0}
    {...other}
  >
    {children}
  </div>
);

ElementButton.propTypes = {
  onClick: PropTypes.func,
  onDoubleClick: PropTypes.func,
  children: PropTypes.node,
};

ElementButton.defaultProps = {
  children: null,
  onClick: () => {},
  onDoubleClick: () => {},
};

export default ElementButton;
