import PropTypes from 'prop-types';

// eslint-disable-next-line import/prefer-default-export
export const tripPropType = PropTypes.shape({
  id: PropTypes.string.isRequired,
  title1: PropTypes.string.isRequired,
  title2: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  createdAt: PropTypes.string.isRequired,
  updatedAt: PropTypes.string,
  image: PropTypes.string.isRequired,
});
