import wordReducer from '../../reducers/word-reducer';
import wordData from '../../wordData';

describe('wordReducer', () => {

  test('Should return default state if there is no action type passed into the reducer', () => {
    expect(wordReducer({}, { type: null })).toEqual({});
  });

  test('Should successfully place a new word to play new game', () => {
    expect(wordReducer(wordData, { type: 'NEW_GAME' })).toEqual("randomWord");
  });
});  