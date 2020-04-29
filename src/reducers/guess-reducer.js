import * as c from '../actions/ActionTypes';

export default (state = {}, {type, payload } = {}) => {
  switch(type) {
    case c.NEW_GAME:
      return state = {}
    case c.GUESS_LETTER:
      return Object.assign({}, state, { ...state, payload});
    case c.GAME_OVER:
      return state;
    case c.IS_WINNER:
      return state;
    default:
      return state;      
  }
};