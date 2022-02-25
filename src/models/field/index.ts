import {combine, createEvent, createStore} from 'effector'
import {FieldI} from "../../interfaces/field"
import {PlayerT} from "../../interfaces/player"

export const changeField = createEvent<FieldI[]>('change-field')

export const markField = createEvent<number>('mark-field')

export const $fieldModel = createStore<FieldI[]>(
    Array(9).fill({}).map((field, index) => ({...field, id: index}))
)

export const $winnerFields = createStore<number[][]>([
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
        [0, 4, 8],
        [2, 4, 6]
])

export const $crossWinCombination = combine($fieldModel, fields => fields.filter(item => item.value === "cross").map(item => item.id))
export const $zeroWinCombination = combine($fieldModel, fields => fields.filter(item => item.value === "zero").map(item => item.id))

export const $isWinner = createStore<PlayerT>(null)
