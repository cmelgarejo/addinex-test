import { put, call, takeEvery, all, fork } from 'redux-saga/effects';
import { fetchInterval, postInterval } from './services';
import * as actionCreators from './action.creators';
import * as actionTypes from './action.types';

function* onLoadInterval() {
  try {
    yield put(actionCreators.getIntervalRequest());
    const { data } = yield call(fetchInterval);
    yield put(actionCreators.getIntervalSuccess(data.numberOfSeconds));
  } catch (error) {
    yield put(actionCreators.getIntervalFailure(error.response.data.error));
  }
}

function* onSaveInterval(interval: actionTypes.SetIntervalRequestAction) {
  try {
    const { data } = yield call(postInterval, interval.interval);
    yield put(actionCreators.setIntervalSuccess());
    yield put(actionCreators.getIntervalSuccess(interval.interval));
  } catch (error) {
    yield put(actionCreators.getIntervalFailure(error.response.data.error));
  }
}

function* watchOnLoadInterval() {
  yield takeEvery(actionTypes.GET_INTERVAL, onLoadInterval);
  yield takeEvery(actionTypes.SET_INTERVAL_REQUEST, onSaveInterval);
}

export default function* intervalSaga() {
  yield all([
    fork(watchOnLoadInterval),
    fork(onLoadInterval),
  ]);
}
