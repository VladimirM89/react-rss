/* eslint-disable react-hooks/exhaustive-deps */
import { type ChangeEvent, type FC, useEffect, useRef } from 'react';
import styles from '../styles/PaginationComponent.module.scss';
import cn from 'classnames';
import { type PaginationInterface } from '../interfaces/SearchResponseInterfaces';
import { useRouter } from 'next/router';
import { PaginationSlice } from '../features/characters/PaginationSlice';
import { useAppDispatch } from '../hooks/redux';

interface PaginationPropsType {
  pagination: PaginationInterface | null;
}

const PaginationComponent: FC<PaginationPropsType> = ({ pagination }) => {
  const { changePage, changeLimit } = PaginationSlice.actions;
  const dispatch = useAppDispatch();

  const incrementButtonRef = useRef<HTMLButtonElement>(null);
  const decrementButtonRef = useRef<HTMLButtonElement>(null);

  const router = useRouter();
  const { pathname, query } = router;

  useEffect(() => {
    dispatch(changeLimit(pagination?.items.per_page || 25));
  }, [pagination]);

  useEffect(() => {
    if (pagination?.current_page === 1) {
      decrementButtonRef.current?.setAttribute('disabled', 'true');
    } else {
      decrementButtonRef.current?.removeAttribute('disabled');
    }
    if (pagination && pagination.current_page === pagination.last_visible_page) {
      incrementButtonRef.current?.setAttribute('disabled', 'true');
    } else {
      incrementButtonRef.current?.removeAttribute('disabled');
    }
  }, [pagination?.last_visible_page, pagination?.current_page]);

  const renderList = (): number[] | null => {
    if (pagination) {
      const list = [...Array(pagination.last_visible_page + 1).keys()].slice(1);
      return list;
    }
    return null;
  };

  const handleChangePage = (page: number) => {
    dispatch(changePage(page));

    router.push({
      pathname,
      query: { ...query, page },
    });
  };

  const handleChangeLimit = (event: ChangeEvent<HTMLSelectElement>) => {
    dispatch(changeLimit(Number(event.target.value)));

    router.push({
      pathname,
      query: { ...query, page: 1, limit: event.target.value },
    });
  };

  const handleDecrementPage = () => {
    if (pagination) {
      handleChangePage(pagination?.current_page - 1);
    }
  };

  const handleIncrementPage = () => {
    if (pagination) {
      handleChangePage(pagination?.current_page + 1);
    }
  };

  return (
    pagination && (
      <div data-testid="pagination" className={styles.pagination_container}>
        <div className={styles.limit_container}>
          <p>Item per page: </p>
          <select
            value={pagination.items.per_page}
            onChange={handleChangeLimit}
            className={styles.options_container}
          >
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
                  className={cn(
                    styles.pagination_btn,
                    item === pagination.current_page && styles.active
                  )}
                  key={item}
                  onClick={() => {
                    handleChangePage(item);
                  }}
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
