import React from 'react';
import styled from 'styled-components'


const StyledConsole = styled.textarea`
width:100%;
height:70vh;
background:Wheat;
font-size:20px;
border:none;
resize:none;
color: ${({color})=> color || 'Indigo'};
&:focus{
    outline:none;
}

`


const Console = (props) => {
    return (<StyledConsole {...props}/>
 )
}

export default Console;