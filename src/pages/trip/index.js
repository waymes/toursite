import { connect } from 'react-redux';
import Error from 'next/error';
import moment from 'moment';

import GeneralLayout from '../../layouts/general';
import Title from '../../components/common/title';
import Section from '../../components/common/section';
import Button from '../../components/common/button';
import RegisterToTripModal from './components/register-to-trip-modal';
import Gallery from './components/gallery';

import { fetchTrip, openRegisterToTripModal } from '../../store/actions/trips';
import { selectedTripSelector } from '../../store/selectors/trips';
import { tripPropType } from '../../prop-types/trips';

import './style.styl';

moment.locale('ru'); // TODO: make dynamic from client

class TripPage extends React.Component {
  static async getInitialProps({ query }) {
    await fetchTrip(query.id);
  }

  constructor(props) {
    super(props);
    this.factsRef = React.createRef();
  }

  scrollIntoView = (ref) => {
    if (!ref) return;
    ref.scrollIntoView({ behavior: 'smooth' });
  }

  scrollToFacts = () => {
    this.scrollIntoView(this.factsRef.current);
  }

  renderHeaderChildren() {
    const { selectedTrip } = this.props;

    return (
      <div className="tourpage__header">
        <h4>{selectedTrip.title1}</h4>
        <h3>{selectedTrip.title2}</h3>
        <h2>
          {moment(selectedTrip.dateFrom).format('DD MMMM')}
          {' - '}
          {moment(selectedTrip.dateTo).format('DD MMMM')}
        </h2>
        <h1>{selectedTrip.name}</h1>
      </div>
    );
  }

  render() {
    const { selectedTrip } = this.props;

    if (!selectedTrip) return <Error statusCode={404} />;

    const headerProps = {
      backgroundUrls: [selectedTrip.image],
      onScrollButtonClick: this.scrollToFacts,
      children: this.renderHeaderChildren(),
    };
    return (
      <GeneralLayout title="Тур в Иран" className="tourpage container" headerProps={headerProps}>
        <Section className="tourpage__section tourpage__section_1" ref={this.factsRef}>
          <Title>{selectedTrip.firstBlockTitle}</Title>
          <div className="tourpage__facts">
            {selectedTrip.firstBlockItems.map(item => (
              <div key={item.title}>
                <h3>{item.title}</h3>
                <p>{item.details}</p>
              </div>
            ))}
          </div>
        </Section>
        <Section className="tourpage__section tourpage__section_2">
          <Title>{selectedTrip.secondBlockTitle}</Title>
          <div className="tourpage__includedFacts">
            {selectedTrip.secondBlockItems.map(item => (
              <div className="includedFact" key={item.image}>
                <div className="includedFact__image" style={{ backgroundImage: `url(${item.image})` }} />
                <p className="includedFact__description">{item.text}</p>
              </div>
            ))}
          </div>
        </Section>
        <Section className="tourpage__section tourpage__section_3">
          <Title>{selectedTrip.thirdBlockTitle}</Title>
          <div className="tourpage__whyFacts">
            {selectedTrip.thirdBlockItems.map(item => (
              <div key={item.title}>
                <h3>{item.title}</h3>
                <p>{item.details}</p>
              </div>
            ))}
          </div>
        </Section>
        <Section className="tourpage__section tourpage__section_5">
          <Title>{selectedTrip.fourthBlockTitle}</Title>
          <Gallery images={selectedTrip.fourthBlockItems} />
        </Section>
        <Section className="tourpage__section tourpage__section_5">
          <Title>{selectedTrip.fifthBlockTitle}</Title>
          <div className="tourpage__whatsIncludedFacts">
            {selectedTrip.fifthBlockItems.map(item => (
              <div className="fact">
                <div className="fact__head">
                  <i className={item.icon} />
                  <h3 className="fact__title">{item.title}</h3>
                </div>
                <p className="fact__description">{item.details}</p>
              </div>
            ))}
          </div>
          <Title>{`Стоимость: ${selectedTrip.price} $`}</Title>
          <Title secondary>Дополнительные расходы:</Title>
          <div className="tourpage__additionalExpences">
            {selectedTrip.additionalExpenses.map(expence => (
              <div>
                <h3>{expence.title}</h3>
                <p>{expence.details}</p>
              </div>
            ))}
          </div>
          <Button onClick={openRegisterToTripModal}>Подать заявку</Button>
        </Section>
        <RegisterToTripModal />
      </GeneralLayout>
    );
  }
}

TripPage.propTypes = {
  selectedTrip: tripPropType,
};

TripPage.defaultProps = {
  selectedTrip: null,
};

const mapStateToProps = state => ({
  selectedTrip: selectedTripSelector(state),
});

export default connect(mapStateToProps)(TripPage);
