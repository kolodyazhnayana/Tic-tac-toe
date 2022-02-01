import './index.css'

interface ISquare {
    state: boolean
}

const Square = ({ state }: ISquare) => {
    return (
        <div className='square' />
    )
}

export default Square
