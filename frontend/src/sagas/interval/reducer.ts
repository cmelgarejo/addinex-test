import * as actions from './action.types';

export interface IntervalState {
  interval: Number;
}

const initialState: IntervalState = {
  interval: 0,
};

export default function intervalReducer(
  state: IntervalState = initialState,
  action: actions.IntervalAction
): IntervalState {
  switch (action.type) {
    case actions.SET_INTERVAL_REQUEST:
    case actions.GET_INTERVAL_SUCCESS:
      return {
        interval: action.interval,
      };
    default:
      return state;
  }
}
