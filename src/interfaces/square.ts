import {PlayerT} from "./player"

export interface SquareI {
    value: PlayerT
}

export interface SquareProps extends SquareI {
    handle: () => void
}
