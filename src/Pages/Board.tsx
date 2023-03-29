import { Grid } from "semantic-ui-react";
import Square from './../Components/Square';
import { useState, useEffect } from "react";
type Player ="X"|"0"|null;
const Board: React.FC = () => {
    const activePlayer = Math.round(Math.random()+1) === 1 ? "X":"0";
    const [currentPlayer,setCurrentPlayer] = useState<"X"|"0">(activePlayer);
    const [square,setSquare] = useState<Player[]>(Array(9).fill(null));
    const [winner,setWinner] = useState<string|null>(null)
    const setSquareValue=(ind:number)=>{
         const data = square.map((value,i)=>{
           if(ind===i){
            return currentPlayer;
           }
           return value;
         })
         setSquare(data);
         setCurrentPlayer(currentPlayer==="X" ? "0":"X")
        }
         const calCulateWinner = (square:Player[])=>{
           const possibleWinnerCombinations=[
            [0,1,2],
            [3,4,5],
            [6,7,8],
            [0,3,6],
            [1,4,7],
            [2,5,8],
            [2,4,6],
            [0,4,8]
           ];
          return possibleWinnerCombinations.map(combo=>{
            const [a,b,c] = combo;
              if(square[a]&&square[a]===square[b]&&square[a]===square[c]){
                return square[a];
              }
              return null;
           }).filter(data=>data)[0];
         }
         useEffect(()=>{
           const winnerPlayer = calCulateWinner(square)
           if(winnerPlayer){
               setWinner(`${winnerPlayer} is the Winner !`)
           }else if (!winner && !square.filter(square => !square).length) {
            setWinner('Both players won, Reload for New Game')
        }
         })
    
    return (
        <div className="board-wrapper">
            {
                winner ? <p>{winner}</p>:
                <p>Hey,{currentPlayer} it's your turn</p>
            }
            <Grid columns={3} centered>
                {
                    Array(9).fill(null).map((val, ind) => (
                        <Grid.Column className="board-column">
                            <Square
                             onClick={()=>setSquareValue(ind)} 
                             value={square[ind]}
                             winner={winner}
                             />
                        </Grid.Column>
                    ))
                }
            </Grid>
        </div>
    )
}
export default Board;