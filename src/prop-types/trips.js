import PropTypes from 'prop-types';

export const tripPropType = PropTypes.shape({
  id: PropTypes.string,
  title: PropTypes.string,
  createdAt: PropTypes.string,
  updatedAt: PropTypes.string,
});
