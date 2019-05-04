import { Component } from 'react';
import PropTypes from 'prop-types';

import './style.styl';

class HeaderBackgrounds extends Component {
  state = { activeBackgroundId: 0 };

  interval = null;

  INTERVAL_TIME = 5000;

  componentDidMount() {
    this.interval = setInterval(this.changeBackground, this.INTERVAL_TIME);
  }

  componentWillUnmount() {
    clearInterval(this.interval);
  }

  changeBackground = () => {
    const { activeBackgroundId } = this.state;
    const { backgroundUrls } = this.props;

    const isLast = activeBackgroundId === backgroundUrls.length - 1;
    this.setState({
      activeBackgroundId: isLast ? 0 : activeBackgroundId + 1,
    });
  }

  render() {
    const { activeBackgroundId } = this.state;
    const { backgroundUrls } = this.props;

    return (
      <div className="headerBackgrounds">
        {backgroundUrls.map((url, id) => {
          const classNames = ['headerBackgrounds__image'];
          if (activeBackgroundId === id) {
            classNames.push('headerBackgrounds__image_active');
          }
          return (
            <div
              className={classNames.join(' ')}
              style={{ backgroundImage: `url(${url})` }}
              key={url}
            />
          );
        })}
      </div>
    );
  }
}

HeaderBackgrounds.propTypes = {
  backgroundUrls: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default HeaderBackgrounds;
