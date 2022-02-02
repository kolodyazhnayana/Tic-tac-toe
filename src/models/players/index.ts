import {createEvent, createStore} from "effector"
import {PlayerT} from "../../interfaces/player"

export const changePlayer = createEvent<PlayerT>('change-player')

export const $player = createStore<PlayerT>('cross')
