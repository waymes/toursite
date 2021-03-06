import PropTypes from 'prop-types';
import Slider from 'react-slick';

import './style.styl';

const Gallery = ({ images }) => (
  <div className="gallery">
    <Slider
      infinite
      arrows
      speed={500}
      slidesToShow={1}
      slidesToScroll={1}
    >
      {images.map(({ image }) => (
        <div key={image}>
          <div className="slide" style={{ backgroundImage: `url(${image})` }} />
        </div>
      ))}
    </Slider>
  </div>
);

Gallery.propTypes = {
  images: PropTypes.arrayOf(PropTypes.shape({
    image: PropTypes.string,
  })),
};

Gallery.defaultProps = {
  images: [],
};

export default Gallery;
