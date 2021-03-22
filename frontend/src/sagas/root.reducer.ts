import { combineReducers } from 'redux';
import isLoadingReducer from './root.reducer.isLoading';
import errorReducer from './root.reducer.error';
import intervalReducer from './interval/reducer';
import eventReducer from './events/reducer';

const rootReducer = combineReducers({
  isLoading: isLoadingReducer,
  error: errorReducer,
  interval: intervalReducer,
  event: eventReducer,
});

export type AppState = ReturnType<typeof rootReducer>;

export default rootReducer;
