import { Component } from 'react';

import { factList } from '../../constants';

import './style.styl';

class Atlas extends Component {
  constructor(props) {
    super(props);
    this.state = {
      activeFactIds: [],
      activeFactDeleteTimouts: {},
    };
    this.FACT_TIMEOUT = 3000;
  }

  componentWillUnmount() {
    const { activeFactDeleteTimouts } = this.state;

    Object.values(activeFactDeleteTimouts)
      .forEach(timeout => clearTimeout(timeout));
  }

  addActiveFact = factId => () => {
    const { activeFactIds, activeFactDeleteTimouts } = this.state;

    if (activeFactIds.includes(factId)) {
      clearTimeout(activeFactDeleteTimouts[factId]);
      this.setState({
        activeFactIds: [
          ...activeFactIds.filter(id => id !== factId),
          factId,
        ],
        activeFactDeleteTimouts: {
          ...activeFactDeleteTimouts,
          [factId]: setTimeout(this.removeActiveFact(factId), this.FACT_TIMEOUT),
        },
      });
      return;
    }

    this.setState({
      activeFactIds: [...activeFactIds, factId],
      activeFactDeleteTimouts: {
        ...activeFactDeleteTimouts,
        [factId]: setTimeout(this.removeActiveFact(factId), this.FACT_TIMEOUT),
      },
    });
  }

  removeActiveFact = factId => () => {
    const { activeFactIds } = this.state;

    this.setState({ activeFactIds: activeFactIds.filter(id => id !== factId) });
  }

  removeAllActiveFacts = () => {
    const { activeFactDeleteTimouts } = this.state;

    Object.values(activeFactDeleteTimouts)
      .forEach(timeout => clearTimeout(timeout));
    this.setState({ activeFactIds: [] });
  }

  renderFact = (factId, key) => {
    const fact = factList[factId];

    return (
      <div className={`fact fact_${factId}`} style={{ zIndex: key + 30 }}>
        {fact.title}
        <br />
        {fact.details}
      </div>
    );
  }

  renderHovers() {
    return (
      <div className="atlas__hovers">
        {factList.map((fact, id) => (
          <div
            className="atlas__hoverItem"
            onMouseEnter={this.addActiveFact(id)}
            // eslint-disable-next-line react/no-array-index-key
            key={id}
          >
            <span>{id + 1}</span>
          </div>
        ))}
        <div className="atlas__hoverItem" onMouseEnter={this.removeAllActiveFacts} />
      </div>
    );
  }

  render() {
    const { activeFactIds } = this.state;

    console.log(activeFactIds)
    return (
      <div className="atlas">
        <div className="atlas__facts">
          {activeFactIds.map(this.renderFact)}
        </div>
        {this.renderHovers()}
      </div>
    );
  }
}

export default Atlas;
