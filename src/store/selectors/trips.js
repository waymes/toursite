const domainSelector = state => state.trips;

export const tripListSelector = state => domainSelector(state).tripList;
