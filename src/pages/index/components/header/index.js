import { Component } from 'react';
import PropTypes from 'prop-types';

import Link from '../../../../components/common/link';
import EButton from '../../../../components/common/element-button';

import withSizes from '../../../../helpers/sizes';

import './style.styl';

class Header extends Component {
  state = { isBurgerActive: false };

  toggleBurger = () => {
    const { isBurgerActive } = this.state;

    if (!isBurgerActive) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }
    this.setState({ isBurgerActive: !isBurgerActive });
  }

  renderMenu() {
    const {
      scrollToTours, scrollToCalendar, scrollToSubscribeForm,
    } = this.props;

    return (
      <nav className="header__menu">
        <ul className="menulist">
          <li>
            <EButton className="link" onClick={scrollToTours}>
              Путешествия
            </EButton>
          </li>
          <li>
            <EButton className="link" onClick={scrollToCalendar}>
              Календарь
            </EButton>
          </li>
          <li><Link href="/about">О нас</Link></li>
          <li>
            <EButton className="menulist__subscribeButton" onClick={scrollToSubscribeForm}>
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
    const burgerClasses = ['header__burger'];
    if (isBurgerActive) {
      burgerClasses.push('header__burger_active');
    }
    return (
      <header className="header container">
        <Link href="/" className="header__logo">
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
      </header>
    );
  }
}

Header.propTypes = {
  scrollToTours: PropTypes.func.isRequired,
  scrollToCalendar: PropTypes.func.isRequired,
  scrollToSubscribeForm: PropTypes.func.isRequired,
  isMobile: PropTypes.bool,
  isTablet: PropTypes.bool,
};

Header.defaultProps = {
  isMobile: false,
  isTablet: false,
};

export default withSizes({ withMobile: true, withTablet: true })(Header);
