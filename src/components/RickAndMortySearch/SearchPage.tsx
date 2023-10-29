import { Component } from 'react';
import { SearchBar } from '../SearchBar/SearchBar';
import { SearchList } from '../SearchList/SearchList';
import {
  CharacterInterface,
  SearchInfoInterface,
  SearchResponseInterface,
} from '../../interfaces/SearchResponse';

type State = {
  characters: Array<CharacterInterface>;
  info: SearchInfoInterface | null;
};

export class SearchPage extends Component<object, State> {
  state: Readonly<State> = {
    characters: [],
    info: null,
  };

  private handleChangeState = (response: Array<CharacterInterface> | SearchResponseInterface) => {
    if (Array.isArray(response)) {
      console.log('Characters to save: ', response);
      this.setState({
        characters: response,
        info: null,
      });
    } else {
      this.setState({
        characters: response.results,
        info: response.info,
      });
    }
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
