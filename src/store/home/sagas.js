import { all, call, put, takeLatest } from 'redux-saga/effects';

import { fetchSiteListFailure, fetchSiteListSuccess } from './actions';
import { FETCH_SITE_LIST_REQUEST } from './actionTypes';
// import { getSitesList } from './services';

/*
  Worker Saga: Fired on FETCH_SITE_LIST_REQUEST action
*/
function* fetchSiteListSaga() {
  try {
    const response = [
        {
            avatar: "https://reqres.in/img/faces/1-image.jpg",
            email: "george.bluth@reqres.in",
            first_name: "George",
            id: 1,
            last_name: "Bluth"
        },
        {
            avatar: "https://reqres.in/img/faces/1-image.jpg",
            email: "george.bluth@reqres.in",
            first_name: "Button",
            id: 1,
            last_name: "Bluth"
        },
        {
            avatar: "https://reqres.in/img/faces/1-image.jpg",
            email: "george.bluth@reqres.in",
            first_name: "Sam",
            id: 1,
            last_name: "Bluth"
        }
    ];
    yield put(
      fetchSiteListSuccess({
        siteList: response,
      })
    );
  } catch (e) {
    yield put(
      fetchSiteListFailure({
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
  yield all([takeLatest(FETCH_SITE_LIST_REQUEST, fetchSiteListSaga)]);
}

export default historySaga;
