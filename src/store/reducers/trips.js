import * as constants from '../constants/trips';

const initialState = {
  tripList: [],
  selectedTrip: null,
  isRegisterToTripModalOpen: false,
};

export default (state = initialState, action) => {
  switch (action.type) {
    case constants.TRIPS__FETCH_TRIPS_SUCCESS:
      return {
        ...state,
        tripList: action.tripList,
      };
    case constants.TRIPS__FETCH_TRIP_SUCCESS:
      return {
        ...state,
        selectedTrip: action.trip,
      };
    case constants.TRIPS__OPEN_REGISTER_TO_TRIP_MODAL:
      return {
        ...state,
        isRegisterToTripModalOpen: true,
      };
    case constants.TRIPS__CLOSE_REGISTER_TO_TRIP_MODAL:
      return {
        ...state,
        isRegisterToTripModalOpen: false,
      };
    default:
      return state;
  }
};
