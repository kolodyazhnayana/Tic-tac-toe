import './App.css'
import Square from "./components/square"
import Wrapper from "./components/wrapper"
import './models/init'
import {useStore} from "effector-react"
import { $fieldModel, $isWinner, changeField, markField, changeWinner } from './models/field'
import Button from './components/button'

function App() {
    const fields = useStore($fieldModel)
    const winner = useStore($isWinner)

    const handleClick = (id: number) => {
        markField(id)
    }

    const handleNewGame = () => {
        changeField(Array(9).fill({}).map((field, index) => ({ ...field, id: index })))
        changeWinner(null)
    }

    const content = fields.map(item => (
        <Square
            value={item.value}
            key={item.id}
            handle={() => handleClick(item.id)}
            winner={Boolean(winner)}
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
            <div className='wrap-flex'>
                <Button
                    value='Начать заново'
                    onClick={handleNewGame}
                />
            </div>
        </div>
    )
}

export default App
