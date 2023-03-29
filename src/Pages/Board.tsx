import { Grid } from "semantic-ui-react";
import Square from './../Components/Square';

const Board: React.FC = () => {
    return (
        <div className="board-wrapper">
            <p>Hey,X it's your turn</p>
            <Grid columns={3} centered>
                {
                    Array(9).fill(null).map((val, ind) => (
                        <Grid.Column className="board-column">
                            <Square />
                        </Grid.Column>
                    ))
                }
            </Grid>
        </div>
    )
}
export default Board;