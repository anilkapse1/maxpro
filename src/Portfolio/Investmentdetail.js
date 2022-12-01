import React from 'react'
import styled from "styled-components";

const Investmentdetail = () => {
    const Investmentsection = styled.section`
        overflow:hidden;
        .parentsection{
            display: flex;
            flex-direction: row;
            flex-wrap: wrap;
            align-items:center;
            justify-content:center;
            .box{
                flex: 1 1 calc(100%/4);
                display: flex;
                flex-direction: column;
                justify-content: space-evenly;
                height: 150px;
                padding:20px;
                h1{
                    font-weight: 200;
                    color: cadetblue;
                    margin:0px;
                }
                span{
                    font-weight:300;
                }
                h1{
                    span{
                        font-weight:500;
                    }
                }
            }
        }
    
    
    `;
  return (
    <Investmentsection>
        <div className='parentsection'>
            <div className='box'>
                <span>Total Investment</span>
                <h1>3500000</h1>
            </div>
            <div className='box'>
                <span>current value</span>
                <h1>5000128</h1>
            </div>
            <div className='box'>
                <span>Day's P&L</span>
                <h1>175000<span>(+5%)</span></h1>
            </div>
            <div className='box'>
                <span>Total P&L</span>
                <h1>1500128<span>(+42.86%)</span></h1>
            </div>
        </div>
    </Investmentsection>
  )
}

export default Investmentdetail