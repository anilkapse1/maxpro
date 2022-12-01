import React, { useEffect, useState } from 'react'
import styled from 'styled-components'

const Clock = () => {
    
    const Section = styled.section`
        display: flex;
        flex-wrap: wrap;
        justify-content:center;
    div{
        display: flex;
        flex-wrap: wrap;
        flex-direction: column;
        padding: 20px 30px;
        text-align: center;
        background-color:rgb(244,11,35,.1);
        color:${({theme})=>theme.colors.white};
        margin-right:5px;
        border-radius:5px;
        span{
            font-weight:400;
        }
}
`;

    
    const [timerDays, setTimerDays] = useState();
    const [timerHours, setTimerHours] = useState();
    const [timerMin, setTimerMin] = useState();
    const [timerSec, setTimerSec] = useState();


    let interval;
    const startTimer=()=>{
    const countDownDate = new Date("Dec 31,2022");
    interval= setInterval(()=>{
        const now= new Date().getTime();
        const distance = countDownDate-now;
        const days = Math.floor(distance/(24*60*60*1000));
        const hours = Math.floor((distance % (24*60*60*1000))/ (1000*60*60));
        const min = Math.floor((distance % (60*60*1000))/ (1000*60));
        const sec = Math.floor((distance % (60*1000))/ (1000));

        if(distance<0){
            clearInterval(interval);
        }else{
            setTimerDays(days);
            setTimerHours(hours);
            setTimerMin(min);
            setTimerSec(sec);
        }
    })
}

useEffect(()=>{
    startTimer();
})

  return (
    <>
    <Section className='timer'>
        <div>
            <span>{timerDays}</span>
            <span>day</span>
        </div>
        <div>
            <span>{timerHours}</span>
            <span>hours</span>
        </div>
        <div>
            <span>{timerMin}</span>
            <span>mins</span>
        </div>
        <div>
            <span>{timerSec}</span>
            <span>secs</span>
        </div>
        
    </Section>
    </>
  )
}

export default Clock