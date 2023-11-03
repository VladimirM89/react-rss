import { FC, useEffect, useRef, useState } from 'react';
import { getCharacters } from '../../api/SearchApi';
import { SearchResponseInterface, CharacterInterface } from '../../interfaces/SearchResponse';
import { removeItemFromLocalStorage, saveToLocalStorage } from '../../utils/localStorage';
import cn from 'classnames';
import styles from './SearchBar.module.scss';
import { SEARCH_VALUE } from '../../constants/stringConstants';
import { useSearchParams } from 'react-router-dom';

type SearchBarProps = {
  saveToState: (response: Array<CharacterInterface> | SearchResponseInterface) => void;
  handleLoading: (value: boolean) => void;
  handleResponse: (value: boolean) => void;
};

export const SearchBar: FC<SearchBarProps> = ({ saveToState, handleLoading, handleResponse }) => {
  const [searchParams, setSearchParams] = useSearchParams();
  const searchParam = searchParams.get('search') || '';

  const [inputValue, setInputValue] = useState<string>(searchParam || '');
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    handleSearchParam();
    getDataFromApi();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const handleSearchParam = () => {
    saveToLocalStorage(SEARCH_VALUE, searchParam);
    setInputValue(searchParam);
  };

  const getDataFromApi = async (): Promise<void> => {
    // console.log('input Value: ', inputValue);
    try {
      handleLoading(true);
      const response = await getCharacters({
        name: inputValue,
      });
      saveToState(response);
    } catch (error: unknown) {
      saveToState([]);
      handleLoading(false);
      handleResponse(true);
    }
  };

  const handleStorage = (): void => {
    if (!!inputValue) {
      saveToLocalStorage(SEARCH_VALUE, inputValue);
    } else {
      removeItemFromLocalStorage(SEARCH_VALUE);
    }
  };

  const handleInput = (event: React.ChangeEvent<HTMLInputElement>): void => {
    setInputValue(event.target.value);
  };

  const handleSearch = (event: React.FormEvent<HTMLFormElement | HTMLButtonElement>): void => {
    setSearchParams({ search: inputValue });
    getDataFromApi();

    handleStorage();

    inputRef.current?.blur();
    event.preventDefault();
  };

  return (
    <form className={styles.form_container} onSubmit={handleSearch}>
      <input
        className={styles.search_input}
        type="text"
        ref={inputRef}
        value={inputValue}
        onChange={handleInput}
      />
      <button className={cn('btn', styles.search_btn)} type="submit">
        Search
      </button>
    </form>
  );
};
