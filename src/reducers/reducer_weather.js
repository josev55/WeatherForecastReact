import { FETCH_WEATHER } from '../actions/index';

export default function(state = [], action) {
  switch (action.type) {
    case FETCH_WEATHER:
      // ...state concatenates the data in state array to the new array i.e [action.payload.data, city, city, city]
      return [action.payload.data, ...state];
      break;
    default:
      return state;
  }
}
