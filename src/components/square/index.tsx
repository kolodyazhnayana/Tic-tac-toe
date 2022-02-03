import './index.css'
import clsx from "clsx"
import {$fieldModel, updateFieldItem} from "../../models/field"
import {useStore} from "effector-react"
import {$player, changePlayer} from "../../models/players"
import {FieldI} from "../../interfaces/field"

const Square = ({ value, id }: FieldI) => {
    const fields = useStore($fieldModel)
    const player = useStore($player)

    let className = clsx(
        'square',
        value === 1 && 'cross',
        value === 2 && 'zero'
    )

    const handleClick = (id: number) => {
        changePlayer(player === 'cross' ? 'zero' : 'cross')
        let field = fields[id]
        player === 'cross' ? field.value = 1 : field.value = 2
        updateFieldItem(field)
    }

    return (
        <div
            className={className}
            onClick={() => handleClick(id)}
        />
    )
}

export default Square
