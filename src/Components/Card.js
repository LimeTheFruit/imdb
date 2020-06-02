import React from 'react';
import Button from './Button';
import styled from 'styled-components';

const StyledTd = styled.td`
      padding: 10px 30px;
    `;

const Card = ({image, name, popularity, action}) =>{
    return (
        <tr>
            <StyledTd><img src = {image} alt = {name}></img></StyledTd>
            <StyledTd>{name}</StyledTd>
            <StyledTd>{popularity}</StyledTd>
            <StyledTd><Button inTable = {true} clickHandler = {action} text = 'Delete'/></StyledTd>
        </tr>
    )
}

export default Card;