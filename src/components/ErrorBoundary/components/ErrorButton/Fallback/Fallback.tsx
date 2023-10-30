import { Component } from 'react';
import styles from './Fallback.module.scss';
import { SEARCH_VALUE } from '../../../../../constants/stringConstants';
import { removeItemFromLocalStorage } from '../../../../../utils/localStorage';

export class Fallback extends Component {
  private handleReloadPage = (): void => {
    removeItemFromLocalStorage(SEARCH_VALUE);
    window.location.reload();
  };

  render() {
    return (
      <div className={styles.container}>
        <p className={styles.warning_message}>You enter incorrect name or press error button</p>
        <button className="btn" onClick={this.handleReloadPage}>
          Reload page
        </button>
      </div>
    );
  }
}
