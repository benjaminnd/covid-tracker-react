import React, {useState, useEffect} from "react";
import {NativeSelect, FormControl} from '@material-ui/core';
import {getCountries} from '../../api'
import styles from './AreaPicker.module.css'

const AreaPicker = ({handleChangeCountry}) => {
  const [Countries, setCountries] = useState([])
  useEffect(() => {
    const fetchCountries = async() => {
      setCountries(await getCountries() )
    }
    fetchCountries()
  }, [setCountries])

  console.log(Countries)
  return(
    <FormControl className={styles.picker}>
      <NativeSelect onChange={e => handleChangeCountry(e.target.value)}>
        <option value="global" default>Global</option>
        {Countries.map((country, index) => <option key={index} value={country}>{country}</option>)}
      </NativeSelect>
    </FormControl>
  )
}

export default AreaPicker;
