import { FC, useEffect, useState } from 'react';
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
import { Outlet, useSearchParams } from 'react-router-dom';
import PaginationComponent from '../../components/PaginationComponent/PaginationComponent';
import { getCharacters } from '../../api/SearchApi';
type SearchPageState = {
  characters: Array<CharacterInterface>;
  pagination: PaginationInterface | null;
};

export const SearchPage: FC = () => {
  const [searchParams] = useSearchParams();
  const [charactersInfo, setCharactersInfo] = useState<SearchPageState>({
    characters: [],
    pagination: null,
  });
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [isNoItems, setisNoItems] = useState<boolean>(false);

  useEffect(() => {
    const searchParam = searchParams.get('search') || '';
    getDataFromApi(searchParam);
  }, []);

  const getDataFromApi = async (value?: string): Promise<void> => {
    try {
      handleLoading(true);
      const response = await getCharacters({
        q: value,
      });
      handleChangeState(response);
      if (response.data.length === 0) {
        throw Error('No such item found');
      }
    } catch (error: unknown) {
      handleLoading(false);
      handleResponse(true);
    }
  };

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
          <SearchBar getDataFromApi={getDataFromApi} />
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
                  <PaginationComponent pagination={charactersInfo.pagination} />

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
