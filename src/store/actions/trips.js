import request from '../../helpers/request';
import { dispatch } from '../index';

import { TRIPS__FETCH_TRIPS_SUCCESS } from '../constants/trips';

export const fetchTripsSuccessAction = tripList => ({
  type: TRIPS__FETCH_TRIPS_SUCCESS,
  tripList,
});

export const fetchTrips = async () => {
  const tripList = await request('/trips');
  return tripList;
};

export const fetchTripsAction = async () => {
  try {
    const tripList = await fetchTrips();
    dispatch(fetchTripsSuccessAction(tripList));
  } catch (error) {
    // console.log(error);
  }
};
