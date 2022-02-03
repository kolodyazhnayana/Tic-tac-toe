import React from 'react'
import './App.css'
import Square from "./components/square"
import Wrapper from "./components/wrapper"
import './models/init'
import {useStore} from "effector-react"
import {$fieldModel, markField} from './models/field'

function App() {
    const fields = useStore($fieldModel)

    const handleClick = (id: number) => {
        markField(id)
    }

    const content = fields.map(item => (
        <Square
            value={item.value}
            key={item.id}
            id={item.id}
            handle={handleClick}
        />
    ))

    return (
        <div className="App">
            <Wrapper>
                {content}
            </Wrapper>
        </div>
    )
}

export default App
