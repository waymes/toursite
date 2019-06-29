import PropTypes from 'prop-types';
import { Field } from 'react-final-form';

import './style.styl';

const Textarea = ({
  placeholder, name, required,
}) => (
  <Field name={name}>
    {({ input }) => (
      <div className={`textarea ${input.value ? 'textarea_withValue' : ''}`}>
        <textarea {...input} required={required} />
        {placeholder && <span className="textarea__placeholder">{placeholder}</span>}
        <span className="textarea__underline" />
      </div>
    )}
  </Field>
);

Textarea.propTypes = {
  name: PropTypes.string.isRequired,
  placeholder: PropTypes.string,
  required: PropTypes.bool,
};

Textarea.defaultProps = {
  placeholder: '',
  required: false,
};

export default Textarea;
