import { CharacterInterface } from '../../interfaces/SearchResponseInterfaces';
import { SearchItem } from '../SearchItem/SearchItem';
import cn from 'classnames';
import styles from './SearchList.module.scss';
import { FC, useEffect } from 'react';
// import { useSeacrhContext } from '../../context/SearchContext';
import { NotFoundItem } from '../ErrorBoundary/components/NotFoundItem/NotFoundItem';
import { useGetAllCharactersQuery } from '../../api/SearchApi';
import { LoaderComponent } from '../LoaderComponent/LoaderComponent';
import { useAppDispatch, useAppSelector } from '../../hooks/redux';
import { charactersInfoSlice } from '../../store/reducers/CharactersInfoSlice';
import { customCreateSearchParams } from '../../utils/queryParams';
import { useSearchParams } from 'react-router-dom';

export const SearchList: FC = () => {
  // console.log('search list render');

  // const { data: charactersInfo } = useAppSelector((state) => state.charactersInfoReducer);
  const { searchValue } = useAppSelector((state) => state.searchValueReducer);
  const { page, limit } = useAppSelector((state) => state.paginationSliceReducer);
  const { update } = charactersInfoSlice.actions;
  const dispatch = useAppDispatch();

  const [searchParams] = useSearchParams();
  const searchParam = searchParams.get('q') || '';
  const pageParam = searchParams.get('page') || '';
  const limitParam = searchParams.get('limit') || '';

  const editedQueryParams = customCreateSearchParams({
    q: searchParam || searchValue,
    page: pageParam || page.toString(),
    limit: limitParam || limit.toString(),
  });

  const { data, isLoading, isSuccess } = useGetAllCharactersQuery(editedQueryParams);

  useEffect(() => {
    if (isSuccess) {
      dispatch(update(data));
    }
  }, [isSuccess, dispatch, update, data]);

  const renderedList = data?.data.map((item: CharacterInterface) => {
    return <SearchItem item={item} key={item.mal_id} />;
  });
  return isLoading ? (
    <LoaderComponent />
  ) : !!data?.data ? (
    <ul className={cn('wrapper', styles.list_container)}>{renderedList}</ul>
  ) : (
    <NotFoundItem />
  );
};
