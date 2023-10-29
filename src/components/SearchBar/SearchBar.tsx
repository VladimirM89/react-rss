import { Component, createRef } from 'react';
import { getCharacters } from '../../api/SearchApi';
import { SearchResponseInterface, CharacterInterface } from '../../interfaces/SearchResponse';
import {
  getItemFromLocalStorage,
  removeItemFromLocalStorage,
  saveToLocalStorage,
} from '../../utils/localStorage';

type State = {
  inputValue: string;
};

type Props = {
  saveToState: (response: Array<CharacterInterface> | SearchResponseInterface) => void;
};
export class SearchBar extends Component<Props, State> {
  state: Readonly<State> = {
    inputValue: getItemFromLocalStorage('inputValue') || '',
  };

  inputRef: React.RefObject<HTMLInputElement> = createRef();

  componentDidMount(): void {
    this.getDataFromApi();
  }

  private async getDataFromApi(): Promise<void> {
    try {
      const response = await getCharacters({
        name: this.state.inputValue,
      });
      this.props.saveToState(response);
    } catch (error) {
      console.log('error: ', error);
    }
  }

  private handleStorage() {
    if (!!this.state.inputValue) {
      saveToLocalStorage('inputValue', this.state.inputValue);
    } else {
      removeItemFromLocalStorage('inputValue');
    }
  }

  private handleInput = (event: React.ChangeEvent<HTMLInputElement>): void => {
    this.setState({
      inputValue: event.target.value,
    });
  };

  private handleSearch = (event: React.FormEvent<HTMLFormElement | HTMLButtonElement>): void => {
    this.getDataFromApi();

    this.handleStorage();

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
