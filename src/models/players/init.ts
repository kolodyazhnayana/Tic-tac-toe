import {forward} from "effector"
import {$player, changePlayer} from "./index"

forward ({
    from: changePlayer,
    to: $player
})

$player.watch(state => console.log('store changed: ', state))
