import PropTypes from 'prop-types';
import Head from 'next/head';

import Footer from '../footer';

import '../../styles/main.styl';

const bootstrapConfig = {
  href: 'https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css',
  integrity: 'sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T',
  crossorigin: 'anonymous',
};

const GeneralLayout = ({ children, className, title }) => (
  <>
    <Head>
      <title>{title}</title>
      <link rel="stylesheet" {...bootstrapConfig} />
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
