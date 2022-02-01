import './index.css'
import clsx from "clsx"
import {$fieldModel, changeField} from "../../models/field"
import {useStore} from "effector-react"
import {$player, changePlayer} from "../../models/players"

interface ISquare {
    state: number,
    id: number
}

const Square = ({ state, id }: ISquare) => {
    const fields = useStore($fieldModel)
    const player = useStore($player)

    let className = clsx(
        'square',
        state === 1 && 'cross',
        state === 2 && 'zero'
    )

    const handleClick = (id: number) => {
        changePlayer(!player)
        let field = fields[id]
        player ? field.value = 1 : field.value = 2
        const res = fields.map(el => el.id !== field.id ? el : field)
        changeField(res)
    }

    return (
        <div
            className={className}
            onClick={() => handleClick(id)}
        />
    )
}

export default Square
