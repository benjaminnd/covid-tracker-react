import React, {useState, useEffect} from "react";
import {fetchDaily} from '../../api';
import {Line, Bar, Doughnut} from 'react-chartjs-2'
import styles from './Charts.module.css'

function Charts({data: {confirmed, recovered, deaths}, country}) {

  const chartData =  confirmed ? {
    labels: ['Infected', 'Recovered', 'Deaths'],
    datasets: [{
      label: 'People',
      backgroundColor: [
        'rgba(240, 11, 11, 0.5)',
        'rgba(173, 255, 47, 0.5)',
        'rgba(0, 0, 0, 0.5)',
      ],
      hoverBackgroundColor: [
        'rgba(120, 11, 11)',
        'rgba(86, 255, 47)',
        'rgba(0, 0, 0)',
      ],
      data:[confirmed.value,recovered.value,deaths.value]
    }]
  } : null

  return <div className={styles.container}>
    {country && country !== 'global' ? <Doughnut data={chartData}/> : <Bar data={chartData}/>}
  </div>
}

export default Charts;
