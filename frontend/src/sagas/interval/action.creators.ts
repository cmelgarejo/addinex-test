import * as actions from './action.types';

export function setIntervalRequest(interval: Number): actions.SetIntervalRequestAction {
  return {
    type: actions.SET_INTERVAL_REQUEST,
    interval,
  };
}

export function setIntervalSuccess(): actions.SetIntervalSuccessAction {
  return {
    type: actions.SET_INTERVAL_SUCCESS,
  };
}

export function setIntervalFailure(error: Error | string): actions.SetIntervalFailureAction {
  return {
    type: actions.SET_INTERVAL_FAILURE,
    error,
  };
}

export function getInterval(): actions.GetIntervalAction {
  return {
    type: actions.GET_INTERVAL,
  };
}

export function getIntervalRequest(): actions.GetIntervalRequestAction {
  return {
    type: actions.GET_INTERVAL_REQUEST,
  };
}

export function getIntervalSuccess(interval: Number): actions.GetIntervalSuccessAction {
  return {
    type: actions.GET_INTERVAL_SUCCESS,
    interval,
  };
}

export function getIntervalFailure(error: Error | string): actions.GetIntervalFailureAction {
  return {
    type: actions.GET_INTERVAL_FAILURE,
    error,
  };
}
