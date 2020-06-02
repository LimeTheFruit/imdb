import React from 'react';
import styled from 'styled-components';

const Button = ({clickHandler, text, inTable}) =>{
    
    const StyledButton = styled.button`
    height: 50px;
    font-size: 15px;
    border: 0px;
    border-radius: 10px;
    box-shadow: 0px 0px 8px white;
    margin: ${inTable ? '0px' : '5px'};
    color: ${inTable ? 'White' : 'Black'};
    background-color: ${inTable ? '#151623' : 'White'};
    width: ${inTable ? '100%' : 'unset'};
    padding: ${!inTable ? '0px 30px' : 'unset'};
`;

    return <StyledButton className = 'button' onClick = {clickHandler}>{text}</StyledButton>
  
}

export default Button;