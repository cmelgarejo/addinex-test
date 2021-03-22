import { connect } from 'react-redux';
import { AppState } from '../../src/sagas/root.reducer';
import { GET_EVENTS } from '../../src/sagas/events/action.types';
import Component from './Component';

const mapStateToProps = (state: AppState) => {
  return {
    events: state.event.events,
    isLoading: state.isLoading[GET_EVENTS],
    error: state.error[GET_EVENTS],
  };
};

export default connect(mapStateToProps)(Component);
