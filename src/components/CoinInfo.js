import React, { useEffect, useState } from 'react'
import CryptoState from '../CrytpoContext'
import { HistoricalChart } from '../config/api'
import axios from 'axios'
import { ThemeProvider, createTheme } from '@mui/material'
export default function CoinInfo({coin}) {
  const [historicalData, setHistoricalData] = useState()
  const [days, setDays] = useState(1)
  const {currency} = CryptoState()
  const darkTheme = createTheme({
    palette:{
      primary:{
        main: '#fff',
      },
      mode: "dark"
    },
  });
  const fetchHistoricalData = async()=>{
    const {data} = await axios.get(HistoricalChart(coin.id,days,currency))
    setHistoricalData(data.prices)
  }
  console.log(coin);

  useEffect(() => {
      fetchHistoricalData()
  }, [currency,days])
  
  return (
    <ThemeProvider theme={darkTheme}>
       <div>
        <h1>{coin.name}</h1>
        <p>{coin.symbol}</p>
        <p>{coin.current_price}</p>
      </div>
    </ThemeProvider>
  )
}
