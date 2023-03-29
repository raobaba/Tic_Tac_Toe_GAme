import { Grid } from "semantic-ui-react";
import Square from './../Components/Square';
import { useState } from "react";
const Board: React.FC = () => {
    const activePlayer = Math.round(Math.random()+1) === 1 ? "X":"0";
    const [currentPlayer,setCurrentPlayer] = useState<"X"|"0">(activePlayer);
    const [square,setSquare] = useState(Array(9).fill(null))
    const setSquareValue=(ind:number)=>{
         square.map((value,i)=>{
           if(ind===i){
            return 
           }
         })
    }
    return (
        <div className="board-wrapper">
            <p>Hey,{currentPlayer} it's your turn</p>
            <Grid columns={3} centered>
                {
                    Array(9).fill(null).map((val, ind) => (
                        <Grid.Column className="board-column">
                            <Square onClick={()=>setSquareValue(ind)} />
                        </Grid.Column>
                    ))
                }
            </Grid>
        </div>
    )
}
export default Board;