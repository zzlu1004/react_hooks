import React, { useContext } from 'react';
import { Color, ColorContext, UPDATE_COLOR } from './color';   //引入Color组件

function ShowArea() {
    console.log(useContext(ColorContext))
    const { iColor } = useContext(ColorContext)
    return (
        <div style={{color: iColor}}>字体颜色为{iColor}</div>
    )
}

function Buttons() {
    const { dispatch } = useContext(ColorContext)
    return (
        <div>
            <button onClick={() =>{ dispatch( {type: UPDATE_COLOR, color: 'red' }) }}>红色</button>
            <button onClick={() =>{ dispatch( {type: UPDATE_COLOR, color: 'yellow' }) }}>黄色</button>
        </div>
    )
}

function Six() {
    return(
        <div>
            <Color>
                <ShowArea />
                <Buttons />
            </Color>
        </div>
    )
}

export default Six