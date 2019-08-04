import PropTypes from 'prop-types';
import classnames from 'classnames';

import ElementButton from '../element-button';

import './style.styl';

const ShortInfo = ({
  img, title, children, onClick, className,
}) => (
  <ElementButton className={classnames('shortInfo', className)} onClick={onClick}>
    {img && <img src={img} alt="" />}
    <h2 className="shortInfo__title">{title}</h2>
    <p className="shortInfo__description">{children}</p>
  </ElementButton>
);

ShortInfo.propTypes = {
  img: PropTypes.string.isRequired,
  title: PropTypes.node.isRequired,
  children: PropTypes.node.isRequired,
  onClick: PropTypes.func,
  className: PropTypes.string,
};

ShortInfo.defaultProps = {
  onClick: () => {},
  className: '',
};

export default ShortInfo;
