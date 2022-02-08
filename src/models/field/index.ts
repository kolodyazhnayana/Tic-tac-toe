import {createEvent, createStore} from 'effector'
import {FieldI} from "../../interfaces/field"

export const changeField = createEvent<FieldI[]>('change-field')

export const markField = createEvent<number>('mark-field')

export const $fieldModel = createStore<FieldI[]>(
    Array(9).fill({}).map((field, index) => ({...field, id: index}))
)
