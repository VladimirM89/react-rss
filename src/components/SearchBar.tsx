/* eslint-disable react-hooks/exhaustive-deps */
import { type FC, useEffect, useRef, useState, ChangeEvent, FormEvent } from 'react';
import { removeItemFromLocalStorage, saveToLocalStorage } from '../utils/localStorage';
import cn from 'classnames';
import styles from '../styles/SearchBar.module.scss';
import { SEARCH_VALUE } from '../constants/stringConstants';
// import { useSearchParams } from 'react-router-dom';
import { useRouter } from 'next/router';
import { SearchValueSlice } from '../features/characters/SearchValueSlice';
import { useAppDispatch } from '../hooks/redux';
// import { PaginationSlice } from '../features/characters/PaginationSlice';

export const SearchBar: FC = () => {
  const dispatch = useAppDispatch();
  const { update } = SearchValueSlice.actions;
  // const { changeLimit } = PaginationSlice.actions;
  // const response = useAppSelector((state) => state.charactersInfoReducer);

  const router = useRouter();

  // const [searchParams, setSearchParams] = useSearchParams();
  const q = router.query?.q as string;

  const [inputValue, setInputValue] = useState<string>(q || '');
  const inputRef = useRef<HTMLInputElement>(null);

  const handleInitialLoading = () => {
    saveToLocalStorage(SEARCH_VALUE, q);
    setInputValue(q);
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

  // eslint-disable-next-line no-undef
  const handleSearch = (event: FormEvent<HTMLFormElement | HTMLButtonElement>): void => {
    // setSearchParams({ q: inputValue });
    // router.query.q = inputValue;
    const { pathname } = router;
    // router.push(`/?q=${inputValue}`, undefined, {shallow: true})
    router.push({
      pathname,
      query: { q: inputValue },
    });
    // router.replace({
    //         pathname,
    //         query: { ...query, q: inputValue }, // Add or modify query parameters as needed
    //       });
    handleStorage();
    // dispatch(apiSlice.endpoints.getAllCharacters.initiate());

    // dispatch(charactersInfoSlice.actions.updateSuccess(response));
    dispatch(update(inputValue));

    inputRef.current?.blur();
    event.preventDefault();
  };

  // useEffect(() => {
  //   // Force a page refresh and rerun getServerSideProps with new query parameters
  //   const refreshPage = () => {
  //     const { pathname, query } = router;
  //     router.replace({
  //       pathname,
  //       query: { ...query }, // Add or modify query parameters as needed
  //     });
  //   };

  //   // Call the refresh function
  //   refreshPage();
  // }, [router]);

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
