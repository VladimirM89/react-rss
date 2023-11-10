import { ChangeEvent, FC, useEffect, useRef, useState } from 'react';
import styles from './PaginationComponent.module.scss';
import cn from 'classnames';
import { useSearchParams } from 'react-router-dom';
import { useSeacrhContext } from '../../context/SearchContext';

const PaginationComponent: FC = () => {
  const { charactersInfo, getDataFromApi } = useSeacrhContext();
  const pagination = charactersInfo.pagination;
  const [currentPage, setCurrentPage] = useState<number>(pagination?.current_page || 1);
  const [limit, setLimit] = useState<number>(pagination!.items.per_page);
  const [searchParams] = useSearchParams();

  const incrementButtonRef = useRef<HTMLButtonElement>(null);
  const decrementButtonRef = useRef<HTMLButtonElement>(null);

  const searchParam = searchParams.get('q') || '';

  useEffect(() => {
    if (currentPage === 1) {
      decrementButtonRef.current?.setAttribute('disabled', 'true');
    }
    if (currentPage === pagination!.last_visible_page) {
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
    setCurrentPage(page);
    getDataFromApi({ q: searchParam, page, limit });
  };

  const handleChangeLimit = (event: ChangeEvent<HTMLSelectElement>) => {
    setLimit(Number(event.target.value));
    getDataFromApi({ q: searchParam, page: 1, limit: Number(event.target.value) });
  };

  const handleDecrementPage = () => {
    if (currentPage === 1) {
      decrementButtonRef.current?.setAttribute('disabled', 'true');
    } else {
      handleChangePage(currentPage - 1);
    }
  };

  const handleIncrementPage = () => {
    if (currentPage === pagination!.last_visible_page) {
      incrementButtonRef.current?.setAttribute('disabled', 'true');
    } else {
      handleChangePage(currentPage + 1);
    }
  };

  return (
    <div className={styles.pagination_container}>
      <div className={styles.limit_container}>
        <p>Item per page: </p>
        <select value={limit} onChange={handleChangeLimit} className={styles.options_container}>
          <option value={10}>10</option>
          <option value={15}>15</option>
          <option value={20}>20</option>
          <option value={25}>25</option>
        </select>
      </div>

      {pagination!.last_visible_page > 3 ? (
        <div className={styles.page_container}>
          <button
            className={styles.pagination_btn}
            ref={decrementButtonRef}
            onClick={handleDecrementPage}
          >
            &#8592;
          </button>
          <button className={styles.pagination_btn} onClick={handleDecrementPage}>
            {pagination && pagination.current_page > 1 && pagination.current_page - 1}
          </button>
          <button className={cn(styles.pagination_btn, styles.active)}>
            {pagination?.current_page}
          </button>
          <button className={styles.pagination_btn} onClick={handleIncrementPage}>
            {pagination && pagination.has_next_page && pagination!.current_page + 1}
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
        <div className={styles.page_container}>
          {renderList()!.map((item) => {
            return (
              <button
                className={cn(styles.pagination_btn, item === currentPage && styles.active)}
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
  );
};

export default PaginationComponent;
