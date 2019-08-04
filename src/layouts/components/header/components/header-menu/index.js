import { Component } from 'react';
import PropTypes from 'prop-types';
import Router from 'next/router';
import classnames from 'classnames';

import Link from '../../../../../components/link';
import EButton from '../../../../../components/element-button';

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
    const { isMobile, isTablet, isExpanded } = this.props;

    const showBurger = isMobile || isTablet;
    return (
      <div className={classnames('header-menu', 'container', { 'header-menu_expanded': isExpanded })}>
        <Link href="/" className="header-menu__logo">
          Trip
          <span>Adventure</span>
        </Link>
        {showBurger && (
          <EButton
            className={classnames('header-menu__burger', { 'header-menu__burger_active': isBurgerActive })}
            onClick={this.toggleBurger}
            area-label="Burger"
          >
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
  isExpanded: PropTypes.bool.isRequired,
};

HeaderMenu.defaultProps = {
  isMobile: false,
  isTablet: false,
  scrollToTours: () => Router.push('/?target=tours'),
  scrollToCalendar: () => Router.push('/?target=calendar'),
  scrollToSubscribeForm: () => Router.push('/?target=subscribeForm'),
};

export default withSizes({ withMobile: true, withTablet: true })(HeaderMenu);
