import PropTypes from 'prop-types';

import './style.styl';

const Input = ({ onChange, ...other }) => (
  <input type="text" className="input" onChange={onChange} {...other} />
);

Input.propTypes = {
  onChange: PropTypes.func.isRequired,
};

export default Input;
