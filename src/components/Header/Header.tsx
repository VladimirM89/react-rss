import { Component } from 'react';
import cn from 'classnames';
import styles from './Header.module.scss';

export class Header extends Component {
  render() {
    return (
      <header className={cn('wrapper', styles.header_wrapper)}>
        <h2 className={styles.header_title}>Rick and Morty Search App</h2>
      </header>
    );
  }
}
