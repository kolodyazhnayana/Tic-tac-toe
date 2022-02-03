import './index.css'
import clsx from "clsx"
import {FieldProps} from "../../interfaces/field"

const Square = ({ value, id, handle }: FieldProps) => {

    let className = clsx(
        'square',
        value === 'cross' && 'cross',
        value === 'zero' && 'zero'
    )

    return (
        <div
            className={className}
            onClick={() => handle(id)}
        />
    )
}

export default Square
