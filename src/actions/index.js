import axios from 'axios';
import jsonSource from '../../finale_autunno-inverno.json';

export const FETCH_MEALS = 'FETCH_MEALS';
export const DATE_SELECTED = 'DATE_SELECTED';
export const FETCH_MEAL = 'FETCH_MEAL';

export function fetchMeals() {
  const request = axios.get(jsonSource);

  //console.log('Request:', request);

  return {
    type: FETCH_MEALS,
    payload: request
  }
}

export function fetchMeal(id) {
  const request = axios.get(jsonSource);
  
    //console.log('Request:', request);
  
    return {
      type: FETCH_MEAL,
      payload: request
    }
}


export function setSelectedDate(date){
  return {
      type: DATE_SELECTED,
      payload: date
  }
}