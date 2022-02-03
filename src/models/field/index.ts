import {createEvent, createStore} from 'effector'
import {FieldI} from "../../interfaces/field"

export const changeField = createEvent<FieldI[]>('change-field')

export const markField = createEvent<number>('mark-field')

export const $fieldModel = createStore<FieldI[]>([
    {
        value: 'default',
        id: 0
    },
    {
        value: 'default',
        id: 1
    },
    {
        value: 'default',
        id: 2
    },
    {
        value: 'default',
        id: 3
    },
    {
        value: 'default',
        id: 4
    },
    {
        value: 'default',
        id: 5
    },
    {
        value: 'default',
        id: 6
    },
    {
        value: 'default',
        id: 7
    },
    {
        value: 'default',
        id: 8
    }
])
