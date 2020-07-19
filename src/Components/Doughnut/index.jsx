import React from 'react';
import {Doughnut} from 'react-chartjs-2';

const data = {
	labels: [
		'Red',
		'Green',
		'Yellow'
	],
	datasets: [{
		data: [300, 50, 100],
		backgroundColor: [
		'#FF6384',
		'#36A2EB',
		'#FFCE56'
		],
		hoverBackgroundColor: [
		'#FF6384',
		'#36A2EB',
		'#FFCE56'
		]
	}]
};

export default function DoughnutChart(){

    return (
      <div style={{height:"300px"}}>
        <h2>Doughnut Example</h2>
        <Doughnut data={data}  width={400} height={250}/>
      </div>
    );
};