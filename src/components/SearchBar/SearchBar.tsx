/* eslint-disable react-hooks/exhaustive-deps */
import { FC, useEffect, useRef, useState } from 'react';
import { removeItemFromLocalStorage, saveToLocalStorage } from '../../utils/localStorage';
import cn from 'classnames';
import styles from './SearchBar.module.scss';
import { SEARCH_VALUE } from '../../constants/stringConstants';
import { useSearchParams } from 'react-router-dom';
import { useSeacrhContext } from '../../context/SearchContext';

export const SearchBar: FC = () => {
  const { getDataFromApi } = useSeacrhContext();
  const [searchParams, setSearchParams] = useSearchParams();
  const searchParam = searchParams.get('q') || '';

  const [inputValue, setInputValue] = useState<string>(searchParam || '');
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    handleSearchParam();
  }, []);

  const handleSearchParam = () => {
    saveToLocalStorage(SEARCH_VALUE, searchParam);
    setInputValue(searchParam);
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
    setSearchParams({ q: inputValue });
    handleStorage();
    getDataFromApi({ q: inputValue });

    inputRef.current?.blur();
    event.preventDefault();
  };

  return (
    <form className={styles.form_container} onSubmit={handleSearch}>
      <input
        data-testid="search-input"
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
