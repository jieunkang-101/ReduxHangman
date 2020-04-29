import React from 'react';
import Title from './Title'

class GameControl extends React.Component{


  render() {
    return(
      <header>
        <Title content="Hangman" />
      </header>  
    )  
  }  
}

export default GameControl;