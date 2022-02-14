import React from 'react'
import './App.css'
import Square from "./components/square"
import Wrapper from "./components/wrapper"
import './models/init'
import {useStore} from "effector-react"
import {$fieldModel, $isWinner, markField} from './models/field'

function App() {
    const fields = useStore($fieldModel)
    const winner = useStore($isWinner)

    const handleClick = (id: number) => {
        markField(id)
    }

    const content = fields.map(item => (
        <Square
            value={item.value}
            key={item.id}
            handle={() => handleClick(item.id)}
        />
    ))

    return (
        <div className="app">
            {
                winner && <h1 className='heading'>Is winner: <span className={winner}>{winner}</span></h1>
            }
            <Wrapper>
                {content}
            </Wrapper>
        </div>
    )
}

export default App
