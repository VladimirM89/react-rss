import cn from 'classnames';
import styles from '../styles/Fallback.module.scss';
import { SEARCH_VALUE } from '../constants/stringConstants';
import { removeItemFromLocalStorage } from '../utils/localStorage';
import { FC } from 'react';

export const Fallback: FC = () => {
  const handleReloadPage = (): void => {
    removeItemFromLocalStorage(SEARCH_VALUE);
    window.location.reload();
  };

  return (
    <div className={cn(styles.fallback_container)}>
      <p className={styles.warning_message}>You have pressed error button</p>
      <button className="btn" onClick={handleReloadPage}>
        Reload page
      </button>
    </div>
  );
};
