import Axios from 'axios'
let url="https://covid19.mathdro.id/api";

export const fetchData=async (country)=>{
     let changeAbleUrl=url;
    if(country.length>0){
        changeAbleUrl=`https://covid19.mathdro.id/api/countries/${country}`;
    }
     const {data:{confirmed,deaths,recovered,lastUpdate}}=await Axios.get(changeAbleUrl);
     return ({confirmed,deaths,recovered,lastUpdate})
}

// For Countries
// https://covid19.mathdro.id/api/countries