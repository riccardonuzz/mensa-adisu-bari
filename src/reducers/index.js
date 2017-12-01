import { combineReducers } from 'redux';
import MealsReducer from './reducer_meals';
import DateReducer from './reducer_date';

const rootReducer = combineReducers({
  meals: MealsReducer,
  date: DateReducer
});

export default rootReducer;
