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
    this.FACT_TIMEOUT = 1000;
  }

  componentWillUnmount() {
    const { activeFactDeleteTimouts } = this.state;

    Object.values(activeFactDeleteTimouts)
      .forEach(timeout => clearTimeout(timeout));
  }

  addActiveFact = idToAdd => () => {
    const { activeFactIds, activeFactDeleteTimouts } = this.state;

    if (activeFactIds.includes(idToAdd)) {
      clearTimeout(activeFactDeleteTimouts[idToAdd]);
      this.setState({
        activeFactIds: [
          ...activeFactIds.filter(id => id !== idToAdd),
          idToAdd,
        ],
      });
      return;
    }

    this.setState({ activeFactIds: [...activeFactIds, idToAdd] });
  }

  addRemoveTimout = id => () => {
    const { activeFactIds, activeFactDeleteTimouts } = this.state;

    if (!activeFactIds.includes(id)) {
      return;
    }

    clearTimeout(activeFactDeleteTimouts[id]);
    this.setState({
      activeFactDeleteTimouts: {
        ...activeFactDeleteTimouts,
        [id]: setTimeout(this.removeActiveFact(id), this.FACT_TIMEOUT),
      },
    });
  }

  removeActiveFact = idToRemove => () => {
    const { activeFactIds } = this.state;

    this.setState({
      activeFactIds: activeFactIds.filter(id => id !== idToRemove),
    });
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
      <div className={`fact fact_${factId}`} style={{ zIndex: key + 30 }} key={key}>
        <strong>{fact.title}</strong>
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
            onMouseLeave={this.addRemoveTimout(id)}
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
