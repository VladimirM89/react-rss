/* eslint-disable @typescript-eslint/no-unused-vars */
import {
  Await,
  createSearchParams,
  defer,
  useLoaderData,
  useNavigate,
  useSearchParams,
} from 'react-router-dom';
import { getOneCharacter, searchApiAxios } from '../../api/SearchApi';
import { CharacterInterface } from '../../interfaces/SearchResponseInterfaces';
import { LoaderComponent } from '../LoaderComponent/LoaderComponent';
import { Suspense, useEffect, useRef, useState } from 'react';
import styles from './DetailCard.module.scss';
import cn from 'classnames';
import useOutsideClick from '../../hooks/HandleOutsideClick';
import { customCreateSearchParams } from '../../utils/queryParams';

const DetailCard = () => {
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [searchParams, setSearchParams] = useSearchParams();

  const data = useLoaderData() as { detailedCard: CharacterInterface };
  const { detailedCard } = data;

  useEffect(() => {
    setIsLoading(true);
    setTimeout(() => {
      setIsLoading(false);
    }, 500);
  }, [data]);

  const navigate = useNavigate();

  const handleClose = (): void => {
    const searchValue = searchParams.get('q');
    const pageValue = searchParams.get('page');
    const limitValue = searchParams.get('limit');
    const paramsToSet = customCreateSearchParams({
      q: searchValue || '',
      page: Number(pageValue),
      limit: Number(limitValue),
    });
    navigate({
      pathname: '/',
      search: createSearchParams(paramsToSet).toString(),
    });
    setSearchParams(paramsToSet);
  };

  const outsideRef = useOutsideClick(handleClose);

  return (
    // <Suspense fallback={<LoaderComponent />}>
    //   {searchParams.has('details') && (
    //     <>
    //       <div className={searchParams.has('details') ? styles.overlay : ''}></div>

    //       <div className={cn(styles.detail_card_container)} ref={outsideRef}>
    //         <button className={styles.close_btn} onClick={handleClose}>
    //           &#x2715;
    //         </button>

    //         <div className={styles.content_container}>
    //           <p className={styles.name}>{detailedCard.title || detailedCard.title_english}</p>

    //           <div className={styles.img_container}>
    //             <img src={detailedCard.images.jpg.image_url} />
    //           </div>

    //           <ul className={styles.info_container}>
    //             <li className={styles.description}>
    //               <span className={styles.description_text}>Duration</span>
    //               <span className={styles.description_text}>{detailedCard.duration}</span>
    //             </li>
    //             <li className={styles.description}>
    //               <span className={styles.description_text}>Age</span>
    //               <span className={styles.description_text}>{detailedCard.rating}</span>
    //             </li>
    //             <li className={styles.description}>
    //               <span className={styles.description_text}>Type</span>
    //               <span className={styles.description_text}>
    //                 {detailedCard.type} {detailedCard.episodes} episode
    //                 {detailedCard.episodes > 1 && 's'}
    //               </span>
    //             </li>
    //             <li className={styles.description}>
    //               <span className={styles.description_text}>Status</span>
    //               <span className={styles.description_text}>{detailedCard.status}</span>
    //             </li>
    //           </ul>
    //         </div>
    //       </div>
    //     </>
    //   )}
    // </Suspense>

    searchParams.has('details') &&
    (searchParams.has('details') ? (
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
            <p className={styles.name}>{detailedCard.title || detailedCard.title_english} </p>
            <div className={styles.img_container}>
              <img src={detailedCard.images.jpg.image_url} />
            </div>
            <ul className={styles.info_container}>
              <li className={styles.description}>
                <span className={styles.description_text}>Duration</span>
                <span className={styles.description_text}>{detailedCard.duration}</span>
              </li>
              <li className={styles.description}>
                <span className={styles.description_text}>Age</span>
                <span className={styles.description_text}>{detailedCard.rating}</span>
              </li>
              <li className={styles.description}>
                <span className={styles.description_text}>Type</span>
                <span className={styles.description_text}>
                  {detailedCard.type} {detailedCard.episodes} episode
                  {detailedCard.episodes > 1 && 's'}
                </span>
              </li>
              <li className={styles.description}>
                <span className={styles.description_text}>Status</span>
                <span className={styles.description_text}>{detailedCard.status}</span>
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

export const detailCardLoader = async ({ request }: { request: Request }) => {
  const url = new URL(request.url);
  const detailsTerm = url.searchParams.get('details');

  if (detailsTerm) {
    const response = await getOneCharacter(Number(detailsTerm));

    return {
      detailedCard: response,
    };
    // return defer({
    //   detailedCard: response,
    // });
  }

  return {
    detailedCard: null,
  };

  // return defer({
  //   detailedCard: null,
  // });
};
