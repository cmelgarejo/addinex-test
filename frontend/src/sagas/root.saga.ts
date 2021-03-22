import { all, fork } from 'redux-saga/effects';
import IntervalSaga from './interval/saga';
import EventsSaga from './events/saga';

export default function* rootSaga() {
  yield all([fork(IntervalSaga), fork(EventsSaga)]);
}
