export const SET_INTERVAL_REQUEST = 'intervalActionTypes/SET_INTERVAL_REQUEST';
export interface SetIntervalRequestAction {
  type: typeof SET_INTERVAL_REQUEST;
  interval: Number;
}

export const SET_INTERVAL_SUCCESS = 'intervalActionTypes/SET_INTERVAL_SUCCESS';
export interface SetIntervalSuccessAction {
  type: typeof SET_INTERVAL_SUCCESS;
}

export const SET_INTERVAL_FAILURE = 'intervalActionTypes/SET_INTERVAL_FAILURE';
export interface SetIntervalFailureAction {
  type: typeof SET_INTERVAL_FAILURE;
  error: Error | string;
}

export const GET_INTERVAL = 'intervalActionTypes/GET_INTERVAL';
export interface GetIntervalAction {
  type: typeof GET_INTERVAL;
}

export const GET_INTERVAL_REQUEST = 'intervalActionTypes/GET_INTERVAL_REQUEST';
export interface GetIntervalRequestAction {
  type: typeof GET_INTERVAL_REQUEST;
}

export const GET_INTERVAL_SUCCESS = 'intervalActionTypes/GET_INTERVAL_SUCCESS';
export interface GetIntervalSuccessAction {
  type: typeof GET_INTERVAL_SUCCESS;
  interval: Number;
}

export const GET_INTERVAL_FAILURE = 'intervalActionTypes/GET_INTERVAL_FAILURE';
export interface GetIntervalFailureAction {
  type: typeof GET_INTERVAL_FAILURE;
  error: Error | string;
}

export type IntervalAction =
  | SetIntervalRequestAction
  | SetIntervalSuccessAction
  | SetIntervalFailureAction
  | GetIntervalAction
  | GetIntervalRequestAction
  | GetIntervalSuccessAction
  | GetIntervalFailureAction;
