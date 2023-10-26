import { Component } from 'react';
import { SearchBar } from './components/SearchBar/SearchBar';
import { SearchList } from './components/SearchList/SearchList';
import searchApiAxios from './api/SearchApi';
import { SearchResponseInterface, CharacterInterface } from './interfaces/SearchResponse';
import getAllCharacterIds from './utils/queryParams';
import { ErrorBoundary } from './components/ErrorBoundary/ErrorBoundary';

interface SearchParams {
  name?: string;
  page?: number;
}
class App extends Component {
  async componentDidMount(): Promise<void> {
    this.getCharacters();
  }

  async getCharacters(params: SearchParams | null = null) {
    if (!params) {
      const response = await searchApiAxios.get<SearchResponseInterface>('');
      const charactersCount = response.data.info.count;

      const stringOfIds = getAllCharacterIds(charactersCount);

      const allChars = await searchApiAxios.get<CharacterInterface>(`${stringOfIds}`);
      console.log('all chars:', allChars.data);
    } else {
      const response = await searchApiAxios.get<SearchResponseInterface>(``, {
        params,
      });
      console.log('filtered chars', response.data);
    }
  }

  render() {
    return (
      <div>
        <h2>Rick and Morty Search App</h2>
        <SearchBar />
        <ErrorBoundary>
          <SearchList />
        </ErrorBoundary>
      </div>
    );
  }
}

export default App;
