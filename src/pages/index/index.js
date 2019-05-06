import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { withRouter } from 'next/router';

import GeneralLayout from '../../layouts/general';
import TourSlider from './components/tour-slider';
import Atlas from './components/atlas';
import Calendar from './components/calendar';
import SubscribeForm from './components/subscribe-form';

import { backgroundUrls } from './constants';

import './style.styl';

class Home extends PureComponent {
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
      <GeneralLayout className="homepage" headerProps={headerProps}>
        <section className="homepage__section1 container" ref={this.toursRef}>
          <h2 className="homepage__title">Выбери приключение:</h2>
          <TourSlider />
        </section>
        <section className="homepage__section2 container">
          <h2 className="homepage__title">10 фактов:</h2>
          <Atlas />
        </section>
        <section className="homepage__section3 container" ref={this.calendarRef}>
          <h2 className="homepage__title">Календарь туров:</h2>
          <Calendar />
        </section>
        <section className="homepage__section4" ref={this.subscribeFormRef}>
          <h2 className="homepage__title">Новые приключения - в Вашем почтовом ящике:</h2>
          <SubscribeForm />
        </section>
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
