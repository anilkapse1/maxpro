import React from 'react'
import styled from 'styled-components'
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import { Radio } from '@mui/material';




const Assess6 = () => {
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
        <h3>Q.6 What factor is most important for you while choosing an investment ?</h3>
        <FormControl>
            <FormGroup>
                <FormControlLabel control={<Radio/>} label="Highest Potential Return" />
                <FormControlLabel control={<Radio/>} label="Regular Income And Marginal Capital Appreciation" />
                <FormControlLabel control={<Radio/>} label="Regular Income" />
                <FormControlLabel control={<Radio/>} label="Preservation Of Capital" />
            </FormGroup>
        </FormControl>
    </Formsection>
  )
}

export default Assess6