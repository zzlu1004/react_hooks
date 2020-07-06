import React, { useState, useContext, createContext  } from 'react';
import { Button } from 'antd'
const CountContext = createContext(0)

function Counter() {
    const count = useContext(CountContext)
    return <h2>{count}</h2>
}

function Four() {
    const [ count, setCount ] = useState(0)
    return (
        <div>
            <p>You clicked {count} times</p>
            <Button onClick={() => {setCount(count + 1)}}>click me</Button>
            <CountContext.Provider value={count}>
                <Counter />
            </CountContext.Provider>
        </div>
    )
}

export default Four