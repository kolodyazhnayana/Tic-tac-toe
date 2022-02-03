import './index.css'
import {SquareProps} from "../../interfaces/square"

const Square = ({ value, handle }: SquareProps) => {
    return (
        <div
            className={`square ${value}`}
            onClick={() => handle()}
        />
    )
}

export default Square
