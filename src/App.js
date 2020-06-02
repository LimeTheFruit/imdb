import React, {Component} from 'react';
import './App.css';
import IMDB from './Data/imdb.json';
import Button from './Components/Button';
import Card from './Components/Card';
import styled from 'styled-components';

const ButtonDiv = styled.div`
  width: 100%;
  display: inline-flex;
  justify-content: center;
  align-items: center;
  `;

const generateRandomActors = (amount) =>{
  let result = [];
  for (let i = 0; i < amount; i++) {
    let index = Math.floor(Math.random() * imdbArray.length);
    result.push(imdbArray[index]);
  }
  return result;
}

let imdbArray = IMDB;
let chosenActors = generateRandomActors(5); 

class App extends Component{

  constructor(props){
    super(props)

    this.state = {
      displayedActors: chosenActors
    };

  }

  newActor = () =>{
    let index = Math.floor(Math.random() * imdbArray.length);
    chosenActors.push(imdbArray[index]);
    this.setState({fiveActors: chosenActors});
  }

  sortByName = () =>{
   chosenActors.sort((a, b) => a.name > b.name);
   this.setState({fiveActors: chosenActors});
}

  sortByPopularity = () =>{
    chosenActors.sort((a, b) => a.popularity > b.popularity);
    this.setState({fiveActors: chosenActors});
  }

  deleteActor = (e) =>{
    let index = e.target.parentElement.parentElement.rowIndex;
    chosenActors.splice(Number(index - 1), 1);
    this.setState({fiveActors: chosenActors});
  }

    render(){
    return (
      <div className="App">
        <header className="App-header">
          
          <ButtonDiv>
          <Button inTable = {false} clickHandler = {this.newActor} text = 'Generate random actor'/>
          <Button inTable = {false} clickHandler = {this.sortByName} text = 'Sort by name'/>
          <Button inTable = {false} clickHandler = {this.sortByPopularity} text = 'Sort by popularity'/>
          </ButtonDiv>
          <table>
            <thead>
              <tr>
                <th>Picture</th>
                <th>Name</th>
                <th>Popularity</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {this.state.displayedActors.map(i => 
                <Card key= {i.name} image = {i.pictureUrl}
                name = {i.name}
                popularity = {i.popularity}
                action = {this.deleteActor}
            />)}
            </tbody>
          </table>
        </header>
      </div>
    );
  }
}

export default App;
