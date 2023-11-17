import { CharacterInterface } from '../../interfaces/SearchResponseInterfaces';
import { SearchItem } from '../SearchItem/SearchItem';
import cn from 'classnames';
import styles from './SearchList.module.scss';
import { FC, useEffect } from 'react';
import { NotFoundItem } from '../ErrorBoundary/components/NotFoundItem/NotFoundItem';
import { useGetAllCharactersQuery } from '../../api/SearchApi';
import { LoaderComponent } from '../LoaderComponent/LoaderComponent';
import { useAppDispatch, useAppSelector } from '../../hooks/redux';
import { charactersInfoSlice } from '../../store/reducers/CharactersInfoSlice';
import { customCreateSearchParams } from '../../utils/queryParams';
import { useSearchParams } from 'react-router-dom';
import PaginationComponent from '../PaginationComponent/PaginationComponent';

export const SearchList: FC = () => {
  const { searchValue } = useAppSelector((state) => state.searchValueReducer);
  const { page, limit } = useAppSelector((state) => state.paginationSliceReducer);
  const { update, updateSuccess } = charactersInfoSlice.actions;
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

  const { data, isLoading, isFetching } = useGetAllCharactersQuery(editedQueryParams);

  useEffect(() => {
    if (data && data.data && !isFetching) {
      dispatch(updateSuccess(data));
    }
    if (isFetching) {
      dispatch(update(isFetching));
    }
  }, [isFetching, data, dispatch, update, updateSuccess]);

  const renderedList = data?.data.map((item: CharacterInterface) => {
    return <SearchItem item={item} key={item.mal_id} />;
  });
  return isLoading ? (
    <LoaderComponent />
  ) : !!data?.data.length ? (
    <>
      <ul className={cn('wrapper', styles.list_container)}>{renderedList}</ul>
      <PaginationComponent />
    </>
  ) : (
    <NotFoundItem />
  );
};
