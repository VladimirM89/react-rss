import { FC } from 'react';
import { CharacterInterface } from '../interfaces/SearchResponseInterfaces';
import styles from '../styles/SearchItem.module.scss';
// import { useNavigate, createSearchParams, useSearchParams } from 'react-router-dom';
// import { customCreateSearchParams } from '../../utils/queryParams';
// import { useAppDispatch } from '../hooks/redux';
// import { characterSlice } from '../features/characters/CharacterSlice';
import Image from 'next/image';
import { useRouter } from 'next/router';

type SearchItemProps = {
  item: CharacterInterface;
};

export const SearchItem: FC<SearchItemProps> = ({ item }) => {
  const router = useRouter();
  const { query } = router;
  // const { setCharacterId } = characterSlice.actions;
  // const dispatch = useAppDispatch();

  // const [searchParams] = useSearchParams();
  // const searchParam = searchParams.get('q');
  // const pageParam = searchParams.get('page');
  // const limitParam = searchParams.get('limit');

  // const navigate = useNavigate();

  const handleNavigate = (id: number) => {
    // const {q, page, limit } = router.query;
    // router.push({
    //   pathname: `/details/${id}`,
    //   query: { ...query },
    // });

    router.push({
      pathname: `/`,
      query: { ...query, details: id.toString() },
    });

    // const checkedParams = customCreateSearchParams({
    //   q: searchParam || '',
    //   page: pageParam || '',
    //   limit: limitParam || '',
    // });

    // dispatch(setCharacterId(id));

    // navigate({
    //   pathname: '/',
    //   search: createSearchParams({ ...checkedParams, details: `${id}` }).toString(),
    // });
  };

  return (
    <li
      data-testid="card-link"
      className={styles.card_container}
      key={item.mal_id}
      onClick={() => handleNavigate(item.mal_id)}
    >
      <Image
        className={styles.character_image}
        src={item.images.jpg.image_url}
        priority={false}
        width={100}
        height={100}
        alt={item.title || (item.title_english && item.title_english.slice(0, 50)) || ''}
      />
      <div className={styles.description_container}>
        <p className={styles.character_name}>
          {item.title.slice(0, 50) || (item.title_english && item.title_english.slice(0, 50)) || ''}
        </p>
        <p className={styles.character_name}>Rating: {item.score}</p>
      </div>
    </li>
  );
};
