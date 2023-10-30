import { Component } from 'react';
import { SearchBar } from '../../../components/SearchBar/SearchBar';
import { SearchList } from '../../../components/SearchList/SearchList';
import {
  CharacterInterface,
  SearchInfoInterface,
  SearchResponseInterface,
} from '../../../interfaces/SearchResponse';
import { ErrorButton } from '../../../components/ErrorButton/ErrorButton';
import { ErrorBoundary } from '../../../components/ErrorBoundary/ErrorBoundary';
import { Header } from '../../../components/Header/Header';
import cn from 'classnames';
import styles from './SearchPage.module.scss';
import { LoaderComponent } from '../../../components/LoaderComponent/LoaderComponent';

type State = {
  characters: Array<CharacterInterface>;
  info: SearchInfoInterface | null;
  isLoading: boolean;
};

export class SearchPage extends Component<object, State> {
  state: Readonly<State> = {
    characters: [],
    info: null,
    isLoading: false,
  };

  private handleChangeState = (response: Array<CharacterInterface> | SearchResponseInterface) => {
    setTimeout(() => {
      if (Array.isArray(response)) {
        this.setState({
          characters: response,
          info: null,
          isLoading: false,
        });
      } else {
        this.setState({
          characters: response.results,
          info: response.info,
          isLoading: false,
        });
      }
    }, 1000);
  };

  private handleLoading = (value: boolean) => {
    this.setState({
      ...this.state,
      isLoading: value,
    });
  };

  render() {
    return (
      <div className={styles.container}>
        <Header />
        <main className={cn(styles.container, styles.content_container)}>
          <ErrorBoundary fallback={<p className={styles.warning_message}>Something went wrong</p>}>
            <SearchBar handleLoading={this.handleLoading} saveToState={this.handleChangeState} />
            {this.state.isLoading ? (
              <LoaderComponent />
            ) : (
              <>
                <SearchList list={this.state.characters} />
                <ErrorButton />
              </>
            )}
          </ErrorBoundary>
        </main>
      </div>
    );
  }
}
