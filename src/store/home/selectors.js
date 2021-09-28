import { createSelector } from 'reselect';


const getPending = (state) => state.home.pending;

const getCountryDetail = (state) => state.home.countryDetail;

const getError = (state) => state.home.error;

export const getCountryDetailSelector = createSelector(
  getCountryDetail,
  (countryDetail) => countryDetail
);

export const getPendingSelector = createSelector(
  getPending,
  (pending) => pending
);

export const getErrorSelector = createSelector(getError, (error) => error);
