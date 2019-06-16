import { TRIPS__FETCH_TRIPS_SUCCESS } from '../constants/trips';

const initialState = {
  tripList: [],
};

export default (state = initialState, action) => {
  switch (action.type) {
    case TRIPS__FETCH_TRIPS_SUCCESS:
      return {
        ...state,
        tripList: action.tripList,
      };
    default:
      return state;
  }
};
