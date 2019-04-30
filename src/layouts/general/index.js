import PropTypes from 'prop-types';
import Head from 'next/head';

import Footer from '../footer';

import '../../styles/main.styl';

const GeneralLayout = ({ children, className, title }) => (
  <>
    <Head>
      <title>{title}</title>
      <link
        rel="stylesheet"
        href="https://use.fontawesome.com/releases/v5.8.1/css/all.css"
        integrity="sha384-50oBUHEmvpQ+1lW4y57PTFmhCaXp0ML5d60M1M7uH2+nqUivzIebhndOJK28anvf"
        crossOrigin="anonymous"
      />
    </Head>
    <div className={className}>
      {children}
    </div>
    <Footer />
  </>
);

GeneralLayout.propTypes = {
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
  title: PropTypes.string,
};

GeneralLayout.defaultProps = {
  className: '',
  title: 'TripAdventure',
};

export default GeneralLayout;
