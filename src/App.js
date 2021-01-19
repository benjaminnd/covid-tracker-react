import React from "react";
import {StatCards, AreaPicker, Charts, Corona} from './components'
import {fetchData} from './api'
import styles from './App.module.css'
import gsap, {Power0} from 'gsap';
class App extends React.Component {

  state = {
    data: {},
    country: ''
  }
  logoRef = React.createRef();
  async componentDidMount(){
    const fetched = await fetchData();

    this.setState({data: fetched})
    const tl = gsap.timeline({repeat: -1});
    tl.from('.animated', {
      scale: 1.2,
      x: -10,
      opacity: 0.2,
      duration:1,
      ease: Power0.easeNone
    })
  }
  handleChangeCountry= async(country)=>{
    let changedData = await fetchData(country)
    console.log(changedData)
    this.setState({data: changedData, country: country})
  }
  render(){
    const {data,country} = this.state
    if(!data){
      return 'Loading...'
    }
    return ( 
      <>
        <Corona ></Corona>
        <div className={styles.container}>
          <StatCards data={data}/>
          <div className={styles.right}>
            <AreaPicker handleChangeCountry={this.handleChangeCountry}/>
            <Charts data={data} country={country}/>
          </div>
        </div>
      </>
    );
  }
}

export default App;
