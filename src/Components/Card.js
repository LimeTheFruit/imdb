import React from 'react';
import Button from './Button';

const Card = ({image, name, popularity, action}) =>{
    return (
        <tr>
            <td><img src = {image} alt = {name}></img></td>
            <td>{name}</td>
            <td>{popularity}</td>
            <td><Button inTable = {true} clickHandler = {action} text = 'Delete'/></td>
        </tr>
    )
}

export default Card;