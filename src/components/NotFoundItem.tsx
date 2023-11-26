import { FC } from 'react';
import styles from '../styles/NotFoundItem.module.scss';

export const NotFoundItem: FC = () => {
  return (
    <div className={styles.container}>
      <p className={styles.description}>Item not found...</p>
      <p className={styles.description}>Please enter another character</p>
    </div>
  );
};
