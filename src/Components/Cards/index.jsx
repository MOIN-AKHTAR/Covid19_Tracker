import React from 'react';
import Card from './Card'
import Styles from './Cards.module.css';

export default function Cards({data:{confirmed,deaths,recovered,lastUpdate}}) {
    if(!confirmed){
        return <h3 style={{textAlign:"center"}}>Loading...</h3>
    }
    return (
        <div className={Styles.container}>
            <Card 
            className={Styles.infected}
            title={"Infected"}
            qty={confirmed.value}
            date={lastUpdate}
            />
            <Card 
            className={Styles.recovered}
            title={"Recovered"}
            qty={recovered.value}
            date={lastUpdate}
            />
            <Card 
            className={Styles.deaths}
            title={"Deaths"}
            qty={deaths.value}
            date={lastUpdate}
            />
        </div>
    )
}
