import React from 'react'
import styled from 'styled-components'


const Laststep = () => {
    const Part=styled.section`
                h3{
                    color:white;
                    margin-top:20px;
                    margin-bottom:20px;
                    font-weight:200;
                    animation:greeting 2s ease-in-out infinite alternate-reverse both;

                }
                .rotateBox{
                    position: relative;
                    display: flex;
                    flex-wrap: wrap;
                    flex-direction: row;
                    padding-top: 11px;
                    justify-content: center;
                    align-items: center;
                        .box{
                        background: -webkit-linear-gradient(right,#6f4c90,#5a3d73);
                        width: 180px;
                        height: 180px;
                        -webkit-transform: rotate(-45deg);
                        -ms-transform: rotate(-45deg);
                        -webkit-transform: rotate(-45deg);
                        -ms-transform: rotate(-45deg);
                        transform:rotate(-45deg);
                        padding: 10px;
                        border-radius: 8px;
                        position:relative;
                        &:nth-child(2){
                            background: -webkit-linear-gradient(right, #f6872d,#f16027);
                            width: 160px;
                            height: 160px;

                        }
                        &:nth-child(3){
                            background: -webkit-linear-gradient(right, #5a5a5a,#3c3c3c);
                            width: 140px;
                            height: 140px;

                        }
                        .rotate{
                            position: absolute;
                            width: 90%;
                            height: 90%;
                            text-align: center;
                            left: 50%;
                            top: 50%;
                            transform: translate(-50%,-50%) rotate(45deg);
                            display: flex;
                            align-items: center;
                            justify-content:center;
                            h1{
                                font-size:1rem;
                                color:white;
                                font-weight:300;
                                text-align:center;
                                span{
                                    font-weight:bold;
                                    display:block;
                                    margin: 10px 0px;
                                    font-size:2rem;
                                }
                            }
                        }
                    }
                }



    
    `;
  return (
    <Part>
        <div className='rotateBox'>
        <div className='box'>
                <div className='rotate'>
                  <h1>Large Cap <span>50%</span></h1>      
                </div>
            </div>            
            <div className='box'>
                <div className='rotate'>
                  <h1>Mid Cap <span>25%</span></h1>      
                </div>
            </div>            
            <div className='box'>
                <div className='rotate'>
                  <h1>Small Cap <span>25%</span></h1>      
                </div>
            </div>            
        </div>
    </Part>
  )
}

export default Laststep