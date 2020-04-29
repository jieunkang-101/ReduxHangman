import guessReducer from '../../reducers/guess-reducer';

describe('guessReducer', () => {

  test('Should return default state if there is no action type passed into the reducer', () => {
    expect(guessReducer({}, { type: null })).toEqual({});
  });

  test('Should successfully add a guedded letter to payload', () => {
    expect(guessReducer({}, { type: 'GUESS_LETTER', payload:'a' })).toEqual({"payload": "a"});
  });

  test('Should successfully change state to gameOver', () => {
    expect(guessReducer({}, { type: 'GAME_OVER' })).toEqual({});
  });

  test('Should successfully change state to isWinner', () => {
    expect(guessReducer({}, { type: 'IS_WINNER' })).toEqual({});
  });

});  