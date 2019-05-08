import PropTypes from 'prop-types';
import { withRouter } from 'next/router';

import GeneralLayout from '../../layouts/general';
import Title from '../../components/common/title';
import Section from '../../components/common/section';
import TourSlider from './components/tour-slider';
import Atlas from './components/atlas';
import Calendar from './components/calendar';
import SubscribeForm from './components/subscribe-form';

import { backgroundUrls } from './constants';

import './style.styl';

class Home extends React.PureComponent {
  constructor(props) {
    super(props);
    this.toursRef = React.createRef();
    this.calendarRef = React.createRef();
    this.subscribeFormRef = React.createRef();
  }

  componentDidMount() {
    const { router } = this.props;

    const { target } = router.query;
    if (target) {
      this.scrollIntoView(this[`${target}Ref`].current);
    }
  }

  scrollIntoView = (ref) => {
    if (!ref) return;
    ref.scrollIntoView({ behavior: 'smooth' });
  }

  scrollToTours = () => {
    this.scrollIntoView(this.toursRef.current);
  }

  scrollToCalendar = () => {
    this.scrollIntoView(this.calendarRef.current);
  }

  scrollToSubscribeForm = () => {
    this.scrollIntoView(this.subscribeFormRef.current);
  }

  render() {
    const headerProps = {
      backgroundUrls,
      children: <h1 className="homepage__moto">Живи. Люби. Путешествуй...</h1>,
      scrollToCalendar: this.scrollToCalendar,
      scrollToSubscribeForm: this.scrollToSubscribeForm,
      scrollToTours: this.scrollToTours,
      onScrollButtonClick: this.scrollToTours,
    };
    return (
      <GeneralLayout className="homepage container" headerProps={headerProps}>
        <Section className="homepage__section_tourslider" ref={this.toursRef}>
          <Title>Выбери приключение:</Title>
          <TourSlider />
        </Section>
        <Section className="homepage__section_atlas">
          <Title>10 фактов:</Title>
          <Atlas />
        </Section>
        <Section className="homepage__section_calendar" ref={this.calendarRef}>
          <Title>Календарь туров:</Title>
          <Calendar />
        </Section>
        <Section className="homepage__section_subscribe" ref={this.subscribeFormRef}>
          <Title>Новые приключения - в Вашем почтовом ящике:</Title>
          <SubscribeForm />
        </Section>
      </GeneralLayout>
    );
  }
}

Home.propTypes = {
  router: PropTypes.shape({
    query: PropTypes.shape(),
  }).isRequired,
};

export default withRouter(Home);
