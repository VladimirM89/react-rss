import { render, screen } from '@testing-library/react';
import { SearchList } from './SearchList';
import { BrowserRouter } from 'react-router-dom';
import SearchProvider from '../../context/SearchContext';

const data = [
  {
    mal_id: 1,
    url: 'https://myanimelist.net/anime/1/Cowboy_Bebop',
    images: {
      jpg: {
        image_url: 'https://cdn.myanimelist.net/images/anime/4/19644.jpg',
        small_image_url: 'https://cdn.myanimelist.net/images/anime/4/19644t.jpg',
        large_image_url: 'https://cdn.myanimelist.net/images/anime/4/19644l.jpg',
      },
      webp: {
        image_url: 'https://cdn.myanimelist.net/images/anime/4/19644.webp',
        small_image_url: 'https://cdn.myanimelist.net/images/anime/4/19644t.webp',
        large_image_url: 'https://cdn.myanimelist.net/images/anime/4/19644l.webp',
      },
    },
    trailer: {
      youtube_id: 'gY5nDXOtv_o',
      url: 'https://www.youtube.com/watch?v=gY5nDXOtv_o',
      embed_url: 'https://www.youtube.com/embed/gY5nDXOtv_o?enablejsapi=1&wmode=opaque&autoplay=1',
      images: {
        image_url: 'https://img.youtube.com/vi/gY5nDXOtv_o/default.jpg',
        small_image_url: 'https://img.youtube.com/vi/gY5nDXOtv_o/sddefault.jpg',
        medium_image_url: 'https://img.youtube.com/vi/gY5nDXOtv_o/mqdefault.jpg',
        large_image_url: 'https://img.youtube.com/vi/gY5nDXOtv_o/hqdefault.jpg',
        maximum_image_url: 'https://img.youtube.com/vi/gY5nDXOtv_o/maxresdefault.jpg',
      },
    },
    approved: true,
    titles: [
      {
        type: 'Default',
        title: 'Cowboy Bebop',
      },
      {
        type: 'Japanese',
        title: 'カウボーイビバップ',
      },
      {
        type: 'English',
        title: 'Cowboy Bebop',
      },
    ],
    title: 'Cowboy Bebop',
    title_english: 'Cowboy Bebop',
    title_japanese: 'カウボーイビバップ',
    title_synonyms: [],
    type: 'TV',
    source: 'Original',
    episodes: 26,
    status: 'Finished Airing',
    airing: false,
    aired: {
      from: '1998-04-03T00:00:00+00:00',
      to: '1999-04-24T00:00:00+00:00',
      prop: {
        from: {
          day: 3,
          month: 4,
          year: 1998,
        },
        to: {
          day: 24,
          month: 4,
          year: 1999,
        },
      },
      string: 'Apr 3, 1998 to Apr 24, 1999',
    },
    duration: '24 min per ep',
    rating: 'R - 17+ (violence & profanity)',
    score: 8.75,
    scored_by: 936783,
    rank: 46,
    popularity: 43,
    members: 1813631,
    favorites: 80361,
    synopsis:
      "Crime is timeless. By the year 2071, humanity has expanded across the galaxy, filling the surface of other planets with settlements like those on Earth. These new societies are plagued by murder, drug use, and theft, and intergalactic outlaws are hunted by a growing number of tough bounty hunters.\n\nSpike Spiegel and Jet Black pursue criminals throughout space to make a humble living. Beneath his goofy and aloof demeanor, Spike is haunted by the weight of his violent past. Meanwhile, Jet manages his own troubled memories while taking care of Spike and the Bebop, their ship. The duo is joined by the beautiful con artist Faye Valentine, odd child Edward Wong Hau Pepelu Tivrusky IV, and Ein, a bioengineered Welsh Corgi.\n\nWhile developing bonds and working to catch a colorful cast of criminals, the Bebop crew's lives are disrupted by a menace from Spike's past. As a rival's maniacal plot continues to unravel, Spike must choose between life with his newfound family or revenge for his old wounds.\n\n[Written by MAL Rewrite]",
    background:
      'When Cowboy Bebop first aired in spring of 1998 on TV Tokyo, only episodes 2, 3, 7-15, and 18 were broadcast, it was concluded with a recap special known as Yose Atsume Blues. This was due to anime censorship having increased following the big controversies over Evangelion, as a result most of the series was pulled from the air due to violent content. Satellite channel WOWOW picked up the series in the fall of that year and aired it in its entirety uncensored. Cowboy Bebop was not a ratings hit in Japan, but sold over 19,000 DVD units in the initial release run, and 81,000 overall. Protagonist Spike Spiegel won Best Male Character, and Megumi Hayashibara won Best Voice Actor for her role as Faye Valentine in the 1999 and 2000 Anime Grand Prix, respectively. Cowboy Bebop\'s biggest influence has been in the United States, where it premiered on Adult Swim in 2001 with many reruns since. The show\'s heavy Western influence struck a chord with American viewers, where it became a "gateway drug" to anime aimed at adult audiences.',
    season: 'spring',
    year: 1998,
    broadcast: {
      day: 'Saturdays',
      time: '01:00',
      timezone: 'Asia/Tokyo',
      string: 'Saturdays at 01:00 (JST)',
    },
    producers: [
      {
        mal_id: 23,
        type: 'anime',
        name: 'Bandai Visual',
        url: 'https://myanimelist.net/anime/producer/23/Bandai_Visual',
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
        mal_id: 14,
        type: 'anime',
        name: 'Sunrise',
        url: 'https://myanimelist.net/anime/producer/14/Sunrise',
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
        mal_id: 46,
        type: 'anime',
        name: 'Award Winning',
        url: 'https://myanimelist.net/anime/genre/46/Award_Winning',
      },
      {
        mal_id: 24,
        type: 'anime',
        name: 'Sci-Fi',
        url: 'https://myanimelist.net/anime/genre/24/Sci-Fi',
      },
    ],
    explicit_genres: [],
    themes: [
      {
        mal_id: 50,
        type: 'anime',
        name: 'Adult Cast',
        url: 'https://myanimelist.net/anime/genre/50/Adult_Cast',
      },
      {
        mal_id: 29,
        type: 'anime',
        name: 'Space',
        url: 'https://myanimelist.net/anime/genre/29/Space',
      },
    ],
    demographics: [],
  },
  {
    mal_id: 7,
    url: 'https://myanimelist.net/anime/7/Witch_Hunter_Robin',
    images: {
      jpg: {
        image_url: 'https://cdn.myanimelist.net/images/anime/10/19969.jpg',
        small_image_url: 'https://cdn.myanimelist.net/images/anime/10/19969t.jpg',
        large_image_url: 'https://cdn.myanimelist.net/images/anime/10/19969l.jpg',
      },
      webp: {
        image_url: 'https://cdn.myanimelist.net/images/anime/10/19969.webp',
        small_image_url: 'https://cdn.myanimelist.net/images/anime/10/19969t.webp',
        large_image_url: 'https://cdn.myanimelist.net/images/anime/10/19969l.webp',
      },
    },
    trailer: {
      youtube_id: '7UkaILjPk8M',
      url: 'https://www.youtube.com/watch?v=7UkaILjPk8M',
      embed_url: 'https://www.youtube.com/embed/7UkaILjPk8M?enablejsapi=1&wmode=opaque&autoplay=1',
      images: {
        image_url: 'https://img.youtube.com/vi/7UkaILjPk8M/default.jpg',
        small_image_url: 'https://img.youtube.com/vi/7UkaILjPk8M/sddefault.jpg',
        medium_image_url: 'https://img.youtube.com/vi/7UkaILjPk8M/mqdefault.jpg',
        large_image_url: 'https://img.youtube.com/vi/7UkaILjPk8M/hqdefault.jpg',
        maximum_image_url: 'https://img.youtube.com/vi/7UkaILjPk8M/maxresdefault.jpg',
      },
    },
    approved: true,
    titles: [
      {
        type: 'Default',
        title: 'Witch Hunter Robin',
      },
      {
        type: 'Synonym',
        title: 'WHR',
      },
      {
        type: 'Japanese',
        title: 'Witch Hunter ROBIN (ウイッチハンターロビン)',
      },
      {
        type: 'English',
        title: 'Witch Hunter Robin',
      },
    ],
    title: 'Witch Hunter Robin',
    title_english: 'Witch Hunter Robin',
    title_japanese: 'Witch Hunter ROBIN (ウイッチハンターロビン)',
    title_synonyms: ['WHR'],
    type: 'TV',
    source: 'Original',
    episodes: 26,
    status: 'Finished Airing',
    airing: false,
    aired: {
      from: '2002-07-03T00:00:00+00:00',
      to: '2002-12-25T00:00:00+00:00',
      prop: {
        from: {
          day: 3,
          month: 7,
          year: 2002,
        },
        to: {
          day: 25,
          month: 12,
          year: 2002,
        },
      },
      string: 'Jul 3, 2002 to Dec 25, 2002',
    },
    duration: '25 min per ep',
    rating: 'PG-13 - Teens 13 or older',
    score: 7.24,
    scored_by: 43269,
    rank: 2960,
    popularity: 1822,
    members: 114084,
    favorites: 628,
    synopsis:
      "Robin Sena is a powerful craft user drafted into the STNJ—a group of specialized hunters that fight deadly beings known as Witches. Though her fire power is great, she's got a lot to learn about her powers and working with her cool and aloof partner, Amon. But the truth about the Witches and herself will leave Robin on an entirely new path that she never expected!\n\n(Source: Funimation)",
    background: null,
    season: 'summer',
    year: 2002,
    broadcast: {
      day: 'Wednesdays',
      time: '01:25',
      timezone: 'Asia/Tokyo',
      string: 'Wednesdays at 01:25 (JST)',
    },
    producers: [
      {
        mal_id: 23,
        type: 'anime',
        name: 'Bandai Visual',
        url: 'https://myanimelist.net/anime/producer/23/Bandai_Visual',
      },
      {
        mal_id: 53,
        type: 'anime',
        name: 'Dentsu',
        url: 'https://myanimelist.net/anime/producer/53/Dentsu',
      },
      {
        mal_id: 123,
        type: 'anime',
        name: 'Victor Entertainment',
        url: 'https://myanimelist.net/anime/producer/123/Victor_Entertainment',
      },
      {
        mal_id: 717,
        type: 'anime',
        name: 'TV Tokyo Music',
        url: 'https://myanimelist.net/anime/producer/717/TV_Tokyo_Music',
      },
    ],
    licensors: [
      {
        mal_id: 102,
        type: 'anime',
        name: 'Funimation',
        url: 'https://myanimelist.net/anime/producer/102/Funimation',
      },
      {
        mal_id: 233,
        type: 'anime',
        name: 'Bandai Entertainment',
        url: 'https://myanimelist.net/anime/producer/233/Bandai_Entertainment',
      },
    ],
    studios: [
      {
        mal_id: 14,
        type: 'anime',
        name: 'Sunrise',
        url: 'https://myanimelist.net/anime/producer/14/Sunrise',
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
        mal_id: 8,
        type: 'anime',
        name: 'Drama',
        url: 'https://myanimelist.net/anime/genre/8/Drama',
      },
      {
        mal_id: 7,
        type: 'anime',
        name: 'Mystery',
        url: 'https://myanimelist.net/anime/genre/7/Mystery',
      },
      {
        mal_id: 37,
        type: 'anime',
        name: 'Supernatural',
        url: 'https://myanimelist.net/anime/genre/37/Supernatural',
      },
    ],
    explicit_genres: [],
    themes: [
      {
        mal_id: 39,
        type: 'anime',
        name: 'Detective',
        url: 'https://myanimelist.net/anime/genre/39/Detective',
      },
    ],
    demographics: [],
  },
  {
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
  },
];

describe('Search component', () => {
  it('Search component renders list if list ', () => {
    render(
      <BrowserRouter>
        <SearchProvider value={{ charactersInfo: { characters: data, pagination: null } }}>
          <SearchList />
        </SearchProvider>
      </BrowserRouter>
    );
    const list = screen.getByRole('list');
    expect(list).toBeInTheDocument();
  });

  it('Verify that the component renders the specified number of cards', async () => {
    render(
      <BrowserRouter>
        <SearchProvider value={{ charactersInfo: { characters: data, pagination: null } }}>
          <SearchList />
        </SearchProvider>
      </BrowserRouter>
    );
    const list = await screen.findAllByRole('listitem');
    expect(list).toHaveLength(3);
  });

  it('Check that an appropriate message is displayed if no cards are present', async () => {
    render(
      <BrowserRouter>
        <SearchProvider value={{ charactersInfo: { characters: [], pagination: null } }}>
          <SearchList />
        </SearchProvider>
      </BrowserRouter>
    );
    const notFoundElement = screen.getByText(/ITEM NOT FOUND/i);
    expect(notFoundElement).toBeInTheDocument();
  });
});
