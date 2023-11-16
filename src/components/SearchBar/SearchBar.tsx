/* eslint-disable react-hooks/exhaustive-deps */
import { FC, useEffect, useRef, useState } from 'react';
import { removeItemFromLocalStorage, saveToLocalStorage } from '../../utils/localStorage';
import cn from 'classnames';
import styles from './SearchBar.module.scss';
import { SEARCH_VALUE } from '../../constants/stringConstants';
import { useSearchParams } from 'react-router-dom';
import { useAppSelector } from '../../hooks/redux';
import { useDispatch } from 'react-redux';
import { SearchValueSlice } from '../../store/reducers/SearchValueSlice';

export const SearchBar: FC = () => {
  const { searchValue } = useAppSelector((state) => state.searchValueReducer);
  const dispatch = useDispatch();
  const { update } = SearchValueSlice.actions;
  console.log('search list. searchValue: ', searchValue);

  const [searchParams, setSearchParams] = useSearchParams();
  const searchParam = searchParams.get('q') || '';
  console.log('search list. searchParam: ', searchParam);

  const [inputValue, setInputValue] = useState<string>(searchParam || '');
  const inputRef = useRef<HTMLInputElement>(null);
  console.log('search list. InputValue: ', inputValue);

  useEffect(() => {
    handleSearchParam();
  }, []);

  const handleSearchParam = () => {
    saveToLocalStorage(SEARCH_VALUE, searchParam);
    setInputValue(searchParam);
    dispatch(update(inputValue));
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
    dispatch(update(inputValue));
    // getDataFromApi({ q: inputValue });

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
