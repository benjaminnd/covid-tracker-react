import axios from 'axios';

const url = 'https://covid19.mathdro.id/api'


export const fetchData = async(country) => {
    let dynamicUrl = url + (country && country != 'global' ? `/countries/${country}` : '')
    console.log('Changed URL', dynamicUrl)
    try{
        const {data: {confirmed, deaths, recovered, lastUpdate}} = await axios.get(dynamicUrl)
        return {confirmed, deaths, recovered, lastUpdate}
    }catch (error){
        console.log(error)
    }
}

// export const fetchDaily = async() => {
//     try {
//         const {data} = await axios.get(`${url}/daily`);
//         const filteredData = data.map(day=>({
//             confirmed: day.confirmed.total,
//             deaths: day.deaths.total,
//             date: day.reportDate
//         }));

//         return filteredData
//     } catch(error){
//         console.log(error)
//     }
// }

export const getCountries = async() => {
    try{
        const{data: {countries}} = await axios.get(`${url}/countries`)
        return countries.map((country)=> country.name)
    }catch(error){

    }
}