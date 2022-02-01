import './index.css'
import {PropsWithChildren, ReactNode} from "react"

const Wrapper = ({ children }: PropsWithChildren<{children: ReactNode[]}>) => {
    let item = []
    for (let i = 0; i < Math.ceil(children.length / 3); i++) {
        item[i] = children.slice((i*3), (i*3) + 3)
    }

    const content = item.map((el, index) => <div key={index} className='wrapper'>{el}</div>)

    return (
        <>
            {content}
        </>
    )
}

export default Wrapper
