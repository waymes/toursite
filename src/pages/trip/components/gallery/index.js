import Slider from 'react-slick';

import { slides } from '../../constants';

import './style.styl';

const Gallery = () => (
  <div className="gallery">
    <Slider
      dots
      infinite
      arrows
      fade
      speed={500}
      slidesToShow={1}
      slidesToScroll={1}
    >
      {slides.map(slide => (
        <div>
          <div className="slide" style={{ backgroundImage: `url(${slide})` }} />
        </div>
      ))}
    </Slider>
  </div>
);

export default Gallery;
