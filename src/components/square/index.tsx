import './index.css'
import {SquareProps} from "../../interfaces/square"

const Square = ({ value, handle, winner }: SquareProps) => {

    return (
        <button
            className={`square ${value}`}
            onClick={handle}
            disabled={Boolean(value) || winner}
        />
    )
}

export default Square
