import React from 'react'
import { Container } from 'react-bootstrap'
import styled from 'styled-components'
import ankit from './assets/images/ankit.png'
import yogi from './assets/images/yogi.png'
import anil from './assets/images/anil.jpg'


const Team = () => {
    const Teamsection=styled.section`
            height:100vh;
            background:linear-gradient(0deg,rgba(0,86,143,1) 0%,rgba(0,86,143,1) 35%,rgba(0,165,195,1) 100%);
            background-size:50%;
            padding-top:100px;
            .parent{
                height:calc(100vh - 100px);

                h1{
                    color: white;
                    font-size: 2rem;
                    font-weight: 200;
                }
                .teamcontainer{
                    display:flex;
                    flex-direction:row;
                    flex-wrap:wrap;

                    .box{
                        flex: 1 1 20%;
                        text-align:center;
                        padding:0px 20px;
                        .image_container{
                            width: 180px;
                            height: 180px;
                            border-radius: 50%;
                            border: 2px solid white;
                            overflow: hidden;
                            margin: auto;
                            margin-bottom: 10px;
                            img{
                                width:100%;
                                height:100%;
                            }
                        }
                        h2{
                            font-weight: 200;
                            color: cyan;
                        }
                        span{
                            font-weight: 400;
                            color: #36dddd;
                            display: block;
                            margin-bottom: 10px;
                        }
                        p{
                            font-weight:200;
                            font-size:1rem;
                            color:white;
                        }
                    }
                }
            }
    
    `;
  return (
    <Teamsection>
        <Container>
            <div className='parent'>
                <h1>our team </h1>
                <div className='teamcontainer'>
                    <div className='box'>
                        <div className='image_container'>
                            <img src={ankit} alt="userprofile"/>
                        </div>
                        <h2>ankit yadav</h2>
                        <span>Manager - QA</span>
                        <p>
                        A passionate QA Manager having an insatiable appetite for steering software applications & products to high quality standards. A practicing servant leader and an avid traveler.
                        </p>
                    </div>
                    <div className='box'>
                    <div className='image_container'>
                            <img src={yogi} alt="userprofile"/>
                        </div>
                        <h2>Yogendra Sahu</h2>
                        <span>software engineer</span>
                        <p>
                        A Full Stack Developer, I work in a constantly evolving environment. I create, maintain, audit and improve systems to meet particular needs, often as advised by a systems analyst or architect, testing software systems to diagnose and resolve.                          </p>
                    </div>
                    <div className='box'>
                    <div className='image_container'>
                            <img src={anil} alt="userprofile"/>
                        </div>
                        <h2>anil kapse</h2>
                        <span>Senior UI Developer</span>
                        <p>
                        a Senior UI developer, my job is essentially to turn designs/business idea into reality via code and enable user to interact with a data in a safe and user-friendly way.
                        </p>
                    </div>

                </div>
            </div>
        </Container>
    </Teamsection>
  )
}

export default Team