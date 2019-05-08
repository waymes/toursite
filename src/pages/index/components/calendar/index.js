import Rating from 'react-rating';

import Link from '../../../../components/common/link';

import { tourList } from '../../constants';

import './style.styl';

const Calendar = () => (
  <div className="calendar-table__holder">
    <table className="calendar-table">
      <thead className="calendar-table__head">
        <tr>
          <th>Даты</th>
          <th>Название</th>
          <th>Место проведения</th>
          <th>Сложность</th>
          <th>Цена, грн</th>
        </tr>
      </thead>
      <tbody className="calendar-table__body">
        {tourList.map(tour => (
          <tr key={tour.id} className="calendar-table__row">
            <td>{tour.dates}</td>
            <td><Link href={`/tour?id=${tour.id}`} as={`/tour/${tour.id}`}>{tour.name}</Link></td>
            <td>{tour.place}</td>
            <td>
              <Rating
                readonly
                initialRating={tour.difficaltyLevel}
                fullSymbol={<i className="fas fa-hiking icon icon_full" />}
                emptySymbol={<i className="fas fa-hiking icon icon_empty" />}
              />
            </td>
            <td>{tour.price}</td>
          </tr>
        ))}
      </tbody>
    </table>
  </div>
);

export default Calendar;
