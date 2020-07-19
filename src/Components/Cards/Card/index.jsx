import React from 'react';
import CountUp from 'react-countup'
import Styles from './Card.module.css'

export default function Card({className,title,qty,date}) {
    return (
        <div className={[Styles.card,className].join(" ")}>
            <h3>{title}</h3>
            <h2>
                <CountUp 
                start={0}
                end={qty}
                duration={2.5}
                separator={","}
                />
            </h2>
            <h4>{new Date(date).toDateString()}</h4>
        </div>
    )
}
