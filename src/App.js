import React from 'react';
import Navigation from "./components/Navigation";
import CharacterList from "./components/CharacterList";
import axios from "axios";

class App extends React.Component {

  onNavigationChange = (filter, type) => {
    this.setState({characterList: []}, function() {
      if(type === "locations") {
        this.onLoadLocations(filter);
      } else {
        this.onLoadEpisodes();
      }
    });
  }

  state = {
    locations: [],
    characterList: [],
    characters: [],
    loading: false,
    filter: {dimension: 'Fantasy Dimension'}
  }

  async onLoadLocations(filter) {
    this.setState({loading: true});

    const response = await axios.get('https://rickandmortyapi.com/api/location/', {
      params: filter
    });

    response.data.results.map((result) => {
      if(result.residents){
        result.residents.map((resident) => {
          this.setState({characterList: [...this.state.characterList, this.getIdFromCharacter(resident)]});
        });
      }
    });

    this.onLoadCharacters();

  }

  async onLoadEpisodes() {
    this.setState({loading: true});

    const response = await axios.get('https://rickandmortyapi.com/api/episode/9');

    if(response.data){
      response.data.characters.map((character) => {
        this.setState({characterList: [...this.state.characterList, this.getIdFromCharacter(character)]});
      });
    }

    this.onLoadCharacters();

  }

  async onLoadCharacters() {
    const response = await axios.get(`https://rickandmortyapi.com/api/character/${this.state.characterList}`);
    this.setState( { characters: response.data, loading: false} );
  }

  getIdFromCharacter(value) {
    return value.replace(/\D/g, "");
  }

  componentDidMount() {
    this.onLoadLocations(this.state.filter);
  }

  render() {
    return (
      <div className="ui container">
        <Navigation onClick={this.onNavigationChange}/>
        <CharacterList loading={this.state.loading} characters={this.state.characters} />
      </div>
    );
  }
}

export default App;
