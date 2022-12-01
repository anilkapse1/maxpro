import React from 'react'
import { Container } from 'react-bootstrap'
import styled from 'styled-components'
import bg from './assets/images/plus.png'
import stock from './assets/images/stock.png'
import Button from '@mui/material/Button';
import { useNavigate } from 'react-router-dom'


const Hero = () => {
    const Hero=styled.section`
        height:100%;
        background:url(${bg}) repeat-y right top, ${({theme})=>theme.colors.text2};
        background-size:50%;
        .parent{    
            height: 100vh;
            display: flex;
            flex-wrap: wrap;
            flex-direction: row;
            align-items: center;
            section{
                flex:1 1 50%;
                h1{
                    color:${({theme})=>theme.colors.white};
                    line-height:1.5;
                    margin-bottom:20px;
                }
                p{
                    color:${({theme})=>theme.colors.white};
                }
                
                &:nth-child(1){
                    display: flex;
                    height: 100%;
                    align-items: center;
                    background: url('https://oceaniafinance.com.au/wp-content/themes/oceania/dist/images/shapes/Oceania-Hero-Arrow.svg') no-repeat;
                    background-position: bottom;
                    background-size: 82%;
                }
                img{
                    animation: up-down 2s ease-in-out infinite alternate-reverse both;
                }
            }


            @keyframes up-down{
                0%{
                    transform:translateY(10px)
                }
                100%{
                    transform:translateY(-10px)
                }
            }
        }
    
    `;

    const navigate = useNavigate();
  return (
    <Hero>
        <Container>
            <div className='parent'>
                <section>
                    <div>
                        <h1>MaxPro to maximize your ROI </h1>
                        <p>Get investment related alerts based on your risk profile, market direction and timing.</p>
                        <Button variant="outlined" onClick={()=>navigate("/risk-profiler")}>Get started</Button>
                    </div>
                </section>
                <section>
                    <img src={stock} alt="finance"/>
                </section>
            </div>
        </Container>
    </Hero>
  )
}

export default Hero