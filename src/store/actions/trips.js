import request from '../../helpers/request';

import { TRIPS__FETCH_TRIPS_SUCCESS } from '../constants/trips';

export const fetchTripsSuccess = tripList => ({
  type: TRIPS__FETCH_TRIPS_SUCCESS,
  tripList,
});

export const fetchTrips = async () => {
  const tripList = await request('/trips');
  return tripList;
};
