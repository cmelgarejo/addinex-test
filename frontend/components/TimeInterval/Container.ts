import { connect } from 'react-redux';
import { AppState } from '../../src/sagas/root.reducer';
import { GET_INTERVAL } from '../../src/sagas/interval/action.types';
import Component from './Component';

const mapStateToProps = (state: AppState) => {
  return {
    interval: state.interval.interval,
    isLoading: state.isLoading[GET_INTERVAL],
    error: state.error[GET_INTERVAL],
  };
};

export default connect(mapStateToProps)(Component);
