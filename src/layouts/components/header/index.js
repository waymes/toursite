import PropTypes from 'prop-types';
import classnames from 'classnames';

import HeaderMenu from './components/header-menu';
import HeaderBackgrounds from './components/header-backgrounds';
import EButton from '../../../components/element-button';

import './style.styl';

const Header = ({
  children, backgroundUrls, onScrollButtonClick, ...menuOptions
}) => {
  const isExpanded = !!backgroundUrls.length;
  return (
    <header className={classnames('header', { header_isExpanded: isExpanded })}>
      <HeaderBackgrounds backgroundUrls={backgroundUrls} />
      <div className="header__content">
        <div className="header__menuHolder">
          <HeaderMenu {...menuOptions} isExpanded={isExpanded} />
        </div>
        {children}
        {isExpanded && <EButton area-label="Scrolldown" className="header__scrolldown" onClick={onScrollButtonClick} />}
      </div>
    </header>
  );
};

Header.propTypes = {
  children: PropTypes.node,
  backgroundUrls: PropTypes.arrayOf(PropTypes.string),
  onScrollButtonClick: PropTypes.func,
};

Header.defaultProps = {
  children: null,
  backgroundUrls: [],
  onScrollButtonClick: () => {},
};

export default Header;
