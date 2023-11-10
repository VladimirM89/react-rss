import { render, screen } from '@testing-library/react';
import { SearchItem } from './SearchItem';
import { BrowserRouter } from 'react-router-dom';
import userEvent from '@testing-library/user-event';

const data = {
  mal_id: 25,
  url: 'https://myanimelist.net/anime/25/Sunabouzu',
  images: {
    jpg: {
      image_url: 'https://cdn.myanimelist.net/images/anime/6/75536.jpg',
      small_image_url: 'https://cdn.myanimelist.net/images/anime/6/75536t.jpg',
      large_image_url: 'https://cdn.myanimelist.net/images/anime/6/75536l.jpg',
    },
    webp: {
      image_url: 'https://cdn.myanimelist.net/images/anime/6/75536.webp',
      small_image_url: 'https://cdn.myanimelist.net/images/anime/6/75536t.webp',
      large_image_url: 'https://cdn.myanimelist.net/images/anime/6/75536l.webp',
    },
  },
  trailer: {
    youtube_id: 'XMCqw1vxMnY',
    url: 'https://www.youtube.com/watch?v=XMCqw1vxMnY',
    embed_url: 'https://www.youtube.com/embed/XMCqw1vxMnY?enablejsapi=1&wmode=opaque&autoplay=1',
    images: {
      image_url: 'https://img.youtube.com/vi/XMCqw1vxMnY/default.jpg',
      small_image_url: 'https://img.youtube.com/vi/XMCqw1vxMnY/sddefault.jpg',
      medium_image_url: 'https://img.youtube.com/vi/XMCqw1vxMnY/mqdefault.jpg',
      large_image_url: 'https://img.youtube.com/vi/XMCqw1vxMnY/hqdefault.jpg',
      maximum_image_url: 'https://img.youtube.com/vi/XMCqw1vxMnY/maxresdefault.jpg',
    },
  },
  approved: true,
  titles: [
    {
      type: 'Default',
      title: 'Sunabouzu',
    },
    {
      type: 'Synonym',
      title: 'Sunabozu',
    },
    {
      type: 'Japanese',
      title: '砂ぼうず',
    },
    {
      type: 'English',
      title: 'Desert Punk',
    },
    {
      type: 'German',
      title: 'Desert Punk',
    },
    {
      type: 'Spanish',
      title: 'Desert Punk',
    },
    {
      type: 'French',
      title: 'Desert Punk',
    },
  ],
  title: 'Sunabouzu',
  title_english: 'Desert Punk',
  title_japanese: '砂ぼうず',
  title_synonyms: ['Sunabozu'],
  type: 'TV',
  source: 'Manga',
  episodes: 24,
  status: 'Finished Airing',
  airing: false,
  aired: {
    from: '2004-10-06T00:00:00+00:00',
    to: '2005-03-30T00:00:00+00:00',
    prop: {
      from: {
        day: 6,
        month: 10,
        year: 2004,
      },
      to: {
        day: 30,
        month: 3,
        year: 2005,
      },
    },
    string: 'Oct 6, 2004 to Mar 30, 2005',
  },
  duration: '24 min per ep',
  rating: 'R - 17+ (violence & profanity)',
  score: 7.38,
  scored_by: 54316,
  rank: 2235,
  popularity: 1580,
  members: 137209,
  favorites: 832,
  synopsis:
    'The Great Kanto Desert, a sweltering wasteland of nothing but ruins and sand, is all that remains of post-apocalyptic Japan. The once fair population has been left to cling to the inhospitable dunes for survival. At least, that is the case for normal people. For those who have spent a little too long in the Kanto sun, the desert offers a wondrous opportunity to make a name for themselves.\n\nOne such person is the masked handyman "Sunabouzu," or Desert Punk, who has forged a legendary reputation for always finishing his jobs, no matter the nature or cost. Cunning and ruthless, he has become a force of crude destruction to the other desert people. However, the "Vixen of the Desert," Junko Asagiri, discovers that Sunabouzu is not without his weaknesses—he is easily swayed by his insatiable lust for large-breasted desert babes. \n\nFollowing their chaotic adventures through the Kanto Desert, Sunabouzu features a bizarre cast of personalities who entertain themselves with senseless violence and perversion in a world long destroyed by their forefathers. And just like them, they have not learned a damn thing.\n\n[Written by MAL Rewrite]',
  background: null,
  season: 'fall',
  year: 2004,
  broadcast: {
    day: null,
    time: null,
    timezone: null,
    string: 'Unknown',
  },
  producers: [
    {
      mal_id: 42,
      type: 'anime',
      name: 'GDH',
      url: 'https://myanimelist.net/anime/producer/42/GDH',
    },
    {
      mal_id: 144,
      type: 'anime',
      name: 'Pony Canyon',
      url: 'https://myanimelist.net/anime/producer/144/Pony_Canyon',
    },
    {
      mal_id: 146,
      type: 'anime',
      name: 'CBC Television',
      url: 'https://myanimelist.net/anime/producer/146/CBC_Television',
    },
  ],
  licensors: [
    {
      mal_id: 102,
      type: 'anime',
      name: 'Funimation',
      url: 'https://myanimelist.net/anime/producer/102/Funimation',
    },
  ],
  studios: [
    {
      mal_id: 3,
      type: 'anime',
      name: 'Gonzo',
      url: 'https://myanimelist.net/anime/producer/3/Gonzo',
    },
  ],
  genres: [
    {
      mal_id: 1,
      type: 'anime',
      name: 'Action',
      url: 'https://myanimelist.net/anime/genre/1/Action',
    },
    {
      mal_id: 2,
      type: 'anime',
      name: 'Adventure',
      url: 'https://myanimelist.net/anime/genre/2/Adventure',
    },
    {
      mal_id: 4,
      type: 'anime',
      name: 'Comedy',
      url: 'https://myanimelist.net/anime/genre/4/Comedy',
    },
    {
      mal_id: 24,
      type: 'anime',
      name: 'Sci-Fi',
      url: 'https://myanimelist.net/anime/genre/24/Sci-Fi',
    },
    {
      mal_id: 9,
      type: 'anime',
      name: 'Ecchi',
      url: 'https://myanimelist.net/anime/genre/9/Ecchi',
    },
  ],
  explicit_genres: [],
  themes: [],
  demographics: [
    {
      mal_id: 42,
      type: 'anime',
      name: 'Seinen',
      url: 'https://myanimelist.net/anime/genre/42/Seinen',
    },
  ],
};

describe('SearchItem component tests', () => {
  it('Search item renders corrently', () => {
    render(
      <BrowserRouter>
        <SearchItem item={data} />
      </BrowserRouter>
    );
    const item = screen.getByRole('listitem');
    expect(item).toBeInTheDocument();
  });

  it('Search item component renders the relevant card data', () => {
    render(
      <BrowserRouter>
        <SearchItem item={data} />
      </BrowserRouter>
    );
    const title = screen.getByText(/sunabouzu/i, { selector: 'p' });

    const score = screen.getByText(/7.38/i, { selector: 'p' });

    const image = screen.getByAltText(/Sunabouzu/i);

    expect(title).toBeInTheDocument();
    expect(score).toBeInTheDocument();
    expect(image).toBeInTheDocument();
    expect(screen.getByRole('img').getAttribute('src')).toBe(
      'https://cdn.myanimelist.net/images/anime/6/75536.jpg'
    );
  });

  it('Validate clicking on a card', async () => {
    const user = userEvent.setup();

    render(
      <BrowserRouter>
        <SearchItem item={data} />
      </BrowserRouter>
    );

    const item = screen.getByRole('listitem');
    await user.click(item);
    screen.debug();
  });
});
