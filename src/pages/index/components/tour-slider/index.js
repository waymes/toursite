import dynamic from 'next/dynamic';
import Router from 'next/router';

import EButton from '../../../../components/common/element-button';

import withSizes from '../../../../helpers/sizes';

import { tempAdventures } from '../../constants';

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

const TourSlider = props => (
  <Slider
    arrows
    speed={500}
    slidesToShow={chooseSlidesAmount(props)}
    slidesToScroll={chooseSlidesAmount(props)}
    className="tour-slider"
  >
    {tempAdventures.map(adventure => (
      <EButton
        className="tour-slide"
        key={adventure.id}
        onClick={() => Router.push(`/tour?id=${adventure.id}`)}
      >
        <div
          className="tour-slide__inner"
          style={{ backgroundImage: `url(${adventure.img})` }}
        >
          <div className="tour-slide__content">
            <h3 className="tour-slide__title">{adventure.title}</h3>
            <div className="tour-slide__description">Даты: 12.06 ‒ 23.06</div>
          </div>
        </div>
      </EButton>
    ))}
  </Slider>
);

export default withSizes({
  withMobile: true,
  withTablet: true,
  withDesktop: true,
})(TourSlider);
