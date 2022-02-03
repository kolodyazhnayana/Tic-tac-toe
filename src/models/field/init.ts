import {forward, sample} from "effector"
import {$fieldModel, changeField, updateFieldItem} from "./index"

sample({
    clock: updateFieldItem,
    source: $fieldModel,
    fn: (sourceData, clockData) => (sourceData.map(el => el.id !== clockData.id ? el : clockData)),
    target: changeField
})

forward({
    from: changeField,
    to: $fieldModel
})
