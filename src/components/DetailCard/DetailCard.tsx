/* eslint-disable @typescript-eslint/no-unused-vars */
import { Await, defer, useLoaderData, useNavigate, useSearchParams } from 'react-router-dom';
import { searchApiAxios } from '../../api/SearchApi';
import { CharacterInterface } from '../../interfaces/SearchResponse';
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
                    <p className={styles.name}>{detailedCard.name}</p>
                    <div className={styles.img_container}>
                      <img src={detailedCard.image} />
                    </div>

                    <p className={styles.info_title}>info</p>
                    <ul className={styles.info_container}>
                      <li className={styles.description}>
                        <span className={styles.description_text}>Status</span>
                        <span className={styles.description_text}>{detailedCard.status}</span>
                      </li>
                      <li className={styles.description}>
                        <span className={styles.description_text}>Gender</span>
                        <span className={styles.description_text}>{detailedCard.gender}</span>
                      </li>
                      <li className={styles.description}>
                        <span className={styles.description_text}>Species</span>
                        <span className={styles.description_text}>{detailedCard.species}</span>
                      </li>
                      <li className={styles.description}>
                        <span className={styles.description_text}>Location</span>
                        <span className={styles.description_text}>
                          {detailedCard.location.name}
                        </span>
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
  const searchTerm = url.searchParams.get('details');

  // console.log('fetch details data');

  if (searchTerm) {
    const response = await searchApiAxios.get<CharacterInterface>(`${searchTerm}`);
    return defer({
      detailedCard: response.data,
    });

    // return response.data;
  }

  return defer({
    detailedCard: null,
  });

  // return null;
};
