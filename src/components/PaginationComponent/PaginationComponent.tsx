import { FC } from 'react';
import styles from './PaginationComponent.module.scss';
import { PaginationInterface } from '../../interfaces/SearchResponse';

type PaginationProps = {
  pagination: PaginationInterface | null;
};

const PaginationComponent: FC<PaginationProps> = ({ pagination }) => {
  const renderList = (): Array<number> | null => {
    if (pagination) {
      const list = [...Array(pagination.last_visible_page + 1).keys()].slice(1);
      return list;
    }
    return null;
  };

  return (
    pagination && (
      <div className={styles.pagination_container}>
        <button className={styles.pagination_btn}>&#8592;</button>
        {renderList()!.map((item) => {
          return (
            <button
              className={styles.pagination_btn}
              key={item}
              onClick={() => console.log('navigate to ', item)}
            >
              {item}
            </button>
          );
        })}
        <button className={styles.pagination_btn}>&#8594;</button>
      </div>
    )
  );
};

export default PaginationComponent;
