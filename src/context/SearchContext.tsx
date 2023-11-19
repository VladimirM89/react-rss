import { createContext, useContext } from 'react';
import { CharacterInterface, PaginationInterface } from '../interfaces/SearchResponseInterfaces';
import { SearchParams } from '../interfaces/ParamsInterfaces';

export type SearchContextType = {
  charactersInfo: SearchState;
  setCharactersInfo: (newCharInfo: SearchState) => void;
  inputValue: string;
  setInputValue: (newInputValue: string) => void;
  getDataFromApi: (params: SearchParams) => Promise<void>;
};

type SearchState = {
  characters: Array<CharacterInterface>;
  pagination: PaginationInterface | null;
};

const SearchContext = createContext<SearchContextType | null>(null);

export const SearchProvider = SearchContext.Provider;

export const useSeacrhContext = () => {
  const data = useContext(SearchContext);

  if (!data) {
    throw new Error('Can not use Search Context outside Search Provider');
  }
  return data;
};

export default SearchProvider;
