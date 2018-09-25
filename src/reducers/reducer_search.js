




import { FETCH_KEYWORD } from "../actions/index";

export default function (state = [], action) {
  switch (action.type) {
    case FETCH_KEYWORD:
      return [...state, action.payload];
  }
  return state;
}


