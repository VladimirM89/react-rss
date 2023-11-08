import { CharacterInterface } from '../../interfaces/SearchResponseInterfaces';
import { SearchItem } from '../SearchItem/SearchItem';
import cn from 'classnames';
import styles from './SearchList.module.scss';
import { FC } from 'react';

type SearchListProps = {
  list: Array<CharacterInterface>;
};

export const SearchList: FC<SearchListProps> = ({ list }) => {
  const renderedList = list.map((item: CharacterInterface) => {
    return <SearchItem item={item} key={item.mal_id} />;
  });
  return <ul className={cn('wrapper', styles.list_container)}>{renderedList}</ul>;
};
