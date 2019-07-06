import PropTypes from 'prop-types';
import moment from 'moment';

import Link from '../../../../components/common/link';

import { tripPropType } from '../../../../prop-types/trips';

import './style.styl';

const Calendar = ({ tripList }) => (
  <div className="calendar-table__holder">
    <table className="calendar-table">
      <thead className="calendar-table__head">
        <tr>
          <th>Даты</th>
          <th>Название</th>
          <th>Место проведения</th>
          <th>Цена, $</th>
        </tr>
      </thead>
      <tbody className="calendar-table__body">
        {tripList.map(trip => (
          <tr key={trip.id} className="calendar-table__row">
            <td>
              {moment(trip.dateFrom).format('D MMM')}
              {' - '}
              {moment(trip.dateTo).format('D MMM YYYY')}
            </td>
            <td><Link href={`/trip?id=${trip.id}`} as={`/trip/${trip.id}`}>{trip.name}</Link></td>
            <td>{trip.destination}</td>
            <td>{trip.price}</td>
          </tr>
        ))}
      </tbody>
    </table>
  </div>
);

Calendar.propTypes = {
  tripList: PropTypes.arrayOf(tripPropType),
};

Calendar.defaultProps = {
  tripList: [],
};

export default Calendar;
