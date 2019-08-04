import PropTypes from 'prop-types';
import dynamic from 'next/dynamic';
import Router from 'next/router';
import moment from 'moment';

import EButton from '../../../../components/element-button';

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
}) => {
  let slidesAmount = chooseSlidesAmount({ isMobile, isTablet, isDesktop });
  if (tripList.length < slidesAmount) {
    slidesAmount = tripList.length;
  }
  return (
    <Slider
      arrows
      speed={500}
      autoplay
      slidesToShow={slidesAmount}
      slidesToScroll={slidesAmount}
      className="tour-slider"
    >
      {tripList.map(trip => (
        <EButton
          area-label={trip.name}
          className="tour-slide"
          key={trip.id}
          onClick={() => Router.push(`/trip?id=${trip.id}`, `/trip/${trip.id}`)}
        >
          <div
            className="tour-slide__inner"
            style={{ backgroundImage: `url(${trip.backgroundImage})` }}
          >
            <div className="tour-slide__content">
              <div className="tour-slide__title">
                {trip.destination}
              </div>
              <div className="tour-slide__description">
                {'Даты: '}
                {moment(trip.dateFrom).format('DD.MM')}
                {' ‒ '}
                {moment(trip.dateTo).format('DD.MM')}
              </div>
            </div>
          </div>
        </EButton>
      ))}
    </Slider>
  );
};

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
