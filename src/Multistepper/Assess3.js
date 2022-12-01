import React from 'react'
import styled from 'styled-components'
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import { Radio } from '@mui/material';




const Assess3 = () => {
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
        <h3>Q.3 What would be your ideal time horizon for mutual fund investment ?</h3>
        <FormControl>
            <FormGroup>
                <FormControlLabel control={<Radio/>} label="Less Than 1 Year" />
                <FormControlLabel control={<Radio/>} label="1 To 3 Years" />
                <FormControlLabel control={<Radio/>} label="3 To 5 Years" />
                <FormControlLabel control={<Radio/>} label="More Than 5 Years" />
            </FormGroup>
        </FormControl>
    </Formsection>
  )
}

export default Assess3