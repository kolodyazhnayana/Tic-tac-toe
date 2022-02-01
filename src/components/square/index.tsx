import './index.css'
import clsx from "clsx"

interface ISquare {
    state: number,
    id: number
}

const Square = ({ state, id }: ISquare) => {
    let className = clsx(
        'square',
        state === 1 && 'cross',
        state === 2 && 'zero'
    )

    return (
        <div
            className={className}
            onClick={() => console.log(id)}
        />
    )
}

export default Square
