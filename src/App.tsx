import React from 'react'
import './App.css'
import Square from "./components/square"
import Wrapper from "./components/wrapper"
import './models/init'
import {useStore} from "effector-react"
import { $fieldModel } from './models/field/index'

function App() {
    const fields = useStore($fieldModel)

    const content = fields.map(item => <Square state={item.value} key={item.id} id={item.id} />)

    return (
        <div className="App">
            <Wrapper>
                {content}
            </Wrapper>
        </div>
    )
}

export default App
