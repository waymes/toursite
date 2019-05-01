import PropTypes from 'prop-types';

import './style.styl';

const Input = ({
  onChange, placeholder, value, ...other
}) => (
  <div className={`input ${value ? 'input_withValue' : ''}`}>
    <input type="text" onChange={onChange} {...other} />
    {placeholder && <span className="input__placeholder">{placeholder}</span>}
    <span className="input__underline" />
  </div>
);

Input.propTypes = {
  onChange: PropTypes.func.isRequired,
  value: PropTypes.string.isRequired,
  placeholder: PropTypes.string,
};

Input.defaultProps = {
  placeholder: '',
};

export default Input;
