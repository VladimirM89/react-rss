import { type ReactElement } from 'react';
import Layout from '../components/layout';
import type { NextPageWithLayout } from './_app';
import { wrapper } from '@/store/store';
import { apiSlice } from '@/features/api/apiSlice';
import { SearchList } from '@/components/SearchList';
import { CharacterInterface, SearchResponseInterface } from '@/interfaces/SearchResponseInterfaces';
import { SearchBar } from '@/components/SearchBar';
import { customCreateSearchParams } from '@/utils/queryParams';
import cn from 'classnames';
import styles from '../styles/MainPage.module.scss';

const Page: NextPageWithLayout<{
  characters: SearchResponseInterface;
  detailCharacter: CharacterInterface;
}> = ({ characters, detailCharacter }) => {
  return (
    <div className={cn('wrapper', styles.main_wrapper)}>
      <SearchBar />
      <SearchList
        characters={characters.data}
        pagination={characters.pagination}
        detailCard={detailCharacter}
      />
    </div>
  );
};

Page.getLayout = function getLayout(page: ReactElement) {
  return <Layout>{page}</Layout>;
};

export default Page;

export const getServerSideProps = wrapper.getServerSideProps((store) => async (context) => {
  const resultObject: {
    characters: SearchResponseInterface | null;
    detailCharacter: CharacterInterface | null;
  } = {
    characters: null,
    detailCharacter: null,
  };
  const { query } = context;
  const { q, page, limit, details } = query;
  const correctParams = customCreateSearchParams({
    q: q as string,
    page: page as string,
    limit: limit as string,
  });
  // console.log('query ', correctParams);
  const { data } = await store.dispatch(
    apiSlice.endpoints.getAllCharacters.initiate(correctParams)
  );
  await Promise.all(store.dispatch(apiSlice.util.getRunningQueriesThunk()));
  resultObject.characters = data || null;
  if (details) {
    const { data } = await store.dispatch(
      apiSlice.endpoints.getCharacterById.initiate(Number(details as string))
    );
    await Promise.all(store.dispatch(apiSlice.util.getRunningQueriesThunk()));
    resultObject.detailCharacter = data?.data || null;
  }

  if (!data) {
    return {
      notFound: true,
    };
  }
  return {
    props: resultObject,
  };
});
