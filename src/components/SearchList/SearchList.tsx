import { CharacterInterface } from '../../interfaces/SearchResponse';
import { SearchItem } from '../SearchItem/SearchItem';
import cn from 'classnames';
import styles from './SearchList.module.scss';

type SearchListProps = {
  list: Array<CharacterInterface>;
};

export const SearchList = (props: SearchListProps) => {
  const { list } = props;
  const renderedList = list.map((item: CharacterInterface) => {
    return <SearchItem key={item.id} item={item} />;
  });
  return <ul className={cn('wrapper', styles.list_container)}>{renderedList}</ul>;
};
