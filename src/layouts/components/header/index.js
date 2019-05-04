import PropTypes from 'prop-types';

import HeaderMenu from './components/header-menu';
import HeaderBackgrounds from './components/header-backgrounds';

import './style.styl';

const Header = ({ children, backgroundUrls, ...menuOptions }) => (
  <header className="header">
    <HeaderBackgrounds backgroundUrls={backgroundUrls} />
    <div className="header__content">
      <div className="header__menuHolder">
        <HeaderMenu {...menuOptions} />
      </div>
      {children}
    </div>
  </header>
);

Header.propTypes = {
  children: PropTypes.node.isRequired,
  backgroundUrls: PropTypes.arrayOf(PropTypes.string),
};

Header.defaultProps = {
  backgroundUrls: [],
};

export default Header;
