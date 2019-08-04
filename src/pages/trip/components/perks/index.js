import PropTypes from 'prop-types';

import Title from '../../../../components/title';

import './style.styl';

const Perks = ({ includedList, additionalList }) => (
  <div className="perks">
    <div className="perks__includedList">
      <Title>В стоимость включены:</Title>
      {includedList.map(({ text }) => (
        <div key={text} className="perk">
          <i className="fas fa-check" />
          <p className="perk__details">{text}</p>
        </div>
      ))}
    </div>
    <div className="perks__additionalList">
      <Title>Дополнительно:</Title>
      {additionalList.map(({ text }) => (
        <div key={text} className="perk">
          <i className="fas fa-plus" />
          <p className="perk__details">{text}</p>
        </div>
      ))}
    </div>
  </div>
);

Perks.propTypes = {
  includedList: PropTypes.arrayOf(PropTypes.shape()),
  additionalList: PropTypes.arrayOf(PropTypes.shape()),
};

Perks.defaultProps = {
  includedList: [],
  additionalList: [],
};

export default Perks;
