import PropTypes from 'prop-types';
import { Field } from 'react-final-form';

import './style.styl';

const Input = ({
  placeholder, name, type, required,
}) => (
  <Field name={name}>
    {({ input }) => (
      <div className={`input ${input.value ? 'input_withValue' : ''}`}>
        <input {...input} type={type} required={required} />
        {placeholder && <span className="input__placeholder">{placeholder}</span>}
        <span className="input__underline" />
      </div>
    )}
  </Field>
);

Input.propTypes = {
  name: PropTypes.string.isRequired,
  placeholder: PropTypes.string,
  type: PropTypes.string,
  required: PropTypes.bool,
};

Input.defaultProps = {
  placeholder: '',
  type: 'text',
  required: false,
};

export default Input;
