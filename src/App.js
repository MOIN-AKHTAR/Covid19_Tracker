import React, { useEffect, useState } from 'react';
import Navbar from './Components/Navbar';
import CountryPicker from './Components/CountryPicker';
import Cards from './Components/Cards'
import {fetchData} from './Api'
import Chart from './Components/Chart'
import Footer from './Components/Footer'
import  Styles from './App.module.css'

function App() {
  const [data, setData] = useState("");
  const [country, setCountry] = useState("");


  const changeCountry=async (country)=>{
    setCountry(country);
    const data=await fetchData(country);
      setData(data)
  }

  useEffect(() => {
    let fetchCountryData=async ()=>{
      const data=await fetchData(country);
      setData(data)
    }
    fetchCountryData()
  }, [country])

  return (
    <div className={Styles.App}>
     <div>
     <Navbar/>
     <CountryPicker
     changeCountry={changeCountry}
     country={country}
      />
      <Cards
      data={data}/>
      <Chart 
      data={data}
      country={country}
      />
     </div>
      <div>
      <Footer />
      </div>
    </div>

  );
}

export default App;
