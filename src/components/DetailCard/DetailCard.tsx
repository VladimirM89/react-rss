/* eslint-disable react-hooks/exhaustive-deps */
import {
  URLSearchParamsInit,
  createSearchParams,
  useNavigate,
  useSearchParams,
} from 'react-router-dom';
import { useGetCharacterByIdQuery } from '../../features/api/apiSlice';

import { LoaderComponent } from '../LoaderComponent/LoaderComponent';
import { useEffect } from 'react';
import styles from './DetailCard.module.scss';
import cn from 'classnames';
import useOutsideClick from '../../hooks/HandleOutsideClick';
import { customCreateSearchParams } from '../../utils/queryParams';
import { characterSlice } from '../../features/characters/CharacterSlice';
import { useAppDispatch, useAppSelector } from '../../hooks/redux';

const DetailCard = () => {
  const { character, id, isOpened } = useAppSelector((state) => state.characterSliceReducer);
  const { updateSuccess, handleDetailView } = characterSlice.actions;
  const dispatch = useAppDispatch();

  const [searchParams, setSearchParams] = useSearchParams();

  const { data, isFetching } = useGetCharacterByIdQuery(id!, { skip: !id });

  useEffect(() => {
    if (data?.data) {
      dispatch(updateSuccess(data.data));
    }
  }, [isFetching]);

  const navigate = useNavigate();

  const handleClose = (): void => {
    const searchValue = searchParams.get('q');
    const pageValue = searchParams.get('page');
    const limitValue = searchParams.get('limit');
    const paramsToSet = customCreateSearchParams({
      q: searchValue || '',
      page: pageValue || '',
      limit: limitValue || '',
    });

    dispatch(handleDetailView(false));

    navigate({
      pathname: '/',
      search: createSearchParams(paramsToSet as URLSearchParamsInit).toString(),
    });
    setSearchParams(paramsToSet as URLSearchParamsInit);
  };

  const outsideRef = useOutsideClick(handleClose);

  return data?.data.mal_id === id && isOpened ? (
    <>
      <div className={searchParams.has('details') ? styles.overlay : ''}></div>
      <div data-testid="detail-block" className={cn(styles.detail_card_container)} ref={outsideRef}>
        <button className={styles.close_btn} onClick={handleClose}>
          &#x2715;
        </button>
        <div className={styles.content_container}>
          <p className={styles.name}>{character?.title} </p>
          <div className={styles.img_container}>
            <img src={character?.images.jpg.image_url} />
          </div>
          <ul className={styles.info_container}>
            <li className={styles.description}>
              <span className={styles.description_text}>Duration</span>
              <span className={styles.description_text}>{character?.duration}</span>
            </li>
            <li className={styles.description}>
              <span className={styles.description_text}>Age</span>
              <span className={styles.description_text}>{character?.rating}</span>
            </li>
            <li className={styles.description}>
              <span className={styles.description_text}>Type</span>
              <span className={styles.description_text}>
                {character?.type} {character?.episodes} episode
                {character?.episodes && character?.episodes > 1 && 's'}
              </span>
            </li>
            <li className={styles.description}>
              <span className={styles.description_text}>Status</span>
              <span className={styles.description_text}>{character?.status}</span>
            </li>
          </ul>
        </div>
      </div>
    </>
  ) : (
    isFetching && <LoaderComponent />
  );
};

export default DetailCard;
