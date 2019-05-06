import { Component } from 'react';
import PropTypes from 'prop-types';
import Router from 'next/router';

import Link from '../../../../../components/common/link';
import EButton from '../../../../../components/common/element-button';

import withSizes from '../../../../../helpers/sizes';

import './style.styl';

class HeaderMenu extends Component {
  state = { isBurgerActive: false };

  componentDidUpdate() {
    const { isBurgerActive } = this.state;
    const { isMobile, isTablet } = this.props;

    if (isBurgerActive && !isMobile && !isTablet) {
      this.toggleBurger();
    }
  }

  toggleBurger = () => {
    const { isBurgerActive } = this.state;

    if (!isBurgerActive) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }
    this.setState({ isBurgerActive: !isBurgerActive });
  }

  abuseClick = onClick => () => {
    if (onClick) {
      onClick();
    }
    this.toggleBurger();
  }

  renderMenu() {
    const {
      scrollToTours, scrollToCalendar, scrollToSubscribeForm,
    } = this.props;

    return (
      <nav className="header-menu__nav">
        <ul className="navlist">
          <li>
            <EButton className="link" onClick={this.abuseClick(scrollToTours)}>
              Путешествия
            </EButton>
          </li>
          <li>
            <EButton className="link" onClick={this.abuseClick(scrollToCalendar)}>
              Календарь
            </EButton>
          </li>
          <li><Link href="/about">О нас</Link></li>
          <li>
            <EButton
              className="navlist__subscribeButton"
              onClick={this.abuseClick(scrollToSubscribeForm)}
            >
              Подписаться
            </EButton>
          </li>
        </ul>
      </nav>
    );
  }

  render() {
    const { isBurgerActive } = this.state;
    const { isMobile, isTablet } = this.props;

    const showBurger = isMobile || isTablet;
    const burgerClasses = ['header-menu__burger'];
    if (isBurgerActive) {
      burgerClasses.push('header-menu__burger_active');
    }
    return (
      <div className="header-menu container">
        <Link href="/" className="header-menu__logo" onClick={this.abuseClick}>
          Trip
          <span>Adventure</span>
        </Link>
        {showBurger && (
          <EButton className={burgerClasses.join(' ')} onClick={this.toggleBurger}>
            <span />
            <span />
            <span />
          </EButton>
        )}
        {this.renderMenu()}
      </div>
    );
  }
}

HeaderMenu.propTypes = {
  scrollToTours: PropTypes.func,
  scrollToCalendar: PropTypes.func,
  scrollToSubscribeForm: PropTypes.func,
  isMobile: PropTypes.bool,
  isTablet: PropTypes.bool,
};

HeaderMenu.defaultProps = {
  isMobile: false,
  isTablet: false,
  scrollToTours: () => Router.push('/?target=tours'),
  scrollToCalendar: () => Router.push('/?target=calendar'),
  scrollToSubscribeForm: () => Router.push('/?target=subscribeForm'),
};

export default withSizes({ withMobile: true, withTablet: true })(HeaderMenu);
