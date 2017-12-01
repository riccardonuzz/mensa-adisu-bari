import { DATE_SELECTED } from '../actions/index';

export default function (state = [], action) {
  //console.log('Action received', action);

  switch (action.type) {
    case DATE_SELECTED:
      return action.payload;

    default:
      //console.log('An error has occurred.');
      return state;
  }
}