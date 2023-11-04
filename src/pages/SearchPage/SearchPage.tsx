import { FC, useState } from 'react';
import { SearchBar } from '../../components/SearchBar/SearchBar';
import { SearchList } from '../../components/SearchList/SearchList';
import {
  CharacterInterface,
  PaginationInterface,
  SearchResponseInterface,
} from '../../interfaces/SearchResponse';
import { ErrorButton } from '../../components/ErrorBoundary/components/ErrorButton/ErrorButton';
import { ErrorBoundary } from '../../components/ErrorBoundary/ErrorBoundary';
import cn from 'classnames';
import styles from './SearchPage.module.scss';
import { LoaderComponent } from '../../components/LoaderComponent/LoaderComponent';
import { Fallback } from '../../components/ErrorBoundary/components/ErrorButton/Fallback/Fallback';
import { NotFound } from '../../components/ErrorBoundary/components/NotFound/NotFound';
import { Outlet } from 'react-router-dom';

type SearchPageState = {
  characters: Array<CharacterInterface>;
  pagination: PaginationInterface | null;
};

export const SearchPage: FC = () => {
  // console.log('search page render');
  const [charactersInfo, setCharactersInfo] = useState<SearchPageState>({
    characters: [],
    pagination: null,
  });
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [isNoItems, setisNoItems] = useState<boolean>(false);

  const handleChangeState = (response: SearchResponseInterface): void => {
    setCharactersInfo({
      characters: response.data,
      pagination: response.pagination,
    });
    setIsLoading(false);
    setisNoItems(false);
  };

  const handleLoading = (value: boolean) => {
    setIsLoading(value);
  };

  const handleResponse = (value: boolean) => {
    setisNoItems(value);
  };

  return (
    <div className={styles.container}>
      <ErrorBoundary fallback={<Fallback />}>
        <div className={cn('wrapper', styles.main_wrapper)}>
          <SearchBar
            handleLoading={handleLoading}
            saveToState={handleChangeState}
            handleResponse={handleResponse}
          />
          {isLoading ? (
            <LoaderComponent />
          ) : (
            <>
              {isNoItems ? (
                <NotFound />
              ) : (
                <>
                  <div style={{ display: 'flex' }}>
                    <SearchList list={charactersInfo.characters} />
                    <Outlet />
                  </div>

                  <ErrorButton />
                </>
              )}
            </>
          )}
        </div>
      </ErrorBoundary>
    </div>
  );
};
