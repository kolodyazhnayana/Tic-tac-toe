import {PlayerT} from "./player"

export interface FieldI {
    value: PlayerT,
    id: number
}

export interface FieldProps extends FieldI {
    handle: (id: number) => void
}


