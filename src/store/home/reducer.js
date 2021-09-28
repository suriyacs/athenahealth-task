import {
    FETCH_DOSE_DETAIL_REQUEST,
    FETCH_DOSE_DETAIL_SUCCESS,
    FETCH_DOSE_DETAIL_FAILURE,
    UPDATE_DOSE_DETAIL_REQUEST,
    UPDATE_DOSE_DETAIL_SUCCESS,
    UPDATE_DOSE_DETAIL_FAILURE
  } from './actionTypes';
  
  
  const initialState = {
    pending: false,
    countryDetail: {},
    countryList: [],
    statesList: {},
    error: null,
  };
  
  const homeReducer = (state = initialState, action) => {
    switch (action.type) {
      case FETCH_DOSE_DETAIL_REQUEST:
        return {
          ...state,
          pending: true,
        };
      case FETCH_DOSE_DETAIL_SUCCESS:
        return {
          ...state,
          pending: false,
          countryDetail: action.payload.countryDetail,
          countryList: action.payload.countryList,
          statesList: action.payload.statesList,
          error: null,
        };
      case FETCH_DOSE_DETAIL_FAILURE:
        return {
          ...state,
          pending: false,
          countryDetail: {},
          countryList: [],
          statesList: {},
          error: action.payload.error,
        };
      case UPDATE_DOSE_DETAIL_REQUEST:
        return {
          ...state,
          pending: true,
        };
      case UPDATE_DOSE_DETAIL_SUCCESS:
        return {
          ...state,
          pending: false,
          countryDetail: action.payload.countryDetail,
          error: null,
        }
      case UPDATE_DOSE_DETAIL_FAILURE:
          return {
            ...state,
            pending: false,
            countryDetail: {},
            error: action.payload.error,
          };
      default:
        return {
          ...state,
        };
    }
  };

  export default homeReducer;
  