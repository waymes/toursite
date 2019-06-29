import PropTypes from 'prop-types';
import Head from 'next/head';
import 'moment/locale/ru';

import Header from '../components/header';
import Footer from '../components/footer';
import scrollToTop from '../hocs/scroll-to-top';

import '../../styles/main.styl';

const GeneralLayout = ({
  children, className, title, headerProps,
}) => (
  <div className="generalLayout">
    <Head>
      <title>{title}</title>
      <link
        rel="stylesheet"
        href="https://use.fontawesome.com/releases/v5.8.1/css/all.css"
        integrity="sha384-50oBUHEmvpQ+1lW4y57PTFmhCaXp0ML5d60M1M7uH2+nqUivzIebhndOJK28anvf"
        crossOrigin="anonymous"
      />
      <link rel="icon" href="/static/favicon.ico" />
    </Head>
    <Header {...headerProps} />
    <div className={className}>
      {children}
    </div>
    <Footer />
  </div>
);

GeneralLayout.propTypes = {
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
  title: PropTypes.string,
  headerProps: PropTypes.shape({}),
};

GeneralLayout.defaultProps = {
  className: '',
  title: 'TripAdventure',
  headerProps: {},
};

export default scrollToTop(GeneralLayout);
