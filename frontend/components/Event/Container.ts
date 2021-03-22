import { Dispatch } from 'react';
import { connect } from 'react-redux';
import { deleteEventRequest } from '../../src/sagas/events/action.creators';
import { EventAction } from '../../src/sagas/events/action.types';
import { AppState } from '../../src/sagas/root.reducer';
import Component from './Component';

const mapStateToProps = (state: AppState) => {
  return {
    interval: state.interval.interval,
  };
};

const mapDispatchToProps = (dispatch: Dispatch<EventAction>) => ({
  DeleteEvent: (eventId) => {
    dispatch(deleteEventRequest(eventId));
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(Component);
