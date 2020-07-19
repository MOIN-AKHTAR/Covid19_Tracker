import React from 'react';
import {Bar,Doughnut} from 'react-chartjs-2';
import Style from './Chart.module.css'

const Chart=({data:{confirmed,deaths,recovered},country})=>{
  const doughnut=(
    confirmed?(<Doughnut
    height={100}
       data={{
        labels: ['Infected', 'Recovered', 'Deaths'],
	datasets: [{
		data: [confirmed.value,deaths.value,recovered.value],
		backgroundColor: ['rgba(0, 0, 255, 0.5)', 'rgba(0, 255, 0, 0.5)', 'rgba(255, 0, 0, 0.5)'],
                  hoverBackgroundColor: ['rgba(0, 0, 255, 1)', 'rgba(0, 255, 0, 1)', 'rgba(255, 0, 0, 1)'],
	}]
       }}
    />):null
  )
    const barChart = (
        confirmed ? (
          <Bar
          height={100}
            data={{
              labels: ['Infected', 'Recovered', 'Deaths'],
              datasets: [
                {
                  label: 'People',
                  backgroundColor: ['rgba(0, 0, 255, 0.5)', 'rgba(0, 255, 0, 0.5)', 'rgba(255, 0, 0, 0.5)'],
                  hoverBackgroundColor: ['rgba(0, 0, 255, 1)', 'rgba(0, 255, 0, 1)', 'rgba(255, 0, 0, 1)'],
                  data: [confirmed.value, recovered.value, deaths.value],
                },
              ],
            }}
            options={{
              legend: { display: false },
              title: { display: true, text: `Current state in ${country?country:"World"}` },
            }}
          />
        ) : null
      );
    
      
    
      return (
        <React.Fragment>
        <div className={Style.Chart}>
          <div>
          {barChart} 
          </div>
          <div>
          {doughnut}
            </div> 
        </div>
        </React.Fragment>
      );

}
export default  Chart;