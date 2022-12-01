import React from 'react'
import styled from 'styled-components'
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import { Radio } from '@mui/material';




const Assess4 = () => {
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
        <h3>Q.4 In which of the following options have you made highest investment till date ?</h3>
        <FormControl>
            <FormGroup>
                <FormControlLabel control={<Radio/>} label="Liquid Funds FD, PPF" />
                <FormControlLabel control={<Radio/>} label="Debt Mutual Funds, Bonds" />
                <FormControlLabel control={<Radio/>} label="Shares, Equity Oriented Funds" />
                <FormControlLabel control={<Radio/>} label="Alternate Assets" />
            </FormGroup>
        </FormControl>
    </Formsection>
  )
}

export default Assess4