import { CharacterInterface } from '../../interfaces/SearchResponseInterfaces';
import { SearchItem } from '../SearchItem/SearchItem';
import cn from 'classnames';
import styles from './SearchList.module.scss';
import { FC } from 'react';
import { useSeacrhContext } from '../../context/SearchContext';
import { NotFoundItem } from '../ErrorBoundary/components/NotFoundItem/NotFoundItem';

export const SearchList: FC = () => {
  const { charactersInfo } = useSeacrhContext();
  const renderedList = charactersInfo.characters.map((item: CharacterInterface) => {
    return <SearchItem item={item} key={item.mal_id} />;
  });
  return !!charactersInfo.characters.length ? (
    <ul className={cn('wrapper', styles.list_container)}>{renderedList}</ul>
  ) : (
    <NotFoundItem />
  );
};
