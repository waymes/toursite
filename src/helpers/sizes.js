import withSizes from 'react-sizes';

export const smallWidth = 576;
export const mediumWidth = 768;
export const largeWidth = 992;
export const extraLargeWidth = 1200;

export default () => {
  const mapSizesToProps = ({ width }) => ({
    isMobile: width < smallWidth,
    isTablet: width >= smallWidth && width < mediumWidth,
    isDesktop: width >= mediumWidth && width < largeWidth,
    isLargeDesktop: width >= largeWidth,
  });
  return withSizes(mapSizesToProps);
};
