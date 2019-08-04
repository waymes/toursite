import PropTypes from 'prop-types';

// eslint-disable-next-line import/prefer-default-export
export const tripPropType = PropTypes.shape({
  id: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  createdAt: PropTypes.string.isRequired,
  updatedAt: PropTypes.string,
  backgroundImage: PropTypes.string.isRequired,
});
