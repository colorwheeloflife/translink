import { combineReducers } from 'redux';
import BusReducer from './reducer_bus_data';

const reducer = combineReducers({
  data: BusReducer
});

export default reducer;
