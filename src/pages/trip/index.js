import { connect } from 'react-redux';

import GeneralLayout from '../../layouts/general';
import Title from '../../components/common/title';
import Section from '../../components/common/section';
import Button from '../../components/common/button';
import Gallery from './components/gallery';

import {
  tempFacts, whyFacts, includedFacts, whatsIncludedFacts, additionalExpences,
} from './constants';
import { fetchTrip } from '../../store/actions/trips';
import { selectedTripSelector } from '../../store/selectors/trips';
import { tripPropType } from '../../prop-types/trips';

import './style.styl';

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
    return (
      <div className="tourpage__header">
        <h4>Думаешь, куда поехать на майские праздники?</h4>
        <h3>Открой для себя магию Востока!</h3>
        <h2>29 апреля - 11 мая</h2>
        <h1>ТУР В ИРАН</h1>
      </div>
    );
  }

  render() {
    const { selectedTrip } = this.props;

    if (!selectedTrip) return null;

    const headerProps = {
      backgroundUrls: [selectedTrip.image],
      onScrollButtonClick: this.scrollToFacts,
      children: this.renderHeaderChildren(),
    };
    return (
      <GeneralLayout title="Тур в Иран" className="tourpage container" headerProps={headerProps}>
        <Section className="tourpage__section tourpage__section_1" ref={this.factsRef}>
          <Title>Готовьтесь к самому потрясающему приключению:</Title>
          <div className="tourpage__facts">
            {tempFacts.map(fact => (
              <div key={fact.title}>
                <h3>{fact.title}</h3>
                <p>{fact.description}</p>
              </div>
            ))}
          </div>
        </Section>
        <Section className="tourpage__section tourpage__section_2">
          <Title>Что нас ждёт в поездке?</Title>
          <div className="tourpage__includedFacts">
            {includedFacts.map(fact => (
              <div className="includedFact" key={fact.url}>
                <div className="includedFact__image" style={{ backgroundImage: `url(${fact.url})` }} />
                <p className="includedFact__description">{fact.description}</p>
              </div>
            ))}
          </div>
        </Section>
        <Section className="tourpage__section tourpage__section_3">
          <Title>Почему Иран?</Title>
          <div className="tourpage__whyFacts">
            {whyFacts.map(fact => (
              <div key={fact.title}>
                <h3>{fact.title}</h3>
                <p>{fact.description}</p>
              </div>
            ))}
          </div>
        </Section>
        <Section className="tourpage__section tourpage__section_5">
          <Title>Посмотрите, как это было в прошлый раз:</Title>
          <Gallery />
        </Section>
        <Section className="tourpage__section tourpage__section_5">
          <Title>Что включено?</Title>
          <div className="tourpage__whatsIncludedFacts">
            {whatsIncludedFacts.map(fact => (
              <div className="fact">
                <div className="fact__head">
                  <i className={fact.icon} />
                  <h3 className="fact__title">{fact.title}</h3>
                </div>
                <p className="fact__description">{fact.description}</p>
              </div>
            ))}
          </div>
          <Title>Стоимость: 1099 $</Title>
          <Title secondary>Дополнительные расходы:</Title>
          <div className="tourpage__additionalExpences">
            {additionalExpences.map(expence => (
              <div>
                <h3>{expence.title}</h3>
                <p>{expence.description}</p>
              </div>
            ))}
          </div>
          <Button>Подать заявку</Button>
        </Section>
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
