import React, { useEffect, useState } from 'react';
import { CryptoState } from '../CrytpoContext'; // Make sure the path is correct
import { HistoricalChart } from '../config/api';
import axios from 'axios';
import {
  CircularProgress,
  ThemeProvider,
  createTheme,
} from '@mui/material';
import './CoinInfo.css';
import { Chart } from 'react-google-charts';
import { chartDays } from '../config/data';
import SelectButton from './SelectButton';

export default function CoinInfo({ coin }) {
  const [historicalData, setHistoricalData] = useState([]);
  const [days, setDays] = useState(1);
  const [flag, setFlag] = useState(false);
  const { currency } = CryptoState(); // Make sure CryptoState provides a currency
  const darkTheme = createTheme({
    palette: {
      primary: {
        main: '#fff',
      },
      mode: 'dark',
    },
  });

  const fetchHistoricalData = async () => {
    try {
      const response = await axios.get(HistoricalChart(coin.id, days, currency));
      const formattedData = response.data.prices.map((item) => [
        new Date(item[0]).toLocaleDateString(), // Convert timestamp to date string
        item[1],
      ]);

      setHistoricalData(formattedData);
    } catch (error) {
      console.error('Error fetching historical data:', error);
    }
  };

  useEffect(() => {
    fetchHistoricalData();
  }, [currency, days]);

  return (
    <ThemeProvider theme={darkTheme}>
      <div
        className="container1"
        style={{
          width: '75%', // Make the container width 100%
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center'
        }}
      >
        {!historicalData && flag === false ? (
          <CircularProgress style={{ color: 'gold' }} size={250} thickness={1} />
        ) : (
          <>
            <div
              style={{
                padding: "20",
                width: '100%', // Make the chart container width 100%
              }}
            >
              <Chart
                width={'100%'}
                height={500} // You can adjust the height as needed
                chartType="LineChart"
                data={[['Time', 'Price'], ...historicalData]}
                options={{
                  title: `Price (Past ${days} Days) in ${currency}`,
                  curveType: 'function',
                }}
              />
            </div>
            <div
              style={{
                display: 'flex',
                marginTop: 20,
                marginBottom: 20,
                justifyContent: 'space-around',
                width: '100%',
              }}
            >
              {chartDays.map((day) => (
                <SelectButton
                  key={day.value}
                  onClick={() => {
                    setDays(day.value);
                    setFlag(false);
                  }}
                  selected={day.value === days}
                >
                  {day.label}
                </SelectButton>
              ))}
            </div>
          </>
        )}
      </div>
    </ThemeProvider>
  );
}
