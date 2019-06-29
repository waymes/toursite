const domainSelector = state => state.trips;

export const tripListSelector = state => domainSelector(state).tripList;
export const selectedTripSelector = state => domainSelector(state).selectedTrip;
