import PropTypes from 'prop-types';
import { withRouter } from 'next/router';

export default Component => withRouter(
  class extends React.Component {
    static propTypes = {
      router: PropTypes.shape({}).isRequired,
    }

    componentDidMount() {
      const { router } = this.props;

      if (window && !router.query.target) {
        window.scrollTo(0, 0);
      }
    }

    render() {
      return <Component {...this.props} />;
    }
  },
);
