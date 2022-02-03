import {forward, sample} from "effector"
import {$fieldModel, changeField, markField} from "./index"
import {$player, changePlayer} from "../players"

sample({
    clock: markField,
    source: $player,
    fn: (player) => (player === 'cross' ? 'zero' : 'cross'),
    target: changePlayer
})

sample({
    clock: markField,
    source: {
        player: $player,
        fields: $fieldModel
    },
    fn: (state, id) => {
        let field = state.fields[id]
        field.value = state.player
        return state.fields.map(el => el.id !== id ? el : field)
    },
    target: changeField
})

forward({
    from: changeField,
    to: $fieldModel
})
