export const SET_EVENT_REQUEST = 'eventActionTypes/SET_EVENT_REQUEST';
export interface SetEventRequestAction {
  type: typeof SET_EVENT_REQUEST;
  event: string;
}

export const SET_EVENT_SUCCESS = 'eventActionTypes/SET_EVENT_SUCCESS';
export interface SetEventSuccessAction {
  type: typeof SET_EVENT_SUCCESS;
}

export const SET_EVENT_FAILURE = 'eventActionTypes/SET_EVENT_FAILURE';
export interface SetEventFailureAction {
  type: typeof SET_EVENT_FAILURE;
  error: Error | string;
}

export const GET_EVENTS = 'eventActionTypes/GET_EVENTS';
export interface GetEventsAction {
  type: typeof GET_EVENTS;
}

export const GET_EVENTS_REQUEST = 'eventActionTypes/GET_EVENTS_REQUEST';
export interface GetEventsRequestAction {
  type: typeof GET_EVENTS_REQUEST;
}

export const GET_EVENTS_SUCCESS = 'eventActionTypes/GET_EVENTS_SUCCESS';
export interface GetEventsSuccessAction {
  type: typeof GET_EVENTS_SUCCESS;
  events: Array<any>;
}

export const GET_EVENTS_FAILURE = 'eventActionTypes/GET_EVENTS_FAILURE';
export interface GetEventsFailureAction {
  type: typeof GET_EVENTS_FAILURE;
  error: Error | string;
}

export const DELETE_EVENT_REQUEST = 'eventActionTypes/DELETE_EVENT_REQUEST';
export interface DeleteEventRequestAction {
  type: typeof DELETE_EVENT_REQUEST;
  eventId: string;
}

export const DELETE_EVENT_SUCCESS = 'eventActionTypes/DELETE_EVENT_SUCCESS';
export interface DeleteEventSuccessAction {
  type: typeof DELETE_EVENT_SUCCESS;
}

export const DELETE_EVENT_FAILURE = 'eventActionTypes/DELETE_EVENT_FAILURE';
export interface DeleteEventFailureAction {
  type: typeof DELETE_EVENT_FAILURE;
  error: Error | string;
}

export type EventAction =
  | SetEventRequestAction
  | SetEventSuccessAction
  | SetEventFailureAction
  | GetEventsAction
  | GetEventsSuccessAction
  | GetEventsRequestAction
  | GetEventsFailureAction
  | DeleteEventRequestAction
  | DeleteEventSuccessAction
  | DeleteEventFailureAction;
