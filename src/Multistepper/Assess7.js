import React from 'react'
import styled from 'styled-components'
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import FormControl from '@mui/material/FormControl';
import TextField from '@mui/material/TextField';
import FormLabel from '@mui/material/FormLabel';
import InputLabel from '@mui/material/InputLabel';
import Input from '@mui/material/Input';
import InputAdornment from '@mui/material/InputAdornment';
import PercentIcon from '@mui/icons-material/Percent';
import ThirtyFpsIcon from '@mui/icons-material/ThirtyFps';
import DriveFileRenameOutlineIcon from '@mui/icons-material/DriveFileRenameOutline';
import PhoneIcon from '@mui/icons-material/Phone';



const Assess7 = () => {
    const Formsection=styled.section`
        h3{
            color:${({theme})=>theme.colors.white};
            margin-top:40px;
            margin-bottom:10px;
            font-weight:200;
        }
        .MuiFormControl-root{
            label{
                color:${({theme})=>theme.colors.white};
                font-size:1.2rem;
            }
            label+.css-1ptx2yq-MuiInputBase-root-MuiInput-root {
                margin-top: 12px;
            }
        }

        
    
    `;
  return (
    <Formsection>

        <h3>Help us understand a bit more about you</h3>
        <FormControl  sx={{ m: 1 }} variant="standard">
          <InputLabel htmlFor="standard-adornment-amount">My name is (optional)</InputLabel>
          <Input
            id="standard-adornment-amount"
            startAdornment={<DriveFileRenameOutlineIcon position="start">$</DriveFileRenameOutlineIcon>}
          />
        </FormControl>

        <FormControl sx={{ m: 1 }} variant="standard">
          <InputLabel htmlFor="standard-adornment-amount">My contact no is (optional)</InputLabel>
          <Input
            id="standard-adornment-amount"
            startAdornment={<PhoneIcon position="start">$</PhoneIcon>}
          />
        </FormControl>
        <div></div>
        <FormControl  sx={{ m: 1 }} variant="standard">
          <InputLabel htmlFor="standard-adornment-amount">My Age is</InputLabel>
          <Input
            id="standard-adornment-amount"
            startAdornment={<ThirtyFpsIcon position="start">$</ThirtyFpsIcon>}
          />
        </FormControl>



        <FormControl sx={{ m: 1 }} variant="standard">
          <InputLabel htmlFor="standard-adornment-amount">My Annual Income</InputLabel>
          <Input
            id="standard-adornment-amount"
            startAdornment={<InputAdornment position="start">$</InputAdornment>}
          />
        </FormControl>
        <div></div>
        <FormControl  sx={{ m: 1 }} variant="standard">
          <InputLabel htmlFor="standard-adornment-amount">Saving from Income</InputLabel>
          <Input
            id="standard-adornment-amount"
            startAdornment={<PercentIcon position="start">$</PercentIcon>}
          />
        </FormControl>


    </Formsection>
  )
}

export default Assess7