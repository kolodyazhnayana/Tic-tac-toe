import React from 'react'
import './App.css'
import Square from "./components/square"
import Wrapper from "./components/wrapper"

function App() {
    const fieldModel = [
        0, 0, 0,
        0, 0, 0,
        0, 0, 0
    ]

    const content = fieldModel.map((item, index) => <Square state={Boolean(item)} key={index} />)

    return (
        <div className="App">
            <Wrapper>
                {content}
            </Wrapper>
        </div>
    )
}

export default App
