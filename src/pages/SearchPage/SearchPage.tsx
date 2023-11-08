/* eslint-disable react-hooks/exhaustive-deps */
import { FC, useEffect, useState } from 'react';
import { SearchBar } from '../../components/SearchBar/SearchBar';
import { SearchList } from '../../components/SearchList/SearchList';
import {
  CharacterInterface,
  PaginationInterface,
  SearchResponseInterface,
} from '../../interfaces/SearchResponseInterfaces';
import { ErrorButton } from '../../components/ErrorBoundary/components/ErrorButton/ErrorButton';
import { ErrorBoundary } from '../../components/ErrorBoundary/ErrorBoundary';
import cn from 'classnames';
import styles from './SearchPage.module.scss';
import { LoaderComponent } from '../../components/LoaderComponent/LoaderComponent';
import { Fallback } from '../../components/ErrorBoundary/components/ErrorButton/Fallback/Fallback';
import { NotFoundItem } from '../../components/ErrorBoundary/components/NotFoundItem/NotFoundItem';
import { Outlet, useSearchParams } from 'react-router-dom';
import PaginationComponent from '../../components/PaginationComponent/PaginationComponent';
import { getCharacters } from '../../api/SearchApi';
import { customCreateSearchParams } from '../../utils/queryParams';
import { SearchParams } from '../../interfaces/ParamsInterfaces';
type SearchPageState = {
  characters: Array<CharacterInterface>;
  pagination: PaginationInterface | null;
};

export const SearchPage: FC = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const [charactersInfo, setCharactersInfo] = useState<SearchPageState>({
    characters: [],
    pagination: null,
  });
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [isNoItems, setisNoItems] = useState<boolean>(false);

  useEffect(() => {
    const searchParam = searchParams.get('q') || '';
    const pageParam = Number(searchParams.get('page'));
    const limitParam = Number(searchParams.get('limit'));
    const initialParams = customCreateSearchParams({
      q: searchParam,
      page: pageParam,
      limit: limitParam,
    });
    getDataFromApi({
      q: initialParams.q,
      page: Number(initialParams.page),
      limit: Number(initialParams.limit),
    });
    setSearchParams(initialParams);
  }, []);

  const getDataFromApi = async (params: SearchParams): Promise<void> => {
    try {
      handleLoading(true);
      const { q, page, limit } = params;

      const response = await getCharacters({
        q: q,
        page: page,
        limit: limit,
      });
      const paramsToSet = customCreateSearchParams(params);
      setSearchParams(paramsToSet);
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
                <NotFoundItem />
              ) : (
                <>
                  <div style={{ display: 'flex' }}>
                    <SearchList list={charactersInfo.characters} />
                    <Outlet />
                  </div>
                  <PaginationComponent
                    pagination={charactersInfo.pagination}
                    getDataFromApi={getDataFromApi}
                  />

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
