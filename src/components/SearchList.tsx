import { CharacterInterface, PaginationInterface } from '../interfaces/SearchResponseInterfaces';
import { SearchItem } from '../components/SearchItem';
import cn from 'classnames';
import styles from '../styles/SearchList.module.scss';
import { FC, useEffect, useState } from 'react';
import { LoaderComponent } from '../components/LoaderComponent';
import PaginationComponent from './PaginationComponent';
import DetailCard from '../components/DetailCardProps';
import { useAppDispatch } from '../hooks/redux';
import { charactersInfoSlice } from '../features/characters/CharactersInfoSlice';
import { Router } from 'next/router';
import { NotFoundItem } from './NotFoundItem';

type SearchListProps = {
  characters: Array<CharacterInterface>;
  pagination: PaginationInterface | null;
  detailCard: CharacterInterface | null;
};

export const SearchList: FC<SearchListProps> = ({ characters, pagination, detailCard }) => {
  const { update, updateSuccess } = charactersInfoSlice.actions;
  const dispatch = useAppDispatch();

  const [loading, setLoading] = useState(false);
  useEffect(() => {
    const start = () => {
      setLoading(true);
      dispatch(update(true));
    };
    const end = () => {
      setLoading(false);
      if (characters) {
        dispatch(updateSuccess({ data: characters, pagination }));
      }
    };
    Router.events.on('routeChangeStart', start);
    Router.events.on('routeChangeComplete', end);
    Router.events.on('routeChangeError', end);
    return () => {
      Router.events.off('routeChangeStart', start);
      Router.events.off('routeChangeComplete', end);
      Router.events.off('routeChangeError', end);
    };
  }, [characters, dispatch, pagination, update, updateSuccess]);

  const renderedList = characters.map((item: CharacterInterface) => {
    return <SearchItem item={item} key={item.mal_id} />;
  });
  return (
    <>
      {loading ? (
        <LoaderComponent />
      ) : characters.length ? (
        <div style={{ display: 'flex', gap: '3rem' }} data-testid="list">
          <div>
            <div className={styles.list_wrapper}>
              <ul className={cn('wrapper', styles.list_container)}>{renderedList}</ul>
            </div>
            <PaginationComponent pagination={pagination} />
          </div>
          <>{detailCard ? <DetailCard detailCharacter={detailCard} /> : <></>}</>
        </div>
      ) : (
        <NotFoundItem />
      )}
    </>
  );
};
