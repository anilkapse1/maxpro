import React from 'react'
import styled from 'styled-components'
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import { Radio } from '@mui/material';



const Assess2 = () => {
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
        <h3>Q.2 What is your age group?</h3>
        <FormControl>
            <FormGroup>
                <FormControlLabel control={<Radio/>} label="20 to 35" />
                <FormControlLabel control={<Radio/>} label="35 to 50" />
                <FormControlLabel control={<Radio/>} label="50 to 60" />
                <FormControlLabel control={<Radio/>} label="above 60" />
            </FormGroup>
        </FormControl>
    </Formsection>
  )
}

export default Assess2