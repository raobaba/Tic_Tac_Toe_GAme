
interface isSquareProps {
    onClick: () => void,
    value: "X" | "0" | null,
    winner:string|null
}
const Square: React.FC<isSquareProps> = ({ onClick, value,winner }) => {
    if (!value) {
        return (
            <button className="board-button"
                onClick={onClick}
                disabled={Boolean(winner)} 
                >
                {value}
            </button>
        )
    }
    return (
        <button className={`board-button square_${value}`}
            disabled>{value}
            </button >
     )
}
export default Square;