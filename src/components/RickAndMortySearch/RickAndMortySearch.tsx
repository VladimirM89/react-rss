import { Component } from 'react';
import { SearchBar } from '../SearchBar/SearchBar';
import { SearchList } from '../SearchList/SearchList';
import searchApiAxios from '../../api/SearchApi';
import { SearchResponseInterface, CharacterInterface } from '../../interfaces/SearchResponse';
import getAllCharacterIds from '../../utils/queryParams';

interface SearchParams {
  name?: string;
  page?: number;
}

type State = {
  inputValue: '';
};

export class RickAndMortySearch extends Component {
  state: Readonly<State> = {
    inputValue: '',
  };

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
        <SearchBar />
        <SearchList />
      </div>
    );
  }
}
