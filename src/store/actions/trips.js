import request from '../../helpers/request';
import { dispatch } from '../index';

import * as constants from '../constants/trips';

export const fetchTrips = async () => {
  try {
    const tripList = await request('/trips');
    dispatch({ type: constants.TRIPS__FETCH_TRIPS_SUCCESS, tripList });
  } catch (error) {
    console.log(error);
  }
};

export const fetchTrip = async (tripId) => {
  try {
    const trip = await request(`/trips/${tripId}`);
    dispatch({ type: constants.TRIPS__FETCH_TRIP_SUCCESS, trip });
  } catch (error) {
    console.log(error);
  }
};

export const openRegisterToTripModal = () => {
  dispatch({ type: constants.TRIPS__OPEN_REGISTER_TO_TRIP_MODAL });
};
export const closeRegisterToTripModal = () => {
  dispatch({ type: constants.TRIPS__CLOSE_REGISTER_TO_TRIP_MODAL });
};

export const registerToTrip = async (values) => {
  try {
    await request('/trips/request', { method: 'POST', body: values });
  } catch (error) {
    console.log(error);
  }
};

export const subscribeToTrip = async (values) => {
  try {
    await request('/trips/subscribe', { method: 'POST', body: values });
  } catch (error) {
    console.log(error);
  }
};
