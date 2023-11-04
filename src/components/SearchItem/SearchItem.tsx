import { FC } from 'react';
import { CharacterInterface } from '../../interfaces/SearchResponse';
import styles from './SearchItem.module.scss';

type SearchItemProps = {
  item: CharacterInterface;
};

export const SearchItem: FC<SearchItemProps> = ({ item }) => {
  // const { title_english, images.jpg.small_image_url } = item;
  return (
    <li className={styles.card_container}>
      <img
        className={styles.character_image}
        src={item.images.jpg.image_url}
        alt={item.title || item.title_english}
      />
      <p className={styles.character_name}>{item.title || item.title_english}</p>
      <p className={styles.character_name}>Rating: {item.score}</p>
    </li>
  );
};
