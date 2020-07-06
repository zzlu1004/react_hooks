import React, { useState, useEffect } from 'react'
import { BrowserRouter as Router, Route, Link } from "react-router-dom"

import { Button } from 'antd'

function Index() {
    useEffect(() => {
        console.log('进入Index页面')
        return () => {
            console.log('离开Index页面')
        }
    },[])
    return <h2>index</h2>
}
function List(){
    useEffect(() => {
        console.log('进入List页面')
    })
    return <h2>List</h2>
}

function Three() {
    const [ count, setCount ] = useState(0)
    useEffect(() => {
        console.log(`useEffect=>You clicked ${count} times`)
        return () => {
            console.log('====================')
        }
    },[count])
    return (
        <div>
            <p>You clicked {count} times</p>
            <Button type="primary" onClick={() => {setCount(count + 1)}}>click me</Button>

            <Router>
                <ul>
                    <li><Link to="/three/index">首页</Link></li>
                    <li><Link to="/three/list">列表</Link></li>
                </ul>
                <Route path="/three/index" component={Index} />
                <Route path="/three/list" component={List} />
            </Router>
        </div>
    )
}

export default Three