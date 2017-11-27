import { combineReducers } from 'redux';
import BusReducer from './reducer_bus_data';

const rootReducer = combineReducers({
  buses: BusReducer
});

export default rootReducer;
