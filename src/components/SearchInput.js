import React from 'react';
import TextField from "@mui/material/TextField";
import BarChartSharpIcon from '@mui/icons-material/BarChartSharp';
import { styled } from '@mui/material/styles';

const textFieldStyles = {
    width: "50%",
    margin: "0 auto",
    padding: '5rem'
}

const CssTextField = styled(TextField)({
    '& label.Mui-focused': {
      color: '#e65100',
    },
    '& .MuiInput-underline:after': {
      borderBottomColor: '#e65100',
    },
    '& .MuiOutlinedInput-root': {
      '& fieldset': {
        borderColor: '#e65100',
      },
      '&:hover fieldset': {
        borderColor: '#e65100',
      },
      '&.Mui-focused fieldset': {
        borderColor: '#e65100',
      },
    },
});


const SearchInput = ({inputHandler, graphHandler}) => {
  return (
    <div style={textFieldStyles}>
        <CssTextField id='custom-css-outlined-input' label='Search countries by name' fullWidth onChange={inputHandler}/>
        <div style={{display: 'flex', justifyContent: 'center'}}>
            <BarChartSharpIcon sx={{fontSize: 50, color:'#e65100', marginTop:'2rem'}} onClick={graphHandler}/>
        </div>
    </div>
  )
}

export default SearchInput