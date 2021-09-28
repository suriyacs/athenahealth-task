import {
    FETCH_SITE_LIST_REQUEST,
    FETCH_SITE_LIST_FAILURE,
    FETCH_SITE_LIST_SUCCESS,
  } from './actionTypes';
  
  export const fetchSiteListRequest = () => ({
    type: FETCH_SITE_LIST_REQUEST,
  });
  
  export const fetchSiteListSuccess = (
    payload
  ) => ({
    type: FETCH_SITE_LIST_SUCCESS,
    payload,
  });
  
  export const fetchSiteListFailure = (
    payload
  ) => ({
    type: FETCH_SITE_LIST_FAILURE,
    payload,
  });
  