import React from 'react'
import styled from 'styled-components'
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import { Radio } from '@mui/material';


const Assess1 = () => {
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
        <h3>Q.1 What percentage of your monthly income can you save.</h3>
        <FormControl>
            <FormGroup>
                <FormControlLabel control={<Radio/>} label="less than 5%" />
                <FormControlLabel control={<Radio/>} label="5 to 10%" />
                <FormControlLabel control={<Radio/>} label="10 to 20%" />
                <FormControlLabel control={<Radio/>} label="more than 20%" />
            </FormGroup>
        </FormControl>
        
    </Formsection>
  )
}

export default Assess1