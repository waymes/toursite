import { Component } from 'react';
import Slider from 'react-slick';

import ElementButton from '../../../../components/element-button';
import { factList } from '../../constants';

import './style.styl';

class Atlas extends Component {
  constructor(props) {
    super(props);
    this.sliderRef = React.createRef();
  }

  renderHovers() {
    return (
      <div className="atlas__hovers">
        {factList.map((fact, id) => (
          <ElementButton
            className="atlas__hoverItem"
            onMouseEnter={() => this.sliderRef.current.slickGoTo(id)}
            onClick={() => this.sliderRef.current.slickGoTo(id)}
            key={fact.text}
          >
            <span>{id + 1}</span>
          </ElementButton>
        ))}
        <div className="atlas__hoverItem" />
      </div>
    );
  }

  render() {
    return (
      <div className="atlas">
        {this.renderHovers()}
        <div className="atlas__facts">
          <Slider autoplay arrows={false} ref={this.sliderRef}>
            {factList.map((fact, id) => (
              <div className="fact" key={fact.text}>
                {id + 1}
                {'. '}
                {fact.text}
              </div>
            ))}
          </Slider>
        </div>
      </div>
    );
  }
}

export default Atlas;
