import wordData from '../wordData';
import * as c from './../actions/ActionTypes';

export default (state = wordData, action) => {
  switch(action.type) {
    case c.NEW_GAME:
      return wordData[Math.floor(Math.random() * wordData.length)];
    default :
      return state;
  }
} 