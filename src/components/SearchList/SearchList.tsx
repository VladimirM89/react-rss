import { Component } from 'react';
import { CharacterInterface } from '../../interfaces/SearchResponse';
import { SearchItem } from '../SearchItem/SearchItem';
import cn from 'classnames';
import styles from './SearchList.module.scss';

type Props = {
  list: Array<CharacterInterface>;
};

export class SearchList extends Component<Props, object> {
  render() {
    const renderedList = this.props.list.map((item) => {
      return <SearchItem key={item.id} item={item} />;
    });
    return <ul className={cn('wrapper', styles.list_container)}>{renderedList}</ul>;
  }
}
