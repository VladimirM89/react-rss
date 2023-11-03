/* eslint-disable @typescript-eslint/no-unused-vars */
import { Await, defer, useLoaderData, useNavigate, useSearchParams } from 'react-router-dom';
import { searchApiAxios } from '../../api/SearchApi';
import { CharacterInterface } from '../../interfaces/SearchResponse';
import { LoaderComponent } from '../LoaderComponent/LoaderComponent';
import { Suspense, useEffect, useState } from 'react';
import React from 'react';

const DetailCard = () => {
  console.log('render Details components');
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [searchParams, setSearchParams] = useSearchParams();

  console.log(searchParams);

  const data = useLoaderData();

  useEffect(() => {
    setIsLoading(true);
    setTimeout(() => {
      setIsLoading(false);
    }, 500);
  }, [data]);

  const navigate = useNavigate();

  const handleClose = (): void => {
    const searchValue = searchParams.get('search');
    navigate({
      pathname: '/',
      search: searchValue ? `search=${searchValue}` : ``,
    });
  };

  return (
    <Suspense fallback={<LoaderComponent />}>
      <Await resolve={data} errorElement={<p>Error in detail compoment</p>}>
        {(data) => {
          console.log(data);
          return (
            searchParams.has('details') && (
              <div>
                <p> Selested id: {data.detailedCard.id}</p>
                <img src={data.detailedCard.image} />
                <p>Name: {data.detailedCard.name}</p>
                <p>Gender: {data.detailedCard.gender}</p>
                <button onClick={handleClose}>close</button>
              </div>
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

  console.log('fetch details data');

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
