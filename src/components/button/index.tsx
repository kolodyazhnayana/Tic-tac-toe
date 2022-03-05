import clsx from "clsx"
import { ButtonI } from "../../interfaces/button"
import './index.css'

const Button = ({ value, onClick, styleType }: ButtonI) => {
    const className = clsx('button', styleType && styleType)

    return (
        <button onClick={onClick} className={className}>
            {value}
        </button>
    )
}

export default Button