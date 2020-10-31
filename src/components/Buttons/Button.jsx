import React from 'react'
import './button.css'


const Button = (props) => {

    let classesCss = 'button '

    classesCss += props.duble ? 'duble ' : ''
    classesCss += props.triple ? 'triple ': ''
    classesCss += props.operation ? 'operation ': ''


    return(
        <button className={classesCss}
            onClick={()=>props.click && props.click(props.label)}
        >
            {props.label}
        </button>
    )
}

export default Button