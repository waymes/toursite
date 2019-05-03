import React, { PureComponent } from 'react';

import GeneralLayout from '../../layouts/general';
import Header from './components/header';
import HeaderSlider from './components/header-slider';
import TourSlider from './components/tour-slider';
import Atlas from './components/atlas';
import Calendar from './components/calendar';
import SubscribeForm from './components/subscribe-form';
import EButton from '../../components/common/element-button';

import './style.styl';

class Home extends PureComponent {
  constructor(props) {
    super(props);
    this.toursRef = React.createRef();
    this.calendarRef = React.createRef();
    this.subscribeFormRef = React.createRef();
  }

  scrollIntoView = (ref) => {
    if (!ref) return false;
    ref.scrollIntoView({ behavior: 'smooth' });
    return true;
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
    return (
      <GeneralLayout className="homepage">
        <section className="homepage__section1">
          <HeaderSlider />
          <div className="background__content">
            <div className="homepage__headerHolder">
              <Header
                scrollToTours={this.scrollToTours}
                scrollToCalendar={this.scrollToCalendar}
                scrollToSubscribeForm={this.scrollToSubscribeForm}
              />
            </div>
            <h1 className="homepage__moto">Живи. Люби. Путешествуй...</h1>
            <EButton
              className="homepage__scrolldown"
              onMouseEnter={this.scrollToTours}
              onClick={this.scrollToTours}
            />
          </div>
        </section>
        <section className="homepage__section2 container" ref={this.toursRef}>
          <h2 className="homepage__title">Выбери приключение:</h2>
          <TourSlider />
        </section>
        <section className="homepage__section3 container">
          <h2 className="homepage__title">10 фактов:</h2>
          <Atlas />
        </section>
        <section className="homepage__section4 container" ref={this.calendarRef}>
          <h2 className="homepage__title">Календарь туров:</h2>
          <Calendar />
        </section>
        <section className="homepage__section5" ref={this.subscribeFormRef}>
          <h2 className="homepage__title">Новые приключения - в Вашем почтовом ящике:</h2>
          <SubscribeForm />
        </section>
      </GeneralLayout>
    );
  }
}

export default Home;
