import React, { useState } from "react";
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
import chart1 from "./assets/images/chart1.png";
import chart2 from "./assets/images/chart2.png";
import {Button} from "@mui/material";
import HandshakeIcon from '@mui/icons-material/Handshake';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Alertcomponent from "./Portfolio/Alertcomponent";
import Holding from "./Portfolio/Holding";
import Investmentdetail from "./Portfolio/Investmentdetail";





interface TabPanelProps {
    children?: React.ReactNode;
    index: number;
    value: number;
  }
  

function TabPanel(props: TabPanelProps) {
    const { children, value, index, ...other } = props;
  
    return (
      <div
        role="tabpanel"
        hidden={value !== index}
        id={`simple-tabpanel-${index}`}
        aria-labelledby={`simple-tab-${index}`}
        {...other}
      >
        {value === index && (
          <Box sx={{ p: 3 }}>
            <Typography>{children}</Typography>
          </Box>
        )}
      </div>
    );
  }
  
  function a11yProps(index: number) {
    return {
      id: `simple-tab-${index}`,
      'aria-controls': `simple-tabpanel-${index}`,
    };
  }

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
                gap:30px;
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
                        box-shadow: rgb(38, 57, 77) 0px 20px 30px -10px;
                    }
                }
                .left{
                    .advisory_head{
                        h3{
                            color:white;
                            font-size: .8rem;  
                        }
                        h4{
                            color:white;  
                            font-size: 1rem;
                            font-weight:200;  
                        }
                    }

                    .MuiTabs-flexContainer{
                        background-color:white;
                        
                    }
                    #simple-tabpanel-0,#simple-tabpanel-1,#simple-tabpanel-2{
                        background-color:white;
                        height: 333px;
                        overflow: auto;
                        &::-webkit-scrollbar {
                            width: .3rem;   
                        }
                        &::-webkit-scrollbar-track {
                            background-color: #fff;
                        }
                        &::-webkit-scrollbar-thumb {
                            background: #013A39;
                            border-radius: 5rem;
                        }
                        .MuiBox-root{
                            padding:0px;
                        }
                    }
                    #simple-tabpanel-0{
                    }
                    #simple-tabpanel-1{
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
        #simple-tabpanel-0,#simple-tabpanel-1{
            height:433px!important;
        }

    }
  `;

  const [value, setValue] = React.useState(0);
  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
      setValue(newValue);
  };


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
                  {/* left section start */}
                    <section className="left">
                        <div className="advisory_head">
                            <h3>Welcome back anil</h3>
                            <h4>Investment advisor <HandshakeIcon/></h4>
                        </div>
                        <Box sx={{ width: '100%' }}>
                            <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
                            <Tabs value={value} onChange={handleChange} aria-label="basic tabs example">
                                <Tab label="alert" {...a11yProps(0)} />
                                <Tab label="holdings" {...a11yProps(1)} />
                                <Tab label="Investment details" {...a11yProps(1)} />
                            </Tabs>
                            </Box>
                            <TabPanel value={value} index={0}>
                                <Alertcomponent/>
                            </TabPanel>
                            <TabPanel value={value} index={1}>
                                <Holding/>
                            </TabPanel>
                            <TabPanel value={value} index={2}>
                                <Investmentdetail/>
                            </TabPanel>
                            
                        </Box>
                    </section>

                    {/* left section end */}
                    <section className="right">
                        <h6>my portfolio</h6>
                        <h2>₹ 5000128 </h2>
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
                                <h6>stocks</h6>
                                <span>view all</span>
                            </div>
                            <div className="chartRow">
                            <div className="chartBox">
                                    <h3>TCS<span>+ 0,26%</span></h3>
                                    <img src={chart1} alt="graph chart"/>
                                    <h3>₹ 3400</h3>
                                    <h4>20% of your portfolio</h4>
                                </div>
                                <div className="chartBox">
                                    <h3>BHDFC<span>+ 0,26%</span></h3>
                                    <img src={chart} alt="graph chart"/>
                                    <h3>₹ 20423</h3>
                                    <h4>20% of your portfolio</h4>
                                </div>
                            </div>
                           
                        </div>
                        <Button className="customButton" variant="outlined">
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
