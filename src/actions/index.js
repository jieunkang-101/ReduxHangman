export const newGame = () => ({
  type: 'NEW_GAME'
});

export const gameOver = () => ({
  type: 'GAME_OVER'
});

export const isWinner = () => ({
  type: 'IS_WINNER'
});

export const guessLetter = (guess) => {
  return {
    type: 'GUESS_LETTER',
    payload: guess
  }
};