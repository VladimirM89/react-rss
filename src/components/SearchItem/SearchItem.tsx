import { Component } from 'react';
import { CharacterInterface } from '../../interfaces/SearchResponse';
import styles from './SearchItem.module.scss';

type Props = {
  item: CharacterInterface;
};

export class SearchItem extends Component<Props, object> {
  render() {
    return (
      <li className={styles.card_container}>
        <img
          className={styles.character_image}
          src={this.props.item.image}
          alt={this.props.item.name}
        />
        <p className={styles.character_name}>Name: {this.props.item.name}</p>
        <p>Gender: {this.props.item.gender}</p>
        <p className={styles.character_gender}>Species: {this.props.item.species}</p>
      </li>
    );
  }
}
