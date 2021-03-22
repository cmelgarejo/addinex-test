import { Dispatch } from 'react';
import { connect } from 'react-redux';
import { AppState } from '../../src/sagas/root.reducer';
import { EventAction } from '../../src/sagas/events/action.types';
import { setEventRequest } from '../../src/sagas/events/action.creators';
import { GET_EVENTS } from '../../src/sagas/events/action.types';
import Component from '../PostComponent/Component';

const mapStateToProps = (state: AppState) => {
  return {
    error: state.error[GET_EVENTS],
  };
};

const mapDispatchToProps = (dispatch: Dispatch<EventAction>) => ({
  onClick: (newEvent) => {
    dispatch(setEventRequest(newEvent));
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(Component);
