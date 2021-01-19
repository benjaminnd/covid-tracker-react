import React, {useState, useEffect} from "react";
import {fetchDaily} from '../../api';
import {Line, Bar, Doughnut} from 'react-chartjs-2'
import styles from './Charts.module.css'

function Charts({data: {confirmed, recovered, deaths}, country}) {
  const [dailyData, setDailyData] = useState({});
  useEffect(async() => {
    const fetchDailyData = async()=>{
      setDailyData(await fetchDaily())
    }
    fetchDailyData()
  }, [])

  const line = (
    dailyData.length ? (
    <Line data={{
      labels: dailyData.map(({date}) => date),
      datasets: [
        {
          data: dailyData.map(({confirmed}) => confirmed),
          label: 'Infected',
          borderColor: 'red',
          fill: true
        },
        {
          data: dailyData.map(({deaths}) => deaths),
          label: 'Deaths',
          borderColor: 'black',
          backgroundColor: 'rgba(0, 0, 0, 0.5)',
          fill: true
        }
      ],
    }}/>) : null
  );

  console.log(confirmed,recovered,deaths)
  const bar = (
    confirmed 
    ? (
      <Doughnut
      data={{
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
      }} />
    ) : null
  )

  return <div className={styles.container}>{country && country !== 'global'? bar: line}</div>
}

export default Charts;
