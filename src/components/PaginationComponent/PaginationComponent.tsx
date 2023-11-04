import { ChangeEvent, FC, useState } from 'react';
import styles from './PaginationComponent.module.scss';
import { PaginationInterface } from '../../interfaces/SearchResponse';
import cn from 'classnames';
import { useSearchParams } from 'react-router-dom';

type PaginationProps = {
  pagination: PaginationInterface | null;
  getDataFromApi: (params: { value?: string; page?: number; limit?: number }) => void;
};

const PaginationComponent: FC<PaginationProps> = ({ pagination, getDataFromApi }) => {
  const [currentPage, setCurrentPage] = useState<number>(pagination?.current_page || 1);
  const [limit, setLimit] = useState<number>(pagination!.items.per_page);
  const [searchParams] = useSearchParams();

  const renderList = (): Array<number> | null => {
    if (pagination) {
      const list = [...Array(pagination.last_visible_page + 1).keys()].slice(1);
      return list;
    }
    return null;
  };

  const handleChangePage = (page: number) => {
    const searchParam = searchParams.get('search') || '';
    // const limitParam = searchParams.get('limit');
    setCurrentPage(page);
    getDataFromApi({ value: searchParam, page, limit });
  };

  const handleChangeLimit = (event: ChangeEvent<HTMLSelectElement>) => {
    setLimit(Number(event.target.value));
  };

  return (
    <div className={styles.pagination_container}>
      <div className={styles.limit_container}>
        <p>Item per page: </p>
        <select value={limit} onChange={handleChangeLimit}>
          <option value={5}>5</option>
          <option value={10}>10</option>
          <option value={15}>15</option>
          <option value={20}>20</option>
          <option value={25}>25</option>
        </select>
      </div>

      {pagination!.last_visible_page > 5 ? (
        <div className={styles.page_container}>
          <button className={styles.pagination_btn}>&#8592;</button>
          more than 5<button className={styles.pagination_btn}>&#8594;</button>
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
