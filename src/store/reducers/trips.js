import { TRIPS__FETCH_TRIPS_SUCCESS, TRIPS__FETCH_TRIP_SUCCESS } from '../constants/trips';

const initialState = {
  tripList: [],
  selectedTrip: null,
};

export default (state = initialState, action) => {
  switch (action.type) {
    case TRIPS__FETCH_TRIPS_SUCCESS:
      return {
        ...state,
        tripList: action.tripList,
      };
    case TRIPS__FETCH_TRIP_SUCCESS:
      return {
        ...state,
        selectedTrip: action.trip,
      };
    default:
      return state;
  }
};
