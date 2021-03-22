import * as actions from './action.types';

export interface EventState {
  event?: string;
  events?: Array<any>;
}

const initialState: EventState = {
  event: '',
  events: [],
};

export default function eventReducer(state: EventState = initialState, action: actions.EventAction): EventState {
  switch (action.type) {
    case actions.SET_EVENT_REQUEST:
      return {
        event: action.event,
      };
    case actions.GET_EVENTS_SUCCESS:
      return {
        events: action.events,
      };
    default:
      return state;
  }
}
