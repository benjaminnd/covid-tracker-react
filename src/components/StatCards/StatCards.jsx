import React from "react";
import {Card, CardContent, Typography, Grid} from '@material-ui/core';
import CountUp from 'react-countup';
import styles from './StatCards.module.css'
import cx from 'classnames'
import createMixins from "@material-ui/core/styles/createMixins";
const StatCards = ({data: {confirmed, deaths, recovered, lastUpdate}}) => {
  console.log({lastUpdate});
  if(!confirmed || !recovered || !deaths){
    return 'Loading...'
  }
  console.log(confirmed.value)
  return (
    <div className={styles.container}>
      <Grid container spacing={1} justify="center" direction="column">
        <Grid item component={Card} className={cx(styles.card, styles.infected)}>
          <CardContent>
            <Typography color="textSecondary" variant="h5" gutterBottom className={cx(styles.typo)}>Infected</Typography>
            <Typography variant="h5">
              <CountUp
                start={0}
                end={confirmed.value}
                duration={2.5}
                separator=","
            /></Typography>
            <Typography color="textSecondary" >{new Date(lastUpdate).toDateString()}</Typography>
            <Typography variant="subtitle2" className={cx(styles.subtitle)}>Number of active cases</Typography>
          </CardContent>
        </Grid>
        <Grid item component={Card} className={cx(styles.card, styles.recovered)}>
          <CardContent>
            <Typography color="textSecondary" variant="h5" gutterBottom className={cx(styles.typo)}>Recovered</Typography>
            <Typography variant="h5">
              <CountUp
                  start={0}
                  end={recovered.value}
                  duration={2.5}
                  separator=","
              />
            </Typography>
            <Typography color="textSecondary">{new Date(lastUpdate).toDateString()}</Typography>
            <Typography variant="subtitle2" className={cx(styles.subtitle)}>Number of active cases</Typography>
          </CardContent>
        </Grid>
        <Grid item component={Card} className={cx(styles.card, styles.deaths)}>
          <CardContent>
            <Typography color="textSecondary" variant="h5" gutterBottom className={cx(styles.typo)}>Deaths</Typography>
            <Typography variant="h5">
            <CountUp
                start={0}
                end={deaths.value}
                duration={2.5}
                separator=","
            />
            </Typography>
            <Typography color="textSecondary">{new Date(lastUpdate).toDateString()}</Typography>
            <Typography variant="subtitle2" className={cx(styles.subtitle)}>Number of active cases</Typography>
          </CardContent>
        </Grid>
      </Grid>
    </div>
  );
}

export default StatCards;
