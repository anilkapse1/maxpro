import React from "react";
import { Container } from "react-bootstrap";
import styled from "styled-components";
import Footer from "./Footer";
import bg from "./assets/images/plus.png";
import Fullpage, {
  FullPageSections,
  FullpageSection,
  FullpageNavigation,
} from "@ap.cx/react-fullpage";
import ArrowDropUpIcon from '@mui/icons-material/ArrowDropUp';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import chart from "./assets/images/chart.png";
import {Button} from "@mui/material";




const Portfolio = () => {
    
    const sectionStyle={
        height:'100vh'
      }
 
      
  const Portfoliosection = styled.section`
    padding-top: 100px;
    background: url(${bg}) repeat-y right top,${({ theme }) => theme.colors.text2};
    background-size: 50%;
    height:100%;
    .parent {
        height: calc(100vh - 120px);
        display: flex;
        align-items: center;
        background-color:rgb(244,11,35,.1);
      h1 {
        font-size: 2rem;
        color: ${({ theme }) => theme.colors.white};
        font-weight: 200;
        margin-bottom: 40px;
      }
      .portfolioContainer {
        border-radius: 10px;
        border-radius: 10px;
                .portfolio{
                display: flex;
                flex-direction: row;
                flex-wrap: wrap;
                gap:8px;
                padding: 20px;
                height:500px;
                section{
                    &:nth-child(1){
                        flex:1 1 70%;
                    }
                    &:nth-child(2){
                        flex:1 1 16%;
                        background-color:#013A39;
                        padding:10px;
                        border-radius:30px;
                        display: flex;
                        flex-wrap: wrap;
                        flex-direction: column;
                        justify-content: space-around;
                        border: 5px solid #383636;
                    }
                } 
                .right{
                    display: flex;
                    flex-direction: column;
                    align-items: center;
                    h6{
                        font-weight:200;
                        color:white;
                    }
                    h2{
                        font-weight: bold;
                        color: white;
                    }
                    .smallBox{
                        display: flex;
                        flex-direction: row;
                        flex-wrap: wrap; 
                        width:100%;                       
                        .box{
                            flex:1 1 45%;
                            border-radius: 5px;
                            border: 1px solid #838282;
                            padding: 5px;
                            height: 54px;
                            span{
                                font-weight: 200;
                                color: white;
                                font-size: .7rem;
                                padding-left: 20px;                            
                            }
                            h6{
                                font-weight:600;
                            }
                            &:nth-child(1){
                                margin-right:5px;
                            }
                        }
                    }
                    .chartContainer{
                        .heading{
                            display: flex;
                            flex-wrap: wrap;
                            flex-direction: row;
                            justify-content:space-between;

                            h6{
                                font-weight:600;
                                color:white;
                            }
                            span{
                                font-weight: 200;
                                color: white;
                                font-size: 0.7rem;                            
                            }
                        }
                        .chartRow{
                            display: flex;
                            flex-direction: row;
                            width:100%; 
                            overflow:hidden; 
                            gap: 8px;  
                        .chartBox{
                            padding: 5px;
                            border-radius: 5px;
                            flex:0 0 75%;
                                h3{
                                    font-weight:bold;
                                    font-size:1rem;
                                    span{
                                        font-weight: 300;
                                        font-size: .7rem;
                                        background-color: aquamarine;
                                        float: right;
                                        clear: both;
                                        padding: 2px;
                                    }
                                }
                                span{
                                    font-weight: 400;
                                    font-size: .7rem;  
                                    color: #9f9f9f; 
                                }
                                img{
                                    width:45%;
                                }
                                h3{

                                }
                                h4{
                                    font-weight:200;
                                    font-size: .7rem;
                                }

                                &:nth-child(1){
                                    background-color:#FDF9E6;
                                }
                                &:nth-child(2){
                                    background-color:#D9F7E8;
                                }

                            }
                        }
                    }
                    button{
                        border:1px solid white!important;
                        font-weight: 200;
                        font-size: 1rem!important;
                        width:100%;
                    }
                    .lastHeading{
                        font-weight:200;
                        font-size:.8rem;
                        span{
                            font-weight:700;
                        }
                    }
                }            
            }     

        }
    }

    @media only screen and (min-width: 1500px)  {
        .portfolio{
            height:600px!important;
        }
    }
  `;

  return (
    <Fullpage>
      <FullpageNavigation className="pageNavigator"></FullpageNavigation>
      <FullPageSections>
        <FullpageSection style={sectionStyle}>
          <Portfoliosection>
            <Container>
              <div className="parent">
                <div className="portfolioContainer">
                  <div className="portfolio">
                    <section className="left">
                    </section>
                    <section className="right">
                        <h6>my portfolio</h6>
                        <h2>₹ 128 </h2>
                        <div className="smallBox">
                            <div className="box">
                                <span>Gain</span>
                                <h6><ArrowDropUpIcon/>₹ 18</h6>
                            </div>
                            <div className="box">
                                <span>Loss</span>
                                <h6><ArrowDropDownIcon/>₹ 78</h6>
                            </div>
                        </div>

                        <div className="chartContainer">
                            <div className="heading">
                                <h6>Cases</h6>
                                <span>view all</span>
                            </div>
                            <div className="chartRow">
                            <div className="chartBox">
                                    <h3>BTC<span>+ 0,26%</span></h3>
                                    <span>Bitconin to USD</span>
                                    <img src={chart} alt="graph chart"/>
                                    <h3>₹ 20423</h3>
                                    <h4>20% of your portfolio</h4>
                                </div>
                                <div className="chartBox">
                                    <h3>BTC<span>+ 0,26%</span></h3>
                                    <span>Bitconin to USD</span>
                                    <img src={chart} alt="graph chart"/>
                                    <h3>₹ 20423</h3>
                                    <h4>20% of your portfolio</h4>
                                </div>
                                <div className="chartBox">
                                    <h3>BTC<span>+ 0,26%</span></h3>
                                    <span>Bitconin to USD</span>
                                    <img src={chart} alt="graph chart"/>
                                    <h3>₹ 20423</h3>
                                    <h4>20% of your portfolio</h4>
                                </div>
                            </div>
                           
                        </div>
                        <Button variant="outlined">
                            withdraw
                        </Button>

                        <h6 className="lastHeading">Tax free - <span>2,214%</span></h6>
                    </section>
                  </div>
                </div>
              </div>
            </Container>
          </Portfoliosection>
        </FullpageSection>
        <FullpageSection style={sectionStyle}>
          <Footer />
        </FullpageSection>
      </FullPageSections>
    </Fullpage>
  );
};

export default Portfolio;
