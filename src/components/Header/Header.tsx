import { FC } from 'react';
import cn from 'classnames';
import styles from './Header.module.scss';

export const Header: FC = () => {
  return (
    <header className={cn('wrapper', styles.header_wrapper)}>
      <h1 className={styles.header_title}>React Forms</h1>
    </header>
  );
};
