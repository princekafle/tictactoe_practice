import { useState } from "react"

const initialboard = ()=>Array(9).fill(null);

const useTictactoe = ()=>{
    const [board, setboard]= useState(initialboard)

   const[isXNext, setisXNext] =useState(true);
    
   const winning_patterns = [];

    const calculate_winner =()=>{}

    const handleclick =(index)=>{
        // check winner

        const winner = calculate_winner(board)
        if(winner || board[index])return;

        const newBoard = [...board];
        newBoard[index]= isXNext?"X":"O";
        setboard(newBoard);
        setisXNext(!isXNext);

    }

    const getstatusmsg =()=>{}

    const resetgame =()=>{}

    return{board, handleclick, calculate_winner, getstatusmsg, resetgame };

}
export default useTictactoe;