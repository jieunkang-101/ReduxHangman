import React from 'react';
import Title from './Title'

class GameControl extends React.Component{


  render() {
    return(
      <div className="game">
        <header>
          <Title content="Hangman" />
        </header>  

      </div>
    )  
  }  
}

export default GameControl;