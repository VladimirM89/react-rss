import { CharacterInterface } from '../../interfaces/SearchResponse';
import { SearchItem } from '../SearchItem/SearchItem';
import cn from 'classnames';
import styles from './SearchList.module.scss';
import { FC } from 'react';
import { createSearchParams, useNavigate, useSearchParams } from 'react-router-dom';

type SearchListProps = {
  list: Array<CharacterInterface>;
};

export const SearchList: FC<SearchListProps> = ({ list }) => {
  // console.log('search list render');
  const [searchParams] = useSearchParams();
  const searchParam = searchParams.get('search') || '';

  const handleSearchParam = () => {
    if (searchParam.length) {
      return { search: searchParam };
    }
    return null;
  };

  const navigate = useNavigate();

  const handleNavigate = (id: number) => {
    const search = handleSearchParam();

    // console.log('navigate to Details');

    navigate({
      pathname: '/',
      search: `${createSearchParams({
        ...search,
        details: id.toString(),
      })}`,
    });
  };

  const renderedList = list.map((item: CharacterInterface) => {
    return (
      <a key={item.id} onClick={() => handleNavigate(item.id)}>
        <SearchItem item={item} />
      </a>
    );
  });
  return <ul className={cn('wrapper', styles.list_container)}>{renderedList}</ul>;
};
