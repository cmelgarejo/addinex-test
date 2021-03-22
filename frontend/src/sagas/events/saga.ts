import { put, call, takeEvery, all, fork } from 'redux-saga/effects';
import { deleteEvent, fetchEvents, postEvent } from './services';
import * as actionCreators from './action.creators';
import * as actionTypes from './action.types';

function* onLoadEvents() {
  try {
    yield put(actionCreators.getEventsRequest());
    const { data } = yield call(fetchEvents);
    yield put(actionCreators.getEventsSuccess(data));
  } catch (error) {
    yield put(actionCreators.getEventsFailure(error.response.data.error));
  }
}

function* onSaveEvent(event: actionTypes.SetEventRequestAction) {
  try {
    const { data } = yield call(postEvent, event.event);
    yield put(actionCreators.setEventSuccess());
    yield put(actionCreators.getEvents());
  } catch (error) {
    yield put(actionCreators.getEventsFailure(error.response.data.error));
  }
}

function* onDeleteEvent(event: actionTypes.DeleteEventRequestAction) {
  try {
    const { data } = yield call(deleteEvent, event.eventId);
    yield put(actionCreators.deleteEventSuccess());
    yield put(actionCreators.getEvents());
  } catch (error) {
    yield put(actionCreators.getEventsFailure(error.response.data.error));
  }
}

function* watchOnLoadEvent() {
  yield takeEvery(actionTypes.GET_EVENTS, onLoadEvents);
  yield takeEvery(actionTypes.SET_EVENT_REQUEST, onSaveEvent);
  yield takeEvery(actionTypes.DELETE_EVENT_REQUEST, onDeleteEvent);
}

export default function* eventSaga() {
  yield all([fork(watchOnLoadEvent), fork(onLoadEvents)]);
}
