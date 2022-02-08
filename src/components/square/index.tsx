import './index.css'
import {SquareProps} from "../../interfaces/square"

const Square = ({ value, handle }: SquareProps) => {
    return (
        <button
            className={`square ${value}`}
            onClick={handle}
            disabled={Boolean(value)}
        />
    )
}

export default Square
