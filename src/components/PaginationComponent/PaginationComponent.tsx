/* eslint-disable react-hooks/exhaustive-deps */
import { ChangeEvent, FC, useEffect, useRef, useState } from 'react';
import styles from './PaginationComponent.module.scss';
import cn from 'classnames';
import { useSearchParams } from 'react-router-dom';
import { customCreateSearchParams } from '../../utils/queryParams';
import { useAppDispatch, useAppSelector } from '../../hooks/redux';
import { PaginationSlice } from '../../store/reducers/PaginationSlice';

const PaginationComponent: FC = () => {
  const { pagination } = useAppSelector((state) => state.charactersInfoReducer);
  const { changePage, changeLimit } = PaginationSlice.actions;
  const dispatch = useAppDispatch();

  const [searchParams] = useSearchParams();
  const searchParam = searchParams.get('q') || '';
  const pageParam = searchParams.get('page') || '';
  const limitParam = searchParams.get('limit') || '';

  const [page, setPage] = useState<number>(Number(pageParam) || 1);
  const [limit, setLimit] = useState<number>(
    Number(limitParam) || (pagination && pagination?.items.per_page) || 25
  );

  const incrementButtonRef = useRef<HTMLButtonElement>(null);
  const decrementButtonRef = useRef<HTMLButtonElement>(null);

  const editedQueryParams = customCreateSearchParams({
    q: searchParam,
    page: page.toString(),
    limit: limit.toString(),
  });

  console.log(editedQueryParams);
  // const { data, isLoading, isSuccess } = useGetAllCharactersQuery();

  useEffect(() => {
    if (page === 1) {
      decrementButtonRef.current?.setAttribute('disabled', 'true');
    }
    if (pagination && page === pagination.last_visible_page) {
      incrementButtonRef.current?.setAttribute('disabled', 'true');
    }
  }, []);

  const renderList = (): Array<number> | null => {
    if (pagination) {
      const list = [...Array(pagination.last_visible_page + 1).keys()].slice(1);
      return list;
    }
    return null;
  };

  const handleChangePage = (page: number) => {
    setPage(page);
    // getDataFromApi({ q: searchParam, page, limit });
    dispatch(changePage(page));
  };

  const handleChangeLimit = (event: ChangeEvent<HTMLSelectElement>) => {
    setLimit(Number(event.target.value));
    setPage(1);
    // getDataFromApi({ q: searchParam, page: 1, limit: Number(event.target.value) });
    dispatch(changeLimit(Number(event.target.value)));
    dispatch(changePage(1));
  };

  const handleDecrementPage = () => {
    if (page === 1) {
      decrementButtonRef.current?.setAttribute('disabled', 'true');
    } else {
      handleChangePage(Number(page) - 1);
    }
  };

  const handleIncrementPage = () => {
    if (pagination && page === pagination.last_visible_page) {
      incrementButtonRef.current?.setAttribute('disabled', 'true');
    } else {
      handleChangePage(Number(page) + 1);
    }
  };

  return (
    pagination && (
      <div data-testid="pagination" className={styles.pagination_container}>
        <div className={styles.limit_container}>
          <p>Item per page: </p>
          <select value={limit} onChange={handleChangeLimit} className={styles.options_container}>
            <option value={10}>10</option>
            <option value={15}>15</option>
            <option value={20}>20</option>
            <option value={25}>25</option>
          </select>
        </div>

        {pagination.last_visible_page && pagination.last_visible_page > 3 ? (
          <div data-testid="pages" className={styles.page_container}>
            <button
              className={styles.pagination_btn}
              ref={decrementButtonRef}
              onClick={handleDecrementPage}
            >
              &#8592;
            </button>
            <button
              data-testid="page-button"
              className={styles.pagination_btn}
              onClick={handleDecrementPage}
            >
              {pagination && pagination.current_page > 1 && pagination.current_page - 1}
            </button>
            <button data-testid="page-button" className={cn(styles.pagination_btn, styles.active)}>
              {pagination.current_page}
            </button>
            <button
              data-testid="page-button"
              className={styles.pagination_btn}
              onClick={handleIncrementPage}
            >
              {pagination && pagination.has_next_page && pagination.current_page + 1}
            </button>

            <button
              className={styles.pagination_btn}
              ref={incrementButtonRef}
              onClick={handleIncrementPage}
            >
              &#8594;
            </button>
          </div>
        ) : (
          <div data-testid="pages" className={styles.page_container}>
            {renderList()!.map((item) => {
              return (
                <button
                  data-testid="page-button"
                  className={cn(styles.pagination_btn, item === page && styles.active)}
                  key={item}
                  onClick={() => handleChangePage(item)}
                >
                  {item}
                </button>
              );
            })}
          </div>
        )}
      </div>
    )
  );
};

export default PaginationComponent;
