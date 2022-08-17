import React from 'react'
import style from './ButtomLine.module.css'

interface IProps {
    circleSize?:string;
    lineSize?:string;
    align?:string;
}
const ButtomLine = ({ circleSize = '10px', lineSize = '50px', align='left' }:IProps) => {
    return (
        <div className={`d-flex    align-items-center ${style.borderIcon} ${align === 'center' ? 'justify-content-center' : ''}`}>
            <div className={`d-flex ${style.circleIcon}`} style={{ width: circleSize, height: circleSize }}></div>
            <div className={`d-flex ${style.lineIcon}`} style={{
                width: lineSize, height: lineSize !=='50px' ? '3.5px' : '3px'
            }}></div>
        </div>
    )
}

export default ButtomLine
