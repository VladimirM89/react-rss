import { Component } from 'react';
import { SearchItem } from '../SearchItem/SearchItem';

export class SearchList extends Component {
  render() {
    return (
      <div>
        <SearchItem />
        <SearchItem />
      </div>
    );
  }
}
