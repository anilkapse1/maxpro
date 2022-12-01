import React, { useEffect, useState } from 'react'
import { Container } from 'react-bootstrap'
import styled from 'styled-components'
import leftbg from '../assets/images/left-bg.png'
import store from '../assets/images/shopping.png'
import Clock from './Clock'
import bg from '../assets/images/plus.png'

const Countdown = () => {
    const Pricing=styled.section`
        background:url(${bg}) repeat-y right top, ${({theme})=>theme.colors.text2};
        background-size:50%;

        height:100%;
        padding-top:100px;
        position:relative;
        overflow:hidden;
        &:after{
            content:"";
            background:url(${leftbg});
            position: absolute;
            left: 0px;
            right:0px;
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
            height:calc(100vh - 100px);
            align-items:center;
            justify-content: space-between;
            &:after{
                content: "sale";
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
                animation: magic 5s ease-in-out infinite alternate-reverse both;
            }
            section{
                flex:1 1 50%;
            }
            .title_part{
                height:400px;
                div{
                    height:100%;
                    background-image:url(${store});
                    background-size: contain;
                    background-repeat: no-repeat;
                    position:relative;
                    h1{
                        position: absolute;
                        top: 50%;
                        left: 25%;
                        transform: translate(-25%, -50%);
                        font-size: 7rem;
                        font-weight:800;
                        
                        span{
                            display:block;
                            display: block;
                            font-size: 3rem;
                            color: cyan;
                            font-weight:100;
                            color:black;
                        }
                    }
                }
            }
          

        }

        @keyframes magic{
                0%{
                    transform:scale(1.1);
                    font-size:50vw;
                }
                100%{
                    transform:scale(1);
                    font-size:30vw;
                }
            }



`;




  return (
    <Pricing>
        <Container>
            <div className='parent'>
                <section className='title_part'>
                    <div>
                        <h1>sale<span>60% OFF</span></h1>
                    </div>
                </section>
                <section>
                    <Clock/>
                </section>   
            </div>
        </Container>
    </Pricing>
  )
}



export default Countdown