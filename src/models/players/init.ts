import {forward} from "effector"
import {$player, changePlayer} from "./index"

forward ({
    from: changePlayer,
    to: $player
})
