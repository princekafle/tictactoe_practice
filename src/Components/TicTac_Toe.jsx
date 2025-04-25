import React from 'react'
import { useState } from 'react';
import useTictactoe from '../hooks/Usetictactoe';


const TicTac_Toe = () => {
 
    const {board, handleclick, calculate_winner, resetgame, getstatusmsg} = useTictactoe()
      
       
      return (
       <div className='game'>
       <div className="status">{getstatusmsg}
       <button className='reset-button' onClick={resetgame}>Reset Game</button>
       </div>
    
       <div className="board">
        {board.map((b,index)=>{
          return(
            <button className='cell' 
            key={index}
            onClick={handleclick(index)}
            disabled = {b!== null}
            >{b}</button>
          )
        })}
       </div>
    
    
       </div>
      );
    
}

export default TicTac_Toe