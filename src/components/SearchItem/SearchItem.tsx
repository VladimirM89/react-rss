import { Component } from 'react';
import { CharacterInterface } from '../../interfaces/SearchResponse';

type Props = {
  item: CharacterInterface;
};

export class SearchItem extends Component<Props, object> {
  render() {
    return (
      <li>
        <strong>Name: {this.props.item.name}</strong>
        <p>Gender: {this.props.item.gender}</p>
        <p>Species: {this.props.item.species}</p>
        <img src={this.props.item.image} alt={this.props.item.name} />
      </li>
    );
  }
}
