import { Component } from 'react';
import Slider from 'react-slick';

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
          <div
            className="atlas__hoverItem"
            onClick={() => this.sliderRef.current.slickGoTo(id)}
            key={id}
          >
            <span>{id + 1}</span>
          </div>
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
              <div className="fact" key={id}>
                <h3>
                  {id + 1}
                  {'. '}
                  {fact.title}
                </h3>
                <p>{fact.details}</p>
              </div>
            ))}
          </Slider>
        </div>
      </div>
    );
  }
}

export default Atlas;
