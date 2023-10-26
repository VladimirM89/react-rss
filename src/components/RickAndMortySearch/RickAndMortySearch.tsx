import { Component } from 'react';
import { SearchBar } from '../SearchBar/SearchBar';
import { SearchList } from '../SearchList/SearchList';
import { CharacterInterface } from '../../interfaces/SearchResponse';

type State = {
  characters: Array<CharacterInterface>;
};

export class RickAndMortySearch extends Component {
  state: Readonly<State> = {
    characters: [],
  };

  render() {
    return (
      <div>
        <SearchBar />
        <SearchList />
      </div>
    );
  }
}
