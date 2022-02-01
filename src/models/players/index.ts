import {createEvent, createStore} from "effector"

export const changePlayer = createEvent<boolean>('change-player')

export const $player = createStore<boolean>(true) // true => 'cross', false => 'zero'
