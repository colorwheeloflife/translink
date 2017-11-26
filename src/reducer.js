import { combineReducers } from 'redux';
import BusReducer from './reducer_bus_data';

const reducer = combineReducers({
  buses: BusReducer
});

export default reducer;
