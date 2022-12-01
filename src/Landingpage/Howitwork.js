import React, { useEffect, useState } from 'react'
import { Container } from 'react-bootstrap'
import styled from 'styled-components'
import { data } from '../data'
import work from '../assets/images/work.png'


const Howitwork = () => {
    const Part=styled.section`
        background:${({theme})=>theme.colors.text1};
        height:100%;
        padding-top:100px;
        .parent{    
            display: flex;
            flex-wrap: wrap;
            flex-direction: row;
            align-items:center;
            height: calc(100vh - 100px);
            section{
              flex:1 1 50%;
              span{
                color:${({theme})=>theme.colors.white};
                font-size:1.2rem;
                font-weight: 200;
                margin-bottom: 15px;
                display: block;
              }
              h1{
                font-weight:500;
                color:${({theme})=>theme.colors.white};
              }
              .list_container{
                list-style-type:none;
                margin:0px;
                padding:0px;
                width:80%;
                  li{
                    display: block;
                    padding: 15px 10px;
                    border-bottom: 1px solid #b3b3b3;
                    overflow:hidden;
                    height:55px;
                    transition:all ease-out 2s;
                    h4{
                      color:${({theme})=>theme.colors.cyan};
                      font-weight:300;
                      font-size:1.2rem;
                      margin:0px;
                    }
                    p{
                      transform:translateY(200%);
                      margin-top: 10px;
                      color: ${({theme})=>theme.colors.white};
                      transition:all 1s;
                    }
                    &.active{
                      height:auto;
                      p{
                        transform:translateY(0);
                        transition:all 1s;
                      }
                    }
                  }
              }
              &:nth-child(1){
                display:flex;
                flex-direction:column;
                height:100%;
                justify-content:space-evenly;
              }
              img{
                width:50%;
              }
              &:nth-child(2){
                text-align:center;
              }
            }
        }
    `;

  const [color, setColor] = useState(data);

  let list_container;      
  useEffect(()=>{
    list_container = document.querySelector('.list_container')

  });


  function cycle(index) {
    setTimeout(function() {
      for(let i=0;i<color.length;i++){
        list_container.children[i].classList.remove('active');
      }
      list_container.children[index].classList.add('active')
      index++; 
      if (index >= 3) {
          index = 0; 
      }
      cycle(index); 
    }, 2000);
}
cycle(0);


  return (
    <Part>
        <Container>
          <div className='parent'>
          <section>
            <div className='heading'>
              <span>everything you need to invest</span>
              <h1>simple, quick & delightful investing for you</h1>
            </div>
            <ul className='list_container'>
            <li>
              <h4>Buy a plan</h4>
              <p>Choose a plan that suits your investment profile.</p>
            </li>
            <li>
              <h4>Take a simple risk appetite test</h4>
              <p>A simple questionnaire will help you to gauge your risk appetite.</p>
            </li>
            <li>
              <h4>Get timely investment alerts</h4>
              <p>We will provide timely stock alerts based on your risk profile and market direction.</p>
            </li>
             </ul>
            </section>
            <section>
              <img src={work} alt="how it works"/>
            </section>
          </div>
        </Container>
    </Part>
  )
}

export default Howitwork