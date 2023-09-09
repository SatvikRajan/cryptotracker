import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { CryptoState } from '../CrytpoContext'
import axios from 'axios'
import { SingleCoin } from '../config/api'
import CoinInfo from '../components/CoinInfo'
import '../pages/CoinPage.css'
import { LinearProgress, Typography } from '@mui/material'
// function numberWithCommas(x) {
//   return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
// }
export default function CoinPage() {
  const {id}=useParams()
  const [coin,setCoin]= useState()
  const {currency,symbol} = CryptoState()
  const fetchCoin= async() =>{
    const {data} = await axios.get(SingleCoin(id))
    setCoin(data)
  }
  useEffect(() => {
    fetchCoin()
  }, [id])
  if(!coin) return <LinearProgress style={{backgroundColor: 'gold'}}/>
  return (
    <div className='container'>
      <div className='sidebar' style={{borderRight: "2px solid grey"}}>
      <img
          src={coin?.image.large}
          alt={coin?.name}
          height="200"
          style={{ marginBottom: 20 }}
        />
        <Typography variant="h3" style={{
          marginBottom: 20,
          fontFamily: 'Montserrat',
          fontWeight:'bold'
        }}>
          {coin?.name}
        </Typography>
        <Typography variant="subtitle1" dangerouslySetInnerHTML={{
            __html: coin?.description.en.split(". ")[0],
          }} 
          style={{
            width: "100%",
            fontFamily: "Montserrat",
            padding: 25,
            paddingBottom: 15,
            paddingTop: 0,
            textAlign: "justify",
          }}>
        </Typography>
        <div className='marketData'>
          <span style={{ display: "flex" }}>
            <Typography variant="h5" style={{
              fontSize: '1.3rem',
              fontWeight: "bold",
              marginBottom: 20,
              fontFamily: "Montserrat",
            }}>
              Rank:
            </Typography>
            &nbsp; &nbsp;
            <Typography
              variant="h6"
              style={{
                fontFamily: "Montserrat",
              }}
            >
              {(coin?.market_cap_rank)}
            </Typography>
          </span>

          <span style={{ display: "flex" }}>
            <Typography variant="h5" style={{
              fontSize: '1.3rem',
              fontWeight: "bold",
              marginBottom: 20,
              fontFamily: "Montserrat",
            }}>
              Current Price:
            </Typography>
            &nbsp; &nbsp;
            <Typography
              variant="h6"
              style={{
                fontFamily: "Montserrat",
              }}
            >
              {symbol}{" "}
              {(
                coin?.market_data.current_price[currency.toLowerCase()]
              )}
            </Typography>
          </span>
          <span style={{ display: "flex" }}>
            <Typography variant="h5" style={{
              fontSize: '1.3rem',
              fontWeight: "bold",
              marginBottom: 20,
              fontFamily: "Montserrat",
            }}>
              Market Cap:
            </Typography>
            &nbsp; &nbsp;
            <Typography
              variant="h6"
              style={{
                fontFamily: "Montserrat",
              }}
            >
              {symbol}{" "}
              {(
                coin?.market_data.market_cap[currency.toLowerCase()]
                .toString()
                .slice(0, -8)
              )}
              M
            </Typography>
          </span>
        </div>
      </div>
      <CoinInfo coin={coin}/>
    </div>
  )
}
