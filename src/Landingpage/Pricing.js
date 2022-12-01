import React from 'react'
import { Container } from 'react-bootstrap'
import styled from 'styled-components'
import leftbg from '../assets/images/left-bg.png'
import Button from '@mui/material/Button';



const Pricing = () => {
    const Pricing=styled.section`
        background: rgb(0,86,143);
        background: linear-gradient(0deg, rgba(0,86,143,1) 0%, rgba(0,86,143,1) 35%, rgba(0,165,195,1) 100%);
        height:100%;
        padding-top:100px;
        position:relative;
        overflow:hidden;
        &:after{
            content:"";
            background:url(${leftbg});
            position: absolute;
            left: 0px;
            top: 0px;
            width: 100%;
            bottom: 0px;
            background-repeat: no-repeat;
            z-index:0;
        }
      
      
        .parent{
            position:relative;
            z-index:2;
            display: flex;
            flex-direction: row;
            justify-content: space-evenly;
            height:calc(100vh - 100px);
            align-items:center;
            &:before{
                content: "60% off ";
                position: absolute;
                right: 0px;
                top: 0px;
                width: 100%;
                bottom: 0px;
                background-repeat: no-repeat;
                z-index: -1;
                transform:scale(1);
                font-size:30vw;
                color: rgb(255,255,255,.1);
                animation: magic2 5s ease-in-out infinite alternate-reverse both;
            }

            .pricing_part{
                display:flex;
                flex-wrap:wrap;
                flex-direction:row;
                justify-content: space-between;
                div{
                    flex:0 1 calc(90%/3);
                    border:1px solid ${({theme})=>theme.colors.text2};
                    border-radius:10px;
                    padding:10px;
                    transition: border .5s;
                    display: flex;
                    flex-wrap: wrap;
                    flex-direction: column;
                    justify-content: space-evenly;
                    text-align: center;
                    height:450px;
                    background-color: rgb(0,100,100,.1);
                    transition:background-color .5s;
                    &:hover{
                        cursor:pointer;
                        background-color:rgb(0,100,100,.2);
                       
                    }
                    h3{
                        color:${({theme})=>theme.colors.white};
                        font-size:3rem;
                        font-weight: 300;
                    }
                    h1{
                        font-size:4rem;
                        font-family: 'Merriweather Sans', sans-serif;
                        font-weight: 900;
                        animation-delay:1s;
                        transform:scale(1.5);
                        color:${({theme})=>theme.colors.cyan};
                        .sup{
                            font-weight:200;
                        }
                    }
                    h5{
                        word-spacing:15px;
                        span.highlight1{
                            color:${({theme})=>theme.colors.white};
                            font-family: 'Merriweather Sans', sans-serif;
                            font-size:2rem;
                        }
                        span.highlight2{
                            color:${({theme})=>theme.colors.white};
                            font-family: 'Merriweather Sans', sans-serif;
                        }
                        span.strike{
                            text-decoration: line-through!important;
                            font-family: 'Merriweather Sans', sans-serif;
                        }
                        
                    }
                    h6{
                        font-family: 'Merriweather Sans', sans-serif;
                        color:${({theme})=>theme.colors.white};
                        span{
                            font-family: 'Merriweather Sans', sans-serif;
                        }
                    }
                    
                }
                div:not(:nth-child(3)){
                    margin-right:10px;
                }
                
               
            }
        }
            @keyframes magic2{
                0%{
                    transform:translateY(-100%);
                }
                100%{
                    transform:translateY(100%);
                }
            }

`;
  return (
    <Pricing>
        <Container>
            <div className='parent'>
                <section className='pricing_part'>
                    <div>
                        <h3>pro</h3>
                        <h1>-40<sup className='sup'>%</sup></h1>
                        <h5>just <span className='highlight1'>₹9540</span> <span className='strike'>₹15540</span> for <span className='highlight2'>13 months!</span></h5>
                        <h6>you save <span>₹600</span>, and you get a free month too</h6>
                        <Button variant="outlined">Buy now</Button>
                    </div>
                    <div>
                        <h3>pro+</h3>
                        <h1>-50<sup className='sup'>%</sup></h1>
                        <h5>just <span className='highlight1'>₹15540</span> <span className='strike'>₹15540</span> for <span className='highlight2'>13 months!</span></h5>
                        <h6>you save <span>₹600</span>, and you get a free month too</h6>
                        <Button variant="outlined">Buy now</Button>
                    </div>
                    <div>
                        <h3>premium</h3>
                        <h1>-60<sup className='sup'>%</sup></h1>
                        <h5>just <span className='highlight1'>₹23940</span> <span className='strike'>₹15540</span> for <span className='highlight2'>13 months!</span></h5>
                        <h6>you save <span>₹600</span>, and you get a free month too</h6>
                        <Button variant="outlined">Buy now</Button>
                </div>
                </section>
            </div>
        </Container>
    </Pricing>
  )
}

export default Pricing