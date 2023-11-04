/* eslint-disable @typescript-eslint/no-unused-vars */
import { Await, defer, useLoaderData, useNavigate, useSearchParams } from 'react-router-dom';
import { getOneCharacter, searchApiAxios } from '../../api/SearchApi';
import { CharacterInterface, CharacterResponseInterface } from '../../interfaces/SearchResponse';
import { LoaderComponent } from '../LoaderComponent/LoaderComponent';
import { Suspense, useEffect, useRef, useState } from 'react';
import styles from './DetailCard.module.scss';
import cn from 'classnames';
import useOutsideClick from '../../hooks/HandleOutsideClick';

const DetailCard = () => {
  console.log('render Details components');
  // const outsideRef = useRef<HTMLDivElement>(null);
  const [isOverlay, setIsOverlay] = useState<boolean>(true);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [searchParams, setSearchParams] = useSearchParams();

  // console.log(searchParams);

  const data = useLoaderData() as { detailedCard: CharacterInterface };
  const { detailedCard } = data;

  // useEffect(() => {
  //   setIsLoading(true);
  //   setTimeout(() => {
  //     setIsLoading(false);
  //   }, 500);
  // }, [data]);

  const navigate = useNavigate();

  const handleClose = (): void => {
    const searchValue = searchParams.get('search');
    navigate({
      pathname: '/',
      search: searchValue ? `search=${searchValue}` : ``,
    });
    setIsOverlay((prev) => !prev);
  };

  const outsideRef = useOutsideClick(handleClose);

  return (
    <Suspense fallback={<LoaderComponent />}>
      <Await resolve={detailedCard} errorElement={<p>Error in detail compoment</p>}>
        {(detailedCard) => {
          // console.log(data);
          return (
            searchParams.has('details') && (
              <>
                <div className={isOverlay ? styles.overlay : ''}></div>

                <div className={cn(styles.detail_card_container)} ref={outsideRef}>
                  <button className={styles.close_btn} onClick={handleClose}>
                    &#x2715;
                  </button>

                  <div className={styles.content_container}>
                    <p className={styles.name}>
                      {detailedCard.title || detailedCard.title_english}
                    </p>

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
            )
          );
        }}
      </Await>
    </Suspense>

    // searchParams.has('details') &&
    // (!isLoading ? (
    //   <div>
    //     <p> Selested id: {data.id}</p>
    //     <img src={data.image} />
    //     <p>Name: {data.name}</p>
    //     <p>Gender: {data.gender}</p>
    //     <button onClick={handleClose}>close</button>
    //   </div>
    // ) : (
    //   <LoaderComponent />
    // ))
  );
};

export default DetailCard;

export const detailCardLoader = async ({ request }: { request: Request }) => {
  const url = new URL(request.url);
  const detailsTerm = url.searchParams.get('details');

  // console.log('fetch details data');

  if (detailsTerm) {
    const response = await getOneCharacter(Number(detailsTerm));
    return defer({
      detailedCard: response,
    });

    // return response.data;
  }

  return defer({
    detailedCard: null,
  });

  // return null;
};
