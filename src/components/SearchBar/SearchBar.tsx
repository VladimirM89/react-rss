import { Component, createRef } from 'react';
import searchApiAxios from '../../api/SearchApi';
import { SearchResponseInterface, CharacterInterface } from '../../interfaces/SearchResponse';
import getAllCharacterIds from '../../utils/queryParams';

interface SearchParams {
  name?: string;
  page?: number;
}

type State = {
  inputValue: string;
};
export class SearchBar extends Component<object, State> {
  state: Readonly<State> = {
    inputValue: '',
  };

  inputRef: React.RefObject<HTMLInputElement> = createRef();

  async componentDidMount(): Promise<void> {
    this.inputRef.current?.focus();
    // this.getCharacters();
  }

  async getCharacters(params: SearchParams | null = null): Promise<void> {
    if (!!this.state.inputValue) {
      const response = await searchApiAxios.get<SearchResponseInterface>(``, {
        params,
      });
      console.log('filtered chars', response.data);
    } else {
      const response = await searchApiAxios.get<SearchResponseInterface>('');
      const charactersCount = response.data.info.count;

      const stringOfIds = getAllCharacterIds(charactersCount);

      const allChars = await searchApiAxios.get<CharacterInterface>(`${stringOfIds}`);
      console.log('all chars:', allChars.data);
    }
  }

  private handleInput = (event: React.ChangeEvent<HTMLInputElement>): void => {
    this.setState({
      inputValue: event.target.value,
    });
  };

  private handleSearch = (event: React.FormEvent<HTMLFormElement | HTMLButtonElement>): void => {
    this.getCharacters({
      name: this.state.inputValue,
    });

    this.inputRef.current?.blur();
    event.preventDefault();
  };

  render() {
    return (
      <div>
        <form onSubmit={this.handleSearch}>
          <input
            type="text"
            ref={this.inputRef}
            value={this.state.inputValue}
            onChange={this.handleInput}
          />
          <button type="submit">Search</button>
        </form>
      </div>
    );
  }
}
