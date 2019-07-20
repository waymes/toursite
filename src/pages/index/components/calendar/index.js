import PropTypes from 'prop-types';
import moment from 'moment';

import Link from '../../../../components/common/link';

import withSizes from '../../../../helpers/sizes';
import { tripPropType } from '../../../../prop-types/trips';

import './style.styl';

const Calendar = ({ tripList, isMobile, isTablet }) => {
  const showSmallDate = isMobile || isTablet;
  return (
    <div className="calendar-table__holder">
      <table className="calendar-table">
        <thead className="calendar-table__head">
          <tr>
            <th>Даты</th>
            <th>Название</th>
            {!isMobile && <th>Место проведения</th>}
            <th>Цена, $</th>
          </tr>
        </thead>
        <tbody className="calendar-table__body">
          {tripList.map((trip) => {
            const dateFrom = moment(trip.dateFrom).format(showSmallDate ? 'D.MM' : 'D MMM');
            const dateTo = moment(trip.dateTo).format(showSmallDate ? 'D.MM' : 'D MMM YYYY');
            return (
              <tr key={trip.id} className="calendar-table__row">
                <td>{`${dateFrom} - ${dateTo}`}</td>
                <td><Link href={`/trip?id=${trip.id}`} as={`/trip/${trip.id}`}>{trip.name}</Link></td>
                {!isMobile && <td>{trip.destination}</td>}
                <td>{trip.price}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

Calendar.propTypes = {
  tripList: PropTypes.arrayOf(tripPropType),
  isMobile: PropTypes.bool.isRequired,
  isTablet: PropTypes.bool.isRequired,
};

Calendar.defaultProps = {
  tripList: [],
};

export default withSizes()(Calendar);
