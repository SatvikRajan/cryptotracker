import { Container, Typography } from '@mui/material'
import React from 'react'
import './Banner.css'
import Carousel from './Carousel'
export default function Banner() {
  return (
    <div className='banner' style={{
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        textAlign: 'center',
        height: "40%"
    }}>
        <Container className='bannerContent' style={{
            height: 400,
            display: 'flex',
            flexDirection: 'column',
            paddingTop: 25,
            justifyContent: 'space-around',
        }}>
            <div className='tagline' style={{
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
                textAlign: 'center',
                height: '40%'
            }}>
                <Typography variant="h2" style={{
                    fontWeight: "bold",
                    marginBottom: 15,
                    fontFamily: "Montserrat"
                }}>Crypto Tracer</Typography>
                <Typography variant="subtitle1" style={{
                    color: 'darkgrey',
                    textTransform: 'capitalize',
                    fontFamily: 'Montserrat'
                }}>Get all the info of Crypto Currencies</Typography>
            </div>
            <Carousel>

            </Carousel>
        </Container>
    </div>
  )
}
