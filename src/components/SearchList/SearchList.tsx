import { CharacterInterface } from '../../interfaces/SearchResponseInterfaces';
import { SearchItem } from '../SearchItem/SearchItem';
import cn from 'classnames';
import styles from './SearchList.module.scss';
import { FC } from 'react';
import { createSearchParams, useNavigate, useSearchParams } from 'react-router-dom';
import { customCreateSearchParams } from '../../utils/queryParams';

type SearchListProps = {
  list: Array<CharacterInterface>;
};

export const SearchList: FC<SearchListProps> = ({ list }) => {
  const [searchParams] = useSearchParams();
  const searchParam = searchParams.get('q');
  const pageParam = searchParams.get('page');
  const limitParam = searchParams.get('limit');

  const navigate = useNavigate();

  const handleNavigate = (id: number) => {
    const checkedParams = customCreateSearchParams({
      q: searchParam || '',
      page: Number(pageParam),
      limit: Number(limitParam),
    });

    navigate({
      pathname: '/',
      search: createSearchParams({ ...checkedParams, details: `${id}` }).toString(),
    });
  };

  const renderedList = list.map((item: CharacterInterface) => {
    return (
      <a key={item.mal_id} onClick={() => handleNavigate(item.mal_id)}>
        <SearchItem item={item} />
      </a>
    );
  });
  return <ul className={cn('wrapper', styles.list_container)}>{renderedList}</ul>;
};
