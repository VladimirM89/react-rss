import { Component, createRef } from 'react';
import { getCharacters } from '../../api/SearchApi';
import { SearchResponseInterface, CharacterInterface } from '../../interfaces/SearchResponse';
import {
  getItemFromLocalStorage,
  removeItemFromLocalStorage,
  saveToLocalStorage,
} from '../../utils/localStorage';
import { AxiosError } from 'axios';
import cn from 'classnames';
import styles from './SearchBar.module.scss';

type State = {
  inputValue: string;
  hasError: boolean;
};

type Props = {
  saveToState: (response: Array<CharacterInterface> | SearchResponseInterface) => void;
};
export class SearchBar extends Component<Props, State> {
  state: Readonly<State> = {
    inputValue: getItemFromLocalStorage('inputValue') || '',
    hasError: false,
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
    } catch (error: unknown) {
      console.log('Please enter correct name and try again');
      const err = error as AxiosError;
      console.log(err.name, err.message);
      this.setState({ hasError: true });
      this.props.saveToState([]);
      this.setState({ inputValue: '' });
    }
  }

  private handleStorage(): void {
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
    if (this.state.hasError) {
      throw new Error('Error Boundary from API');
    }
    return (
      <form className={styles.form_container} onSubmit={this.handleSearch}>
        <input
          className={styles.search_input}
          type="text"
          ref={this.inputRef}
          value={this.state.inputValue}
          onChange={this.handleInput}
        />
        <button className={cn('btn', styles.search_btn)} type="submit">
          Search
        </button>
      </form>
    );
  }
}
