import PropTypes from 'prop-types';

import HeaderMenu from './components/header-menu';
import HeaderBackgrounds from './components/header-backgrounds';
import EButton from '../../../components/common/element-button';

import './style.styl';

const Header = ({
  children, backgroundUrls, onScrollButtonClick, ...menuOptions
}) => (
  <header className="header">
    <HeaderBackgrounds backgroundUrls={backgroundUrls} />
    <div className="header__content">
      <div className="header__menuHolder">
        <HeaderMenu {...menuOptions} />
      </div>
      {children}
      <EButton className="header__scrolldown" onClick={onScrollButtonClick} />
    </div>
  </header>
);

Header.propTypes = {
  children: PropTypes.node.isRequired,
  backgroundUrls: PropTypes.arrayOf(PropTypes.string),
  onScrollButtonClick: PropTypes.func.isRequired,
};

Header.defaultProps = {
  backgroundUrls: [],
};

export default Header;
