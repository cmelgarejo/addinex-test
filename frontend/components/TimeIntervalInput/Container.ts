import { Dispatch } from 'react';
import { connect } from 'react-redux';
import { AppState } from '../../src/sagas/root.reducer';
import { IntervalAction } from '../../src/sagas/interval/action.types';
import { setIntervalRequest } from '../../src/sagas/interval/action.creators';
import { getEvents } from '../../src/sagas/events/action.creators';
import Component from '../PostComponent/Component';
import { EventAction } from '../../src/sagas/events/action.types';

const mapDispatchToProps = (dispatch: Dispatch<IntervalAction | EventAction>) => ({
  onClick: (newInterval) => {
    dispatch(setIntervalRequest(newInterval));
    dispatch(getEvents());
  },
});

export default connect(null, mapDispatchToProps)(Component);
