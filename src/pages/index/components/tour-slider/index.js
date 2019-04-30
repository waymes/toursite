import Slider from 'react-slick';

import { tempAdventures } from '../../constants';

import './style.styl';

const TourSlider = () => (
  <Slider
    arrows
    speed={500}
    slidesToShow={4}
    slidesToScroll={4}
    className="tour-slider"
  >
    {tempAdventures.map(adventure => (
      <div className="tour-slide" key={adventure.id}>
        <div
          className="tour-slide__inner"
          style={{ backgroundImage: `url(${adventure.img})` }}
        >
          <div className="tour-slide__content">
            <h3 className="tour-slide__title">{adventure.title}</h3>
            <div className="tour-slide__description">Даты: 12.06 ‒ 23.06</div>
          </div>
        </div>
      </div>
    ))}
  </Slider>
);

export default TourSlider;
