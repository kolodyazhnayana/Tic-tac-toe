import {forward} from "effector"
import {$fieldModel, changeField} from "./index"

forward({
    from: changeField,
    to: $fieldModel
})

$fieldModel.watch(state => console.log('store changed: ', state))
