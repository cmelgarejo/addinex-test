import * as actions from './action.types';

export function setEventRequest(event: string): actions.SetEventRequestAction {
  return {
    type: actions.SET_EVENT_REQUEST,
    event,
  };
}

export function setEventSuccess(): actions.SetEventSuccessAction {
  return {
    type: actions.SET_EVENT_SUCCESS,
  };
}

export function setEventFailure(error: Error | string): actions.SetEventFailureAction {
  return {
    type: actions.SET_EVENT_FAILURE,
    error,
  };
}

export function getEvents(): actions.GetEventsAction {
  return {
    type: actions.GET_EVENTS,
  };
}

export function getEventsRequest(): actions.GetEventsRequestAction {
  return {
    type: actions.GET_EVENTS_REQUEST,
  };
}

export function getEventsSuccess(events: any): actions.GetEventsSuccessAction {
  return {
    type: actions.GET_EVENTS_SUCCESS,
    events,
  };
}

export function getEventsFailure(error: Error | string): actions.GetEventsFailureAction {
  return {
    type: actions.GET_EVENTS_FAILURE,
    error,
  };
}

export function deleteEventRequest(eventId: string): actions.DeleteEventRequestAction {
  return {
    type: actions.DELETE_EVENT_REQUEST,
    eventId,
  };
}

export function deleteEventSuccess(): actions.DeleteEventSuccessAction {
  return {
    type: actions.DELETE_EVENT_SUCCESS,
  };
}

export function deleteEventFailure(error: Error | string): actions.DeleteEventFailureAction {
  return {
    type: actions.DELETE_EVENT_FAILURE,
    error,
  };
}
