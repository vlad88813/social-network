import React from 'react';
import styled, {css, keyframes} from 'styled-components'

const rotateAnimation = keyframes`
0% {
    transform: rotateZ(0deg);
}
30% {
    transform: rotateZ(-10deg);
}
80% {
    transform: rotateZ(10deg)
}
100%{
    transform: rotateZ(0deg);
}
` 


const StyledButton = styled.button`
border: 1px solid NavajoWhite;
background: transparent;
padding: 10px 15px;
font-size: 18px;
cursor:pointer;
align-self:${props => props.align || 'stretch'};
&: hover {
    animation: ${rotateAnimation} 1s infinite linear
}
&: focus {
    outline:none;
}
${props => props.primary &&  css`
    color: ${props => props.color || 'white'};
    // background: ${props => props.background || 'white'};

`}
`

//код ниже пример наследования 
const LargeButton = styled(StyledButton)`
font-size: 32px;
`
//


const Button = (props) => {
    return (<StyledButton {...props}/>
 )
}

export default Button;