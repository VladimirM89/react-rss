/* eslint-disable @typescript-eslint/no-unused-vars */
import { useLoaderData, useNavigate, useSearchParams } from 'react-router-dom';
import { searchApiAxios } from '../../api/SearchApi';
import { CharacterInterface } from '../../interfaces/SearchResponse';
import { LoaderComponent } from '../LoaderComponent/LoaderComponent';
import { useEffect, useState } from 'react';

const DetailedCard = () => {
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [searchParams, setSearchParams] = useSearchParams();

  const detailedCard = useLoaderData() as CharacterInterface;
  useEffect(() => {
    setIsLoading(true);
    setTimeout(() => {
      setIsLoading(false);
    }, 500);
  }, [detailedCard]);

  const navigate = useNavigate();
  const handleClose = (): void => {
    if (searchParams.has('search')) {
      const searchValue = searchParams.get('search');
      navigate({
        pathname: '/',
        search: `search=${searchValue}`,
      });
    }
  };

  return (
    searchParams.has('details') &&
    (!isLoading ? (
      <div>
        <p> Selested id: {detailedCard.id}</p>
        <img src={detailedCard.image} />
        <p>Name: {detailedCard.name}</p>
        <p>Gender: {detailedCard.gender}</p>
        <button onClick={handleClose}>close</button>
      </div>
    ) : (
      <LoaderComponent />
    ))
  );
};

export default DetailedCard;

export const detailedCardLoader = async (): Promise<CharacterInterface | null> => {
  const queryParams = new URLSearchParams(location.search);
  const id = queryParams.get('details') || '';
  // console.log(id);

  if (id) {
    const response = await searchApiAxios.get<CharacterInterface>(`${id}`);
    return response.data;
  }
  return null;
};
