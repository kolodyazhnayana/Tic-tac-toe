import {forward, sample} from "effector"
import {
    $crossWinCombination,
    $fieldModel,
    $isWinner,
    $winnerFields,
    $zeroWinCombination,
    changeField,
    changeWinner,
    markField
} from "./index"
import {$player, changePlayer} from "../players"
import {isDetermineWinner} from "../../helpers/isDetermineWinner"

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

sample({
    clock: markField,
    source: {
        cross: $crossWinCombination,
        zero: $zeroWinCombination,
        model: $winnerFields
    },
    fn: (state) => {
        if (isDetermineWinner(state.cross, state.model)) return 'cross'
        if (isDetermineWinner(state.zero, state.model)) return 'zero'
        return null
    },
    target: $isWinner
})

forward({
    from: changeField,
    to: $fieldModel
})

forward({
    from: changeWinner,
    to: $isWinner
})
