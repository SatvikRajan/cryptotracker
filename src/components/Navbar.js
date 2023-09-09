import { AppBar,Container,MenuItem,Toolbar,Typography,Select } from '@mui/material'
import React from 'react'
import { useNavigate } from "react-router-dom";
import { ThemeProvider, createTheme } from '@mui/material/styles';
import { CryptoState } from '../CrytpoContext';
const darkTheme = createTheme({
  palette:{
    primary:{
      main: '#fff',
    },
    mode: "dark"
  },
});
export default function Navbar() {
  const {currency,setCurrency} = CryptoState()
  const navigate = useNavigate()
  function handleClick() {
    navigate("/");  
  }
  return (
    <ThemeProvider theme={darkTheme}>
    <AppBar color='transparent' position="static">
      <Container>
        <Toolbar>
          <Typography onClick={handleClick} style={{
            flex: 1,
            color: "gold",
            fontSize: "1.2rem",
            fontFamily: "Montserrat",
            fontWeight: "bold",
            cursor: "pointer"
          }}>
            Crytpo Tracer
          </Typography>
          <Select variant='outlined' style={{
            // color: 'white',
            height: 40,
            width: 100,
            marginRight: -25
          }}
          value={currency}
          onChange={(e)=>{setCurrency(e.target.value)}}>
            <MenuItem value={"INR"}>INR</MenuItem>
            <MenuItem value={"USD"}>USD</MenuItem>
          </Select>
        </Toolbar>
      </Container>
    </AppBar>
    </ThemeProvider>
  )
}

