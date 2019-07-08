import { connect } from 'react-redux';
import Error from 'next/error';
import moment from 'moment';

import GeneralLayout from '../../layouts/general';
import Title from '../../components/common/title';
import Section from '../../components/common/section';
import Button from '../../components/common/button';
import Link from '../../components/common/link';
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
        <h3 className="tourpage__header__title">{selectedTrip.title}</h3>
        <h2 className="tourpage__header__dates">
          {moment(selectedTrip.dateFrom).format('D')}
          {' - '}
          {moment(selectedTrip.dateTo).format('DD MMMM')}
        </h2>
        <h1 className="tourpage__header__name">{selectedTrip.name}</h1>
      </div>
    );
  }

  renderTextBlock({ title, details }) {
    return (
      <div key={title} className="textBlock">
        <h3 className="textBlock__title">{title}</h3>
        <p className="textBlock__details">{details}</p>
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
          <div className="tourpage__firstBlockItems">
            {selectedTrip.firstBlockItems.map(this.renderTextBlock)}
          </div>
        </Section>
        <Section className="tourpage__section tourpage__section_2">
          <Title>{selectedTrip.secondBlockTitle}</Title>
          <div className="tourpage__secondBlockItems">
            {selectedTrip.secondBlockItems.map(item => (
              <div className="imageFact" key={item.image} style={{ backgroundImage: `url(${item.image})` }}>
                <div className="imageFact__details">{item.text}</div>
              </div>
            ))}
          </div>
        </Section>
        <Section className="tourpage__section tourpage__section_3">
          <Title>{selectedTrip.thirdBlockTitle}</Title>
          <div className="tourpage__thirdBlockItems">
            {selectedTrip.thirdBlockItems.map(this.renderTextBlock)}
          </div>
        </Section>
        <Section className="tourpage__section tourpage__section_5">
          <Title>{selectedTrip.fourthBlockTitle}</Title>
          <Gallery images={selectedTrip.fourthBlockItems} />
        </Section>
        <Section className="tourpage__section tourpage__section_5">
          <Title>{selectedTrip.fifthBlockTitle}</Title>
          <div className="tourpage__fifthBlockItems">
            {selectedTrip.fifthBlockItems.map(item => (
              <div className="fact" key={item.title}>
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
          <div className="tourpage__additionalExpenses">
            {selectedTrip.additionalExpenses.map(this.renderTextBlock)}
          </div>
          <Button onClick={openRegisterToTripModal}>Подать заявку</Button>
          <Link href="/countries"><Button>Узнать больше о стране</Button></Link>
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
