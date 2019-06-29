import PropTypes from 'prop-types';

export const tripPropType = PropTypes.shape({
  id: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  createdAt: PropTypes.string.isRequired,
  updatedAt: PropTypes.string,
  image: PropTypes.string.isRequired
});
