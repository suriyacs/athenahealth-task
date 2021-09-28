import {
    FETCH_DOSE_DETAIL_REQUEST,
    FETCH_DOSE_DETAIL_FAILURE,
    FETCH_DOSE_DETAIL_SUCCESS,
    UPDATE_DOSE_DETAIL_REQUEST,
    UPDATE_DOSE_DETAIL_SUCCESS,
    UPDATE_DOSE_DETAIL_FAILURE
  } from './actionTypes';
  
  export const fetchDoseDetailRequest = () => ({
    type: FETCH_DOSE_DETAIL_REQUEST,
  });
  
  export const fetchDoseDetailSuccess = (
    payload
  ) => ({
    type: FETCH_DOSE_DETAIL_SUCCESS,
    payload,
  });
  
  export const fetchDoseDetailFailure = (
    payload
  ) => ({
    type: FETCH_DOSE_DETAIL_FAILURE,
    payload,
  });

  export const updateDoseDetailRequest = (countryName, stateName, cityDetail) => ({
    type: UPDATE_DOSE_DETAIL_REQUEST,
    countryName,
    stateName,
    cityDetail
  });

  export const updateDoseDetailSuccess = (payload) => ({
    type: UPDATE_DOSE_DETAIL_SUCCESS,
    payload
  });

  export const updateDoseDetailFailure = (payload) => ({
    type: UPDATE_DOSE_DETAIL_FAILURE,
    payload
  });
  