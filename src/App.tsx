import React, {useState,useEffect} from 'react';
import './App.css';
import BoardComponent from './components/BoardComponent';
import LostFigures from './components/LostFigures';
import { Board } from './models/Board';
import { Colors } from './models/Colors';
import { Player } from './models/Player';
import Timer from './components/Timer';

function App() {
  const [board, setBoard] = useState(new Board())
  const [whitePlayer, setWhitePlayer] = useState(new Player(Colors.WHITE))
  const [blackPlayer, setBlackPlayer] = useState(new Player(Colors.BLACK))
  const [currentPlayer, setCurrentPlayer] = useState<Player|null>(null)
  useEffect(()=>{
    restart()
    setCurrentPlayer(whitePlayer);
  },[])

  function restart () {
    const newBoard = new Board();
    newBoard.initCells();
    setBoard(newBoard)
    newBoard.addFigures()
  }

  function swapPlayer() {
    setCurrentPlayer(currentPlayer?.color===Colors.WHITE ? blackPlayer : whitePlayer)
  }
  
  return (
    <div className='container'>
    <h3>Current Player: {currentPlayer?.color.toUpperCase()}</h3>
    <div className="app">
    <Timer 
    restart={restart}
    currentPlayer ={currentPlayer}
    />
    <BoardComponent 
    board={board} 
    setBoard={setBoard}
    currentPlayer = {currentPlayer}
    swapPlayer = {swapPlayer}
    />
    <div className='lost_wrapper'>
    <LostFigures title = "Black Figures:" figures= {board.lostBlackFigures}/>
    <LostFigures title = "White Figures" figures= {board.losstWhiteFigures}/>
    </div>
    </div>
    </div>
 
  );
}

export default App;
