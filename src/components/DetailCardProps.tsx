import { customCreateSearchParams } from '../utils/queryParams';
import { CharacterInterface } from '@/interfaces/SearchResponseInterfaces';
import { FC, useEffect } from 'react';
import useOutsideClick from '@/hooks/HandleOutsideClick';
import cn from 'classnames';
import styles from '../styles/DetailCard.module.scss';
import Image from 'next/image';
import { useRouter } from 'next/router';
import { SearchParams } from '@/interfaces/ParamsInterfaces';
import { characterSlice } from '@/features/characters/CharacterSlice';
import { useAppDispatch } from '@/hooks/redux';
import { NotFoundItem } from './NotFoundItem';
type DetailCardProps = {
  detailCharacter: CharacterInterface;
};

const DetailCard: FC<DetailCardProps> = ({ detailCharacter }) => {
  // console.log(detailCharacter);
  const router = useRouter();
  const { query } = router;

  // const { character, id, isOpened } = useAppSelector((state) => state.characterSliceReducer);
  const { updateSuccess, handleDetailView, setCharacterId } = characterSlice.actions;
  const dispatch = useAppDispatch();

  // const [searchParams, setSearchParams] = useSearchParams();

  // const { data, isFetching } = useGetCharacterByIdQuery(id!, { skip: !id });

  useEffect(() => {
    if (detailCharacter) {
      dispatch(handleDetailView(true));
      dispatch(updateSuccess(detailCharacter));
      dispatch(setCharacterId(detailCharacter.mal_id));
    }
  }, [detailCharacter, dispatch, handleDetailView, updateSuccess, setCharacterId]);

  // const navigate = useNavigate();

  const handleClose = (): void => {
    const { q, page, limit }: SearchParams = query;
    const normalizeParams = customCreateSearchParams({ q, page, limit });
    router.push({
      pathname: `/`,
      query: { ...normalizeParams },
    });

    // const searchValue = searchParams.get('q');
    // const pageValue = searchParams.get('page');
    // const limitValue = searchParams.get('limit');
    // const paramsToSet = customCreateSearchParams({
    //   q: searchValue || '',
    //   page: pageValue || '',
    //   limit: limitValue || '',
    // });
    dispatch(handleDetailView(false));
    // navigate({
    //   pathname: '/',
    //   search: createSearchParams(paramsToSet as URLSearchParamsInit).toString(),
    // });
    // setSearchParams(paramsToSet as URLSearchParamsInit);
  };

  const outsideRef = useOutsideClick(handleClose);

  return detailCharacter ? (
    <>
      <div className={query.details ? styles.overlay : ''}></div>
      <div data-testid="detail-block" className={cn(styles.detail_card_container)} ref={outsideRef}>
        <button className={styles.close_btn} onClick={handleClose}>
          &#x2715;
        </button>
        <div className={styles.content_container}>
          <p className={styles.name}>{detailCharacter.title} </p>
          <div className={styles.img_container}>
            <Image
              width={250}
              height={250}
              priority
              src={detailCharacter.images.jpg.image_url}
              alt={detailCharacter.title}
            />
          </div>
          <ul className={styles.info_container}>
            <li className={styles.description}>
              <span className={styles.description_text}>Duration</span>
              <span className={styles.description_text}>{detailCharacter.duration}</span>
            </li>
            <li className={styles.description}>
              <span className={styles.description_text}>Age</span>
              <span className={styles.description_text}>{detailCharacter.rating}</span>
            </li>
            <li className={styles.description}>
              <span className={styles.description_text}>Type</span>
              <span className={styles.description_text}>
                {detailCharacter.type} {detailCharacter.episodes} episode
                {detailCharacter.episodes && detailCharacter.episodes > 1 && 's'}
              </span>
            </li>
            <li className={styles.description}>
              <span className={styles.description_text}>Status</span>
              <span className={styles.description_text}>{detailCharacter.status}</span>
            </li>
          </ul>
        </div>
      </div>
    </>
  ) : (
    <NotFoundItem />
  );
};

export default DetailCard;
