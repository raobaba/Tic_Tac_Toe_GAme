
interface isSquareProps {
    onClick:()=> void
}
const Square: React.FC<isSquareProps> = ({onClick}) => {
    return (
        <button className="board-button"
           onClick={onClick}>
        </button>
    )
}
export default Square;