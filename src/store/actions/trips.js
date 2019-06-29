import request from '../../helpers/request';
import { dispatch } from '../index';

import { TRIPS__FETCH_TRIPS_SUCCESS, TRIPS__FETCH_TRIP_SUCCESS } from '../constants/trips';

export const fetchTripsSuccessAction = tripList => ({
  type: TRIPS__FETCH_TRIPS_SUCCESS,
  tripList,
});

export const fetchTrips = async () => {
  try {
    const tripList = await request('/trips');
    dispatch(fetchTripsSuccessAction(tripList));
  } catch (error) {
    console.log(error);
  }
};

export const fetchTripSuccessAction = trip => ({
  type: TRIPS__FETCH_TRIP_SUCCESS,
  trip,
});

export const fetchTrip = async (tripId) => {
  try {
    const trip = await request(`/trips/${tripId}`);
    dispatch(fetchTripSuccessAction(trip));
  } catch (error) {
    console.log(error);
  }
};
