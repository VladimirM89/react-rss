/* eslint-disable react-hooks/exhaustive-deps */
import { type FC, useEffect, useRef, useState, ChangeEvent, FormEvent } from 'react';
import { removeItemFromLocalStorage, saveToLocalStorage } from '../utils/localStorage';
import cn from 'classnames';
import styles from '../styles/SearchBar.module.scss';
import { SEARCH_VALUE } from '../constants/stringConstants';
import { useRouter } from 'next/router';
import { SearchValueSlice } from '../features/characters/SearchValueSlice';
import { useAppDispatch } from '../hooks/redux';

export const SearchBar: FC = () => {
  const dispatch = useAppDispatch();
  const { update } = SearchValueSlice.actions;

  const [inputValue, setInputValue] = useState<string>('');

  const router = useRouter();
  const { pathname } = router;

  const inputRef = useRef<HTMLInputElement>(null);

  const handleInitialLoading = () => {
    saveToLocalStorage(SEARCH_VALUE, inputValue);
    if (router.query?.q) {
      const q = router.query?.q;
      setInputValue(q as string);
    }
    dispatch(update(inputValue));
  };

  useEffect(() => {
    handleInitialLoading();
  }, []);

  const handleStorage = (): void => {
    if (inputValue) {
      saveToLocalStorage(SEARCH_VALUE, inputValue);
    } else {
      removeItemFromLocalStorage(SEARCH_VALUE);
    }
  };

  const handleInput = (event: ChangeEvent<HTMLInputElement>): void => {
    setInputValue(event.target.value);
  };

  const handleSearch = (event: FormEvent<HTMLFormElement | HTMLButtonElement>): void => {
    router.push({
      pathname,
      query: { q: inputValue },
    });

    handleStorage();

    dispatch(update(inputValue));

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
