import { FC } from 'react';
import { CharacterInterface } from '../../interfaces/SearchResponse';
import styles from './SearchItem.module.scss';

type SearchItemProps = {
  item: CharacterInterface;
};

export const SearchItem: FC<SearchItemProps> = ({ item }) => {
  const { name, image, gender, species } = item;
  return (
    <li className={styles.card_container}>
      <img className={styles.character_image} src={image} alt={name} />
      <p className={styles.character_name}>Name: {name}</p>
      <p>Gender: {gender}</p>
      <p className={styles.character_gender}>Species: {species}</p>
    </li>
  );
};
