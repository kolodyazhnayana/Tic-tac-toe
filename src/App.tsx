import React from 'react'
import './App.css'
import Square from "./components/square"
import Wrapper from "./components/wrapper"

function App() {
    const fieldModel = [
        {
            value: 1,
            id: 0
        },
        {
            value: 0,
            id: 1
        },
        {
            value: 0,
            id: 2
        },
        {
            value: 2,
            id: 3
        },
        {
            value: 0,
            id: 4
        },
        {
            value: 0,
            id: 5
        },
        {
            value: 0,
            id: 6
        },
        {
            value: 0,
            id: 7
        },
        {
            value: 0,
            id: 8
        }
    ]

    const content = fieldModel.map(item => <Square state={item.value} key={item.id} id={item.id} />)

    return (
        <div className="App">
            <Wrapper>
                {content}
            </Wrapper>
        </div>
    )
}

export default App
