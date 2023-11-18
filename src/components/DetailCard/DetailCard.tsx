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
import { useAppDispatch } from '../../hooks/redux';

const DetailCard = () => {
  // const { data: characher } = useAppSelector((state) => state.characterSliceReducer);
  const { updateLoading, updateSuccess } = characterSlice.actions;
  const dispatch = useAppDispatch();

  const [searchParams, setSearchParams] = useSearchParams();
  const detailParam = searchParams.get('details');
  // const [skip, setSkip] = useState<boolean>(true);

  const { data, isFetching } = useGetCharacterByIdQuery(Number(detailParam));

  // useEffect(() => {
  //   if (detailParam?.length) {
  //     setSkip(false);
  //   }
  // }, [detailParam]);

  useEffect(() => {
    if (isFetching) {
      dispatch(updateLoading(isFetching));
    }
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
    navigate({
      pathname: '/',
      search: createSearchParams(paramsToSet as URLSearchParamsInit).toString(),
    });
    setSearchParams(paramsToSet as URLSearchParamsInit);
  };

  const outsideRef = useOutsideClick(handleClose);

  return (
    data?.data &&
    (!isFetching ? (
      <>
        <div className={searchParams.has('details') ? styles.overlay : ''}></div>
        <div
          data-testid="detail-block"
          className={cn(styles.detail_card_container)}
          ref={outsideRef}
        >
          <button className={styles.close_btn} onClick={handleClose}>
            &#x2715;
          </button>
          <div className={styles.content_container}>
            <p className={styles.name}>{data?.data.title} </p>
            <div className={styles.img_container}>
              <img src={data?.data.images.jpg.image_url} />
            </div>
            <ul className={styles.info_container}>
              <li className={styles.description}>
                <span className={styles.description_text}>Duration</span>
                <span className={styles.description_text}>{data?.data.duration}</span>
              </li>
              <li className={styles.description}>
                <span className={styles.description_text}>Age</span>
                <span className={styles.description_text}>{data?.data.rating}</span>
              </li>
              <li className={styles.description}>
                <span className={styles.description_text}>Type</span>
                <span className={styles.description_text}>
                  {data?.data.type} {data?.data.episodes} episode
                  {data?.data.episodes > 1 && 's'}
                </span>
              </li>
              <li className={styles.description}>
                <span className={styles.description_text}>Status</span>
                <span className={styles.description_text}>{data?.data.status}</span>
              </li>
            </ul>
          </div>
        </div>
      </>
    ) : (
      <LoaderComponent />
    ))
  );
};

export default DetailCard;
