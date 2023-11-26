import { FC } from 'react';
import cn from 'classnames';
import styles from '../styles/Header.module.scss';

const Header: FC = () => {
  return (
    <header className={cn('wrapper', styles.header_wrapper)}>
      <h2 className={styles.header_title}>Amine Search App</h2>
    </header>
  );
};

export default Header;
