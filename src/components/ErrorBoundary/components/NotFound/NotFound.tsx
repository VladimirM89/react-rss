import { FC } from 'react';
import styles from './NotFound.module.scss';

export const NotFound: FC = () => {
  return (
    <div className={styles.container}>
      <p className={styles.description}>Item not found...</p>
      <p className={styles.description}>Please enter another character</p>
    </div>
  );
};
