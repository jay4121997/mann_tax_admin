import React, { useState } from 'react'
import './Input.css'

const Input = (props) => {
    const name = props.name
    return (
        <div className="inputField">
            <label>{props.label}</label>
            <input type={props.type} value={props.value} onChange={(e) => props.onChangeHandler(e, name)} />
            <p style={{color:"red",margin:0}}>NOTE: { props.note}</p>
        </div>
    )
}

export default Input
