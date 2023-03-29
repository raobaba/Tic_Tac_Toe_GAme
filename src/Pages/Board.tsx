

const Board:React.FC = () =>{
    return (
        <div>
          <p>Hey,X it's your turn</p>
          <div>
            {
                Array(9).fill(null).map((val,ind) => (
                    <p>Square</p>
                ))
            }
          </div>
        </div>
    )
}
export default Board;