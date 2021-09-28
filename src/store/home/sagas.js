import { all, put, takeLatest, select } from 'redux-saga/effects';
import { toast } from 'react-toastify';
import DATA from '../../constants/data';
import _ from 'lodash';

import {
  fetchDoseDetailFailure,
  fetchDoseDetailSuccess,
  updateDoseDetailSuccess,
  updateDoseDetailFailure
} from './actions';
import { FETCH_DOSE_DETAIL_REQUEST, UPDATE_DOSE_DETAIL_REQUEST } from './actionTypes';
// import { getSitesList } from './services';
/*
  Worker Saga: Fired on FETCH_DOSE_DETAIL_REQUEST action
*/
function* fetchSiteListSaga() {
  try {
    const state = yield select();
    const { home: { countryDetail, countryList, statesList } } = state;
    yield put(
      fetchDoseDetailSuccess({
        countryDetail: _.keys(countryDetail).length ? countryDetail : DATA.countryDetailSource,
        countryList: _.keys(countryList).length ? countryList : DATA.countryListSource,
        statesList: _.keys(statesList).length ? statesList : DATA.statesListSource
      })
    );
  } catch (e) {
    yield put(
      fetchDoseDetailFailure({
        error: e.message,
      })
    );
  }
}

function* updateDoseDetailSaga(action) {
  try {
    const state = yield select();
    const { home: { countryDetail } } = state;
    const { countryName, stateName, cityDetail} = action;
    //updating the city dose detail
    console.log("Payload to update == countryName: ", countryName, " stateName: ", stateName, " Updated Details: ", cityDetail);
    countryDetail[countryName][stateName][cityDetail.displayName.toLowerCase()] = cityDetail;
    toast.success('Updated Successfully!');
    yield put(
      updateDoseDetailSuccess({
        countryDetail: countryDetail,
      })
    );
  } catch(e) {
    toast.success('Error while updating the information!');
    yield put(
      updateDoseDetailFailure({
        error: e.message,
      })
    );
  }
}

/*
  Starts worker saga on latest dispatched `FETCH_HISTORY_REQUEST` action.
  Allows concurrent increments.
*/
function* historySaga() {
  yield all([takeLatest(FETCH_DOSE_DETAIL_REQUEST, fetchSiteListSaga)]);
  yield all([takeLatest(UPDATE_DOSE_DETAIL_REQUEST, updateDoseDetailSaga)])
}

export default historySaga;
