import { FC } from 'react';
import styles from '../styles/LoaderComponent.module.scss';

export const LoaderComponent: FC = () => {
  return (
    <div className={styles.loader_container}>
      <div className={styles.loader}></div>
    </div>
  );
};
