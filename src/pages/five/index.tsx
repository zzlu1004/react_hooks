import React, { useReducer } from 'react';
import { Button } from 'antd'

function Five() {
    const [ count, dispatch ] = useReducer((state: number, action: String) => {
        switch(action) {
            case 'add':
                return state + 1
            case 'sub':
                return state - 1
            default:
                return state
        }
    }, 0)
    return (
        <div>
            <h2>现在的分数是{count}</h2>
            <Button onClick={() => dispatch('add')}>Increment</Button>
            <Button onClick={() => dispatch('sub')}>Increment</Button>
        </div>
    )
}

export default Five