import React, { Component } from "react";
import { CardList } from "./components/card-list/card-list.component.jsx";
import "./App.css";

class App extends Component {
  constructor() {
    super();

    this.state = {
      characters: [],
    };
  }

  componentDidMount() {
    fetch("http://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then((users) => this.setState({ characters: users }));
  }

  render() {
    return (
      <div className="App">
        <CardList name="Alia">
          {this.state.characters.map((character) => (
            <h1 key={character.id}> {character.name}</h1>
          ))}
        </CardList>
      </div>
    );
  }
}

export default App;
