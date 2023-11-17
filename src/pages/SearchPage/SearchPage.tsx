import { FC } from 'react';
import { SearchBar } from '../../components/SearchBar/SearchBar';
import { SearchList } from '../../components/SearchList/SearchList';
import { ErrorButton } from '../../components/ErrorBoundary/components/ErrorButton/ErrorButton';
import { ErrorBoundary } from '../../components/ErrorBoundary/ErrorBoundary';
import cn from 'classnames';
import styles from './SearchPage.module.scss';
import { Fallback } from '../../components/ErrorBoundary/components/ErrorButton/Fallback/Fallback';
import { Outlet } from 'react-router-dom';

export const SearchPage: FC = () => {
  return (
    <div className={styles.container}>
      <ErrorBoundary fallback={<Fallback />}>
        <div className={cn('wrapper', styles.main_wrapper)}>
          <SearchBar />
          <SearchList />
          <Outlet />
          <ErrorButton />
        </div>
      </ErrorBoundary>
    </div>
  );
};
