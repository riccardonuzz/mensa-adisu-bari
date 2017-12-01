import _ from 'lodash';
import { FETCH_MEALS, FETCH_MEAL } from '../actions/index';

export default function (state = [], action) {
  //console.log('Action received', action);

  switch (action.type) {
    case FETCH_MEALS:
      // let meals = [...state, action.payload.data];
      // return meals[0];
      return _.mapKeys(action.payload.data, 'id');      
      // or return state.concat(action.payload.data); is the same ;)

    case FETCH_MEAL:
      // let meal = [...state, action.payload];
      // //console.log("FETCH_MEALLLL: ", meals2[0].payload);
      // let meal2 = meal[0].payload;
      // return meal2;
      // return state[action.payload];
      // return {...state, [action.payload.data.id]: action.payload.data};
      return _.mapKeys(action.payload.data, 'id');      

    default:
      return state;
      //console.log('An error has occurred.');
  }
}