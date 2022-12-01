import React from 'react'
import styled from "styled-components";
import chart1 from '../assets/images/chart1.png'
import chart2 from '../assets/images/chart2.png'
import MoreVertIcon from '@mui/icons-material/MoreVert';

const Alertcomponent = () => {
  const Alertsection = styled.section`
  .dataContainer{
    .buy{
      display: flex;
      flex-direction: row;
      flex-wrap: wrap;
      justify-content: space-between;
      align-items: center;
      border-bottom:1px solid #ededed;
      padding:14px 20px;      
    h6{
      font-weight: 600;
      text-transform: uppercase;
      font-size: .8rem;
      color: #727272;        
      span{
        width: 10px;
        height: 10px;
        background-color: #51B480;
        display: inline-block;
        border-radius: 50%;
        margin-right: 10px;      
        }
      }
      img{
        width:10%;
      }
      .chartCon{
        font-weight:bold;
        h3{
          font-weight: bold;
          font-size: .8rem;
          color: #727272;        
        }
        h2{
          font-weight:bold;
          font-size: 1rem;
          span{
            font-weight: bold;
            color: #51B480;
            font-size: .7rem;
            margin-left: 10px;

          }
        }
      }
      button{
        border:2px solid #51B480;
        padding:5px 10px;
        text-transform:uppercase;
        background:none;
        border-radius:10px;
        font-size:.8rem;

      }
      .dot{
        font-weight:bold;
      }
    }

    .sell{
      display: flex;
      flex-direction: row;
      flex-wrap: wrap;
      justify-content: space-between;
      align-items: center;      
      border-bottom:1px solid #ededed;
      padding:14px 20px;        
    h6{
      font-weight: 600;
      text-transform: uppercase;
      font-size: .8rem;
      color: #727272;        
      span{
        width: 10px;
        height: 10px;
        background-color: #FDE799;
        display: inline-block;
        border-radius: 50%;
        margin-right: 10px;      
        }
      }
      img{
        width:10%;
      }
      .chartCon{
        font-weight:bold;
        h3{
          font-weight: bold;
          font-size: .8rem;
          color: #727272;        
        }
        h2{
          font-weight:bold;
          font-size: 1rem;
          span{
            font-weight: bold;
            color: #FDE799;
            font-size: .7rem;
            margin-left: 10px;

          }
        }
      }
      button{
        border:2px solid #FDE799;
        padding:5px 10px;
        text-transform:uppercase;
        background:none;
        border-radius:10px;
        font-size:.8rem;

      }
      .dot{
        font-weight:bold;
      }
    }
  }
  
  `;
  return (
    <Alertsection>
      <div className='dataContainer'>
      <div className='buy'>
          <h6><span></span>buy</h6>
          <img src={chart1} alt="chart"/>
          <div className='chartCon'>
            <h3>Adani ENT /INR</h3>
            <h2>₹3900<span>+0,26%</span></h2>
          </div>
          <button>buy</button>
          <div className='dot'>
            <MoreVertIcon/>
          </div>
        </div>
        <div className='buy'>
          <h6><span></span>buy</h6>
          <img src={chart1} alt="chart"/>
          <div className='chartCon'>
            <h3>TCS /INR</h3>
            <h2>₹3400<span>+0,26%</span></h2>
          </div>
          <button>buy</button>
          <div className='dot'>
            <MoreVertIcon/>
          </div>
        </div>
        <div className='buy'>
          <h6><span></span>buy</h6>
          <img src={chart1} alt="chart"/>
          <div className='chartCon'>
            <h3>MAXHEALTH /INR</h3>
            <h2>₹451<span>+0,26%</span></h2>
          </div>
          <button>buy</button>
          <div className='dot'>
            <MoreVertIcon/>
          </div>
        </div>
        <div className='sell'>
          <h6><span></span>sell</h6>
          <img src={chart2} alt="chart"/>
          <div className='chartCon'>
            <h3>JINDALSTEL /INR</h3>
            <h2>₹562<span>+0,26%</span></h2>
          </div>
          <button>sell</button>
          <div className='dot'>
            <MoreVertIcon/>
          </div>
        </div>
        <div className='buy'>
          <h6><span></span>buy</h6>
          <img src={chart1} alt="chart"/>
          <div className='chartCon'>
            <h3>SBI /INR</h3>
            <h2>₹608<span>+0,26%</span></h2>
          </div>
          <button>buy</button>
          <div className='dot'>
            <MoreVertIcon/>
          </div>
        </div>
      </div>
    </Alertsection>
  )
}

export default Alertcomponent