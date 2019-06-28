import PropTypes from 'prop-types';
import dynamic from 'next/dynamic';
import Router from 'next/router';

import EButton from '../../../../components/common/element-button';

import withSizes from '../../../../helpers/sizes';

import { tripPropType } from '../../../../prop-types/trips';

import './style.styl';

const Slider = dynamic(import('react-slick'), { ssr: false });

const chooseSlidesAmount = ({ isMobile, isTablet, isDesktop }) => {
  if (isMobile) {
    return 1;
  }
  if (isTablet) {
    return 2;
  }
  if (isDesktop) {
    return 3;
  }
  return 4;
};

const TripSlider = ({
  isMobile, isTablet, isDesktop, tripList,
}) => (
  <Slider
    arrows
    speed={500}
    autoplay
    slidesToShow={chooseSlidesAmount({ isMobile, isTablet, isDesktop })}
    slidesToScroll={chooseSlidesAmount({ isMobile, isTablet, isDesktop })}
    className="tour-slider"
  >
    {tripList.map(adventure => (
      <EButton className="tour-slide" key={adventure.id}>
        <div
          className="tour-slide__inner"
          style={{ backgroundImage: `url(${adventure.image})` }}
        >
          <div className="tour-slide__content">
            <EButton
              className="tour-slide__title"
              onClick={() => Router.push(`/tour?id=${adventure.id}`, `/tour/${adventure.id}`)}
            >
              {adventure.title}
            </EButton>
            <div className="tour-slide__description">Даты: 12.06 ‒ 23.06</div>
          </div>
        </div>
      </EButton>
    ))}
  </Slider>
);

TripSlider.propTypes = {
  tripList: PropTypes.arrayOf(tripPropType).isRequired,
  isDesktop: PropTypes.bool.isRequired,
  isTablet: PropTypes.bool.isRequired,
  isMobile: PropTypes.bool.isRequired,
};

export default withSizes({
  withMobile: true,
  withTablet: true,
  withDesktop: true,
})(TripSlider);
