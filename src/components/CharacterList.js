import React from 'react';
import Character from "./Character";

class CharacterList extends React.Component {

  renderCharacterList() {
    if(this.props.characters.length > 0) {
      return this.props.characters.map((character, index) => {
        return <Character loading={this.props.loading} key={index} character={character}/>;
      });
    }
    return <div>No results</div>;
  }

  render() {
    return(
      <div>
        <h1>List of characters</h1>
        <div className="ui four doubling stackable cards">{this.renderCharacterList()}</div>
      </div>
    );
  }
}

export default CharacterList;