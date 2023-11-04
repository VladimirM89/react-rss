import { FC } from 'react';
import cn from 'classnames';
import styles from './Header.module.scss';

export const Header: FC = () => {
  return (
    <header className={cn('wrapper', styles.header_wrapper)}>
      <h2 className={styles.header_title}>Amine Search App</h2>
    </header>
  );
};
