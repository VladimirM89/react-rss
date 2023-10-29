import { Component } from 'react';
import styles from './Header.module.scss';

export class Header extends Component {
  render() {
    return (
      <div className="wrapper">
        <header>
          <h2 className={styles.header_title}>Rick and Morty Search App</h2>
        </header>
      </div>
    );
  }
}
