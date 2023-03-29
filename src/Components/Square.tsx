
interface isSquareProps {
    onClick: () => void,
    value: "X" | "0" | null
}
const Square: React.FC<isSquareProps> = ({ onClick, value }) => {
    if (!value) {
        return (
            <button className="board-button"
                onClick={onClick}>
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