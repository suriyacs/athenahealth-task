import { all, fork } from 'redux-saga/effects';

import siteSaga from './home/sagas';

export function* rootSaga() {
  yield all([fork(siteSaga)]);
}
