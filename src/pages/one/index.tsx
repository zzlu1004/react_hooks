import React, { useState } from 'react'
import { Button } from 'antd'
function One() {
    const [ count, setCount ] = useState(0)
    return (
        <div>
            <p>You clicked {count} times</p>
            <Button onClick={() =>{setCount(count + 1)}}>click me</Button> 
        </div>
    )
}

export default One