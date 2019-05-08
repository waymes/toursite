/* eslint-disable jsx-a11y/anchor-is-valid */
import NextLink from 'next/link';
import PropTypes from 'prop-types';

const setBlankAttributes = (blank) => {
  if (!blank) return {};
  return { target: '_blank', rel: 'noopener noreferrer' };
};

const Link = ({
  href, children, className, blank, ...other
}) => (
  <NextLink href={href} {...other}>
    <a className={`link ${className}`} {...setBlankAttributes(blank)}>{children}</a>
  </NextLink>
);

Link.propTypes = {
  href: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
  blank: PropTypes.bool,
};

Link.defaultProps = {
  className: '',
  blank: false,
};

export default Link;
