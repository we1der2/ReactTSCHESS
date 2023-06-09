import React, {FC, useState, useRef,useEffect} from 'react'
import { Colors } from '../models/Colors';
import { Player } from '../models/Player'

interface TimerProps {
    currentPlayer: Player|null;
    restart: ()=> void;
}
const Timer:FC<TimerProps> = ({currentPlayer, restart}) => {
   const [whiteTime,setWhiteTime] = useState(300);
   const [blackTime, setBlackTime] = useState(300);
    const timer = useRef<null | ReturnType<typeof setInterval>>(null)
    

    useEffect(()=>{
        startTimer()
    }, [currentPlayer])

   function startTimer(){
    if (timer.current){
        clearInterval(timer.current)
    }

   const callback= currentPlayer?.color === Colors.WHITE ? decrementWhiteTimer : decrementBlackTimer;
   timer.current = setInterval(callback, 1000)
   }

   function decrementBlackTimer(){
    setBlackTime(prev=>prev-1)
   }

   function decrementWhiteTimer(){
    setWhiteTime(prev=>prev-1)
   }

   const handleRestart=()=>{
    setBlackTime(300);
    setWhiteTime(300);
    restart()
   }
   
   

  return (
      <div className='aside'>
        <button onClick={handleRestart} >Restart Game</button>
        <div>
            <h2>Black - {blackTime>0 ? blackTime : 'Black is lose'}</h2>
            <h2>White - {whiteTime>0 ? whiteTime : 'White is lose'}</h2>
            <h2>{whiteTime===0? 'Black is win': blackTime=== 0 ? 'White is win' : ''}</h2>
        </div>
      </div>
  )
}

export default Timer
