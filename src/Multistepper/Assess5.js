import React from 'react'
import styled from 'styled-components'
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import { Radio } from '@mui/material';




const Assess5 = () => {
    const Formsection=styled.section`
        h3{
            color:${({theme})=>theme.colors.white};
            margin-top:20px;
            font-weight:200;
        }
        .MuiFormControl-root{
            label{
                span{
                    color:${({theme})=>theme.colors.text1};
                    &:nth-child(2){
                        color:${({theme})=>theme.colors.white};
                    }
                }
            }
        }
    `;

  return (
    <Formsection>
        <h3>Q.5 If your investment make 10% losses next year will you ?</h3>
        <FormControl>
            <FormGroup>
                <FormControlLabel control={<Radio/>} label="Sell Your Investments And Put The Proceeds In Fixed Deposits" />
                <FormControlLabel control={<Radio/>} label="Sell Some Investments And Continue To Hold The Rest" />
                <FormControlLabel control={<Radio/>} label="Do Nothing" />
                <FormControlLabel control={<Radio/>} label="Take Advantage Of The Correction And Invest Some More Money" />
            </FormGroup>
        </FormControl>
    </Formsection>
  )
}

export default Assess5