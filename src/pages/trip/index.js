import { connect } from 'react-redux';
import Error from 'next/error';
import moment from 'moment';

import GeneralLayout from '../../layouts/general';
import Title from '../../components/title';
import Section from '../../components/section';
import Button from '../../components/button';
import Link from '../../components/link';
import RegisterToTripModal from './components/register-to-trip-modal';
import Gallery from './components/gallery';
import Perks from './components/perks';
import ShortInfo from '../../components/short-info';

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

  render() {
    const { selectedTrip } = this.props;

    if (!selectedTrip) return <Error statusCode={404} />;

    const headerProps = {
      backgroundUrls: [selectedTrip.backgroundImage],
      onScrollButtonClick: this.scrollToFacts,
      children: this.renderHeaderChildren(),
    };
    return (
      <GeneralLayout
        title={selectedTrip.name}
        className="tourpage container"
        headerProps={headerProps}
        meta={selectedTrip.description}
      >
        <Section className="tourpage__section tourpage__section_1" ref={this.factsRef}>
          <Title>{selectedTrip.blockTitle1}</Title>
          <div className="tourpage__firstBlockItems">
            {selectedTrip.blockItems1.map(({ title, text }) => (
              <div key={title} className="textBlock">
                <h3>{title}</h3>
                <p className="textBlock__details">{text}</p>
              </div>
            ))}
          </div>
        </Section>
        <Section className="tourpage__section tourpage__section_2">
          <Title>{selectedTrip.blockTitle2}</Title>
          <div className="tourpage__secondBlockItems">
            {selectedTrip.blockItems2.map(item => (
              <div className="imageFact" key={item.image} style={{ backgroundImage: `url(${item.image})` }}>
                <div className="imageFact__details">
                  <span>{item.text}</span>
                </div>
              </div>
            ))}
          </div>
        </Section>
        <Section className="tourpage__section tourpage__section_3">
          <Title>{selectedTrip.blockTitle3}</Title>
          <div className="tourpage__thirdBlockItems">
            {selectedTrip.blockItems3.map(({ text }) => (
              <div key={text} className="textBlock">
                <p className="textBlock__details" dangerouslySetInnerHTML={{ __html: text }} />
              </div>
            ))}
          </div>
        </Section>
        <Section className="tourpage__section tourpage__section_5">
          <Title>{selectedTrip.blockTitle4}</Title>
          <Gallery images={selectedTrip.blockItems4} />
        </Section>
        <Section className="tourpage__section tourpage__section_5">
          <Title>{`Стоимость: ${selectedTrip.price} $`}</Title>
          <Perks
            includedList={selectedTrip.includedList}
            additionalList={selectedTrip.additionalList}
          />
          <p className="tourpage__description">{selectedTrip.description}</p>
          <Button onClick={openRegisterToTripModal}>Подать заявку</Button>
          <Link href="/articles"><Button color="secondary">Узнать больше о стране</Button></Link>
        </Section>
        <Section className="tourpage__section tourpage__section_6">
          <Title>Путешествие проведёт</Title>
          <ShortInfo
            img="/static/about/zhossan.jpg"
            title={(
              <span>
                <span className="underscore">Алексей Жоссан</span>
                &nbsp;– составитель маршрутов, эксперт нестандартных путешествий и
                организатор поездок.
              </span>
            )}
          >
            Побывал в 40 странах, из них 30 проехал автостопом. Знает, как добраться из
            Куала-Лумпура в Киев за 10$ и найти необычные и захватывающие места в любой стране.
            Увлечения: астрономия, античная история, велоспорт, авторалли, urban exploration,
            видеосъемка.
          </ShortInfo>
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
