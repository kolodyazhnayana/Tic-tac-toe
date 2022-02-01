import {createEvent, createStore} from 'effector'
import {Field} from "../../interfaces/field"

export const changeField = createEvent<Field[]>('change-field')

export const $fieldModel = createStore<Field[]>([
    {
        value: 0,
        id: 0
    },
    {
        value: 0,
        id: 1
    },
    {
        value: 0,
        id: 2
    },
    {
        value: 0,
        id: 3
    },
    {
        value: 0,
        id: 4
    },
    {
        value: 0,
        id: 5
    },
    {
        value: 0,
        id: 6
    },
    {
        value: 0,
        id: 7
    },
    {
        value: 0,
        id: 8
    }
])
