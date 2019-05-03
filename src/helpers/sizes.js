import withSizes from 'react-sizes';

export const smallWidth = 576;
export const mediumWidth = 768;
export const largeWidth = 992;
export const extraLargeWidth = 1200;

export default ({
  withMobile, withTablet, withDesktop, withLargeDesktop,
}) => {
  const mapSizesToProps = ({ width }) => {
    const config = {};
    if (withMobile) {
      config.isMobile = width < smallWidth;
    }
    if (withTablet) {
      config.isTablet = width >= smallWidth && width < mediumWidth;
    }
    if (withDesktop) {
      config.isDesktop = width >= mediumWidth && width < largeWidth;
    }
    if (withLargeDesktop) {
      config.isLargeDesktop = width >= largeWidth;
    }
    return config;
  };
  return withSizes(mapSizesToProps);
};
