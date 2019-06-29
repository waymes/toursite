import PropTypes from 'prop-types';
import Slider from 'react-slick';

import './style.styl';

const Gallery = ({ images }) => (
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
      {images.map(image => (
        <div>
          <div className="slide" style={{ backgroundImage: `url(${image})` }} />
        </div>
      ))}
    </Slider>
  </div>
);

Gallery.propTypes = {
  images: PropTypes.arrayOf(PropTypes.string),
};

Gallery.defaultProps = {
  images: [],
};

export default Gallery;
