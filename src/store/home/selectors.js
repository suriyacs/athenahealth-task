import { createSelector } from 'reselect';


const getPending = (state) => state.home.pending;

const getSites = (state) => state.home.siteList;

const getError = (state) => state.home.error;

export const getSitesSelector = createSelector(
  getSites,
  (siteList) => siteList
);

export const getPendingSelector = createSelector(
  getPending,
  (pending) => pending
);

export const getErrorSelector = createSelector(getError, (error) => error);
