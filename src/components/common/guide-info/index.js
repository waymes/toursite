import PropTypes from 'prop-types';

import './style.styl';

const GuideInfo = ({ guide }) => (
  <div className="guideInfo">
    <img src={guide.avatar} alt="Guide" />
    <h2 className="guideInfo__title">
      <span className="underscore">{guide.name}</span>
      {' – '}
      {guide.shortDescription}
    </h2>
    <p className="guideInfo__description">{guide.fullDescription}</p>
  </div>
);

GuideInfo.propTypes = {
  guide: PropTypes.shape({
    avatar: PropTypes.string,
    name: PropTypes.string,
    shortDescription: PropTypes.string,
    fullDescription: PropTypes.string,
  }).isRequired,
};

export default GuideInfo;
