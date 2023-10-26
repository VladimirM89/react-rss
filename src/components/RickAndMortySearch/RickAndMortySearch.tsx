import { Component } from 'react';
import { SearchBar } from '../SearchBar/SearchBar';
import { SearchList } from '../SearchList/SearchList';
import { CharacterInterface, SearchResponseInterface } from '../../interfaces/SearchResponse';

type State = {
  characters: Array<CharacterInterface>;
};

export class RickAndMortySearch extends Component<object, State> {
  state: Readonly<State> = {
    characters: [],
  };

  private handleChangeState = (items: SearchResponseInterface) => {
    console.log('Characters to save: ', items);
    this.setState({
      characters: items.results,
    });
  };

  render() {
    return (
      <div>
        <SearchBar saveToState={this.handleChangeState} />
        <SearchList list={this.state.characters} />
      </div>
    );
  }
}
