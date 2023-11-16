import { FC } from 'react';
import { SearchBar } from '../../components/SearchBar/SearchBar';
import { SearchList } from '../../components/SearchList/SearchList';
import { ErrorButton } from '../../components/ErrorBoundary/components/ErrorButton/ErrorButton';
import { ErrorBoundary } from '../../components/ErrorBoundary/ErrorBoundary';
import cn from 'classnames';
import styles from './SearchPage.module.scss';
import { Fallback } from '../../components/ErrorBoundary/components/ErrorButton/Fallback/Fallback';
import PaginationComponent from '../../components/PaginationComponent/PaginationComponent';

export const SearchPage: FC = () => {
  // const [searchParams, setSearchParams] = useSearchParams();
  // const searchParam = searchParams.get('q');

  // const [inputValue, setInputValue] = useState<string>(
  //   searchParam || getItemFromLocalStorage(SEARCH_VALUE) || ''
  // );

  // const [charactersInfo, setCharactersInfo] = useState<SearchPageState>({
  //   characters: [],
  //   pagination: null,
  // });
  // const [isLoading, setIsLoading] = useState<boolean>(true);

  // useEffect(() => {
  //   const searchParam = searchParams.get('q');
  //   const pageParam = Number(searchParams.get('page'));
  //   const limitParam = Number(searchParams.get('limit'));
  //   if (searchParam?.length) {
  //     saveToLocalStorage(SEARCH_VALUE, '');
  //   }
  //   const initialParams = customCreateSearchParams({
  //     q: inputValue,
  //     page: pageParam,
  //     limit: limitParam,
  //   });
  //   getDataFromApi({
  //     q: initialParams.q,
  //     page: Number(initialParams.page),
  //     limit: Number(initialParams.limit),
  //   });
  //   setSearchParams(initialParams);
  // }, []);

  // const getDataFromApi = async (params: SearchParams): Promise<void> => {
  //   try {
  //     handleLoading(true);
  //     const { q, page, limit } = params;

  //     const response = await getCharacters({
  //       q: q,
  //       page: page,
  //       limit: limit,
  //     });
  //     const paramsToSet = customCreateSearchParams(params);
  //     setSearchParams(paramsToSet);
  //     handleChangeState(response);
  //     if (response.data.length) {
  //       throw Error('No such item found');
  //     }
  //   } catch (error: unknown) {
  //     handleLoading(false);
  //   }
  // };

  // const handleChangeState = (response: SearchResponseInterface): void => {
  //   setCharactersInfo({
  //     characters: response.data,
  //     pagination: response.pagination,
  //   });
  //   setIsLoading(false);
  // };

  // const handleLoading = (value: boolean) => {
  //   setIsLoading(value);
  // };

  return (
    <div className={styles.container}>
      {/* <SearchProvider
        value={{
          charactersInfo,
          setCharactersInfo,
          inputValue,
          setInputValue,
          getDataFromApi,
        }}
      > */}
      <ErrorBoundary fallback={<Fallback />}>
        <div className={cn('wrapper', styles.main_wrapper)}>
          <SearchBar />
          <SearchList />
          {/* <Outlet /> */}
          <PaginationComponent />
          <ErrorButton />
          {/* {isLoading ? (
              <LoaderComponent />
            ) : (
              <>
                <div style={{ display: 'flex' }}>
                  <SearchList />
                  <Outlet />
                </div>
                {!!charactersInfo.characters.length && (
                  <>
                    <PaginationComponent />
                    <ErrorButton />
                  </>
                )}
              </>
            )} */}
        </div>
      </ErrorBoundary>
      {/* </SearchProvider> */}
    </div>
  );
};
