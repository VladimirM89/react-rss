import { Component } from 'react';
import { SearchBar } from '../SearchBar/SearchBar';
import { SearchList } from '../SearchList/SearchList';
import {
  CharacterInterface,
  SearchInfoInterface,
  SearchResponseInterface,
} from '../../interfaces/SearchResponse';
import { ErrorButton } from '../ErrorButton/ErrorButton';
import { ErrorBoundary } from '../ErrorBoundary/ErrorBoundary';
import { Header } from '../Header/Header';
import cn from 'classnames';
import styles from './SearchPage.module.scss';

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
      <div className={styles.container}>
        <Header />
        <main className={cn(styles.container, styles.content_container)}>
          <ErrorBoundary fallback={<p className={styles.warning_message}>Something went wrong</p>}>
            <SearchBar saveToState={this.handleChangeState} />

            <SearchList list={this.state.characters} />
            <ErrorButton />
          </ErrorBoundary>
        </main>
      </div>
    );
  }
}
