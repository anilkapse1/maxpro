import React from 'react'
import {Outlet, NavLink} from 'react-router-dom'
import styled from 'styled-components'
import Container from 'react-bootstrap/Container';
import Avatar from '@mui/material/Avatar';
import Stack from '@mui/material/Stack';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import Team from './Team';


const Header = () => {
    const Header = styled.section`
        position: fixed;
        width: 100%;
        z-index: 9999;
        padding: 10px 0px;
        top:0px;
        ul{
            display:flex;
            flex-wrap:wrap;
            justify-content:right;
            list-style-type:none;
            margin:0px;
            align-items:center;
            padding:0px;
            gap:5px;
            li{
                display:inline-block;
                a{
                    padding:5px 10px;
                    display:block;
                    color:${({theme})=>theme.colors.white};
                    font-weight:500;
                    border:1px solid transparent;
                    text-transform:uppercase;

                    &:hover{
                        box-shadow: rgba(50, 50, 93, 0.25) 0px 30px 60px -12px, rgba(0, 0, 0, 0.3) 0px 18px 36px -18px;
                        border:1px solid yellow;
                        border-radius:10px;
                    }
                    &.active{
                        font-weight:500;
                       box-shadow: rgba(50, 50, 93, 0.25) 0px 30px 60px -12px, rgba(0, 0, 0, 0.3) 0px 18px 36px -18px;
                       border:1px solid yellow;
                       border-radius:10px;
                    }

                }
                
            }
            .logo{
                color:${({theme})=>theme.colors.white};
                margin-right:auto;
                font-size:3rem;
                span{
                    color:cyan;
                }
            }
            .avtar{
                div{
                    flex-direction: row-reverse;
                    align-items: center;
                    span{
                        margin-left: 5px;
                        color: cyan;
                    }
                    .MuiAvatar-root{
                        width:30px;
                        height:30px;
                        font-size:1rem;
                    }
                }
            }
        }
    `;

  return (
        <Header>
            <Container>
                <nav>
                    <ul>
                        <li className='logo'>Max<span>Pro</span></li>
                        <li><NavLink to="/maxpro">Home</NavLink></li>
                        <li><NavLink to="/risk-profiler">risk profiler</NavLink></li>
                        <li><NavLink to="/portfolio">portfolio</NavLink></li>
                        <li><NavLink to="/team">team</NavLink></li>
                        <li className='avtar'>
                            <Stack direction="row">
                                <span>Me<ArrowDropDownIcon/></span>
                                <Avatar alt="Anil" src="/static/images/avatar/1.jpg" />
                            </Stack>
                        </li>
                    </ul>
                </nav>
            </Container>
        </Header>
    )

   
}

export default Header