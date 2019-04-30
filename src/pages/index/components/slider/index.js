import { Component } from 'react';

import { slideList } from '../../constants';

import './style.styl';

class Slider extends Component {
  constructor(props) {
    super(props);
    this.state = { activeSlideId: 0 };
    this.slideChangeInterval = null;
    this.INTERVAL_TIME = 5000;
  }


  componentDidMount() {
    this.slideChangeInterval = setInterval(this.changeNextSlide, this.INTERVAL_TIME);
  }

  componentWillUnmount() {
    clearInterval(this.slideChangeInterval);
  }

  changeNextSlide = () => {
    const { activeSlideId } = this.state;

    if (activeSlideId === slideList.length - 1) {
      this.setState({ activeSlideId: 0 });
    } else {
      this.setState({ activeSlideId: activeSlideId + 1 });
    }
  }

  render() {
    const { activeSlideId } = this.state;

    return (
      <div className="slider">
        {slideList.map(({ url }, id) => (
          <div
            className={`slider__item ${activeSlideId === id ? 'slider__item_active' : ''}`}
            style={{ backgroundImage: `url(${url})` }}
            key={url}
          />
        ))}
      </div>
    );
  }
}

export default Slider;
