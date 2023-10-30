import { Component } from 'react';
import styles from './LoaderComponent.module.scss';

export class LoaderComponent extends Component {
  render() {
    return (
      <div className={styles.loader_container}>
        <div className={styles.loader}></div>
      </div>
    );
  }
}
