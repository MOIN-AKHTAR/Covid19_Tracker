import React, { useState, useEffect } from 'react';
import Styles from './CountryPicker.module.css';
import Axios from 'axios';

export default function CountryPicker({changeCountry,country}) {

    const [countries, setCountries] = useState([]);

    useEffect(() => {
       const fetchCountries=async()=>{
         let {data:{countries}}=await Axios.get("https://covid19.mathdro.id/api/countries");
         setCountries(countries)
       }  
       fetchCountries()
    }, [])
    return (
        <>
        <h1 style={{textAlign:"center",margin:"1rem 0px"}}>Covid19 Cases Analysis</h1>
        <div className={Styles.CountryPicker}>
            
             <select onChange={(e)=>changeCountry(e.target.value)}>
                 <option value="">Global</option>
                {countries.map(country=><option value={country.name} key={country.name}>{country.name}</option>)}
             </select>
        </div> 
        <div style={{textAlign:"center",fontWeight:"normal"}}>{country?<h1>Current Data Of {country}</h1>:<h1>Current Situation Of The World</h1>}</div>
        </>
    )
}
