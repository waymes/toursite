import PropTypes from 'prop-types';

import './style.styl';

const Section = React.forwardRef(({ children, className, ...other }, ref) => (
  <section className={`section ${className}`} ref={ref} {...other}>
    {children}
  </section>
));

Section.propTypes = {
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
};

Section.defaultProps = {
  className: '',
};

export default Section;
