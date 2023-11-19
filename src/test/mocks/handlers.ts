import { HttpResponse, http } from 'msw';
import { BASE_URL } from '../../constants/stringConstants';
import {
  CharacterInterface,
  SearchResponseInterface,
} from '../../interfaces/SearchResponseInterfaces';

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
    mal_id: 66,
    url: 'https://myanimelist.net/anime/66/Azumanga_Daiou_The_Animation',
    images: {
      jpg: {
        image_url: 'https://cdn.myanimelist.net/images/anime/1066/117358.jpg',
        small_image_url: 'https://cdn.myanimelist.net/images/anime/1066/117358t.jpg',
        large_image_url: 'https://cdn.myanimelist.net/images/anime/1066/117358l.jpg',
      },
      webp: {
        image_url: 'https://cdn.myanimelist.net/images/anime/1066/117358.webp',
        small_image_url: 'https://cdn.myanimelist.net/images/anime/1066/117358t.webp',
        large_image_url: 'https://cdn.myanimelist.net/images/anime/1066/117358l.webp',
      },
    },
    trailer: {
      youtube_id: 'ofW0KJjHIjg',
      url: 'https://www.youtube.com/watch?v=ofW0KJjHIjg',
      embed_url: 'https://www.youtube.com/embed/ofW0KJjHIjg?enablejsapi=1&wmode=opaque&autoplay=1',
      images: {
        image_url: 'https://img.youtube.com/vi/ofW0KJjHIjg/default.jpg',
        small_image_url: 'https://img.youtube.com/vi/ofW0KJjHIjg/sddefault.jpg',
        medium_image_url: 'https://img.youtube.com/vi/ofW0KJjHIjg/mqdefault.jpg',
        large_image_url: 'https://img.youtube.com/vi/ofW0KJjHIjg/hqdefault.jpg',
        maximum_image_url: 'https://img.youtube.com/vi/ofW0KJjHIjg/maxresdefault.jpg',
      },
    },
    approved: true,
    titles: [
      {
        type: 'Default',
        title: 'Azumanga Daiou The Animation',
      },
      {
        type: 'Synonym',
        title: 'Azumanga Daiou',
      },
      {
        type: 'Japanese',
        title: 'あずまんが大王 THE ANIMATION',
      },
      {
        type: 'English',
        title: 'Azumanga Daioh: The Animation',
      },
    ],
    title: 'Azumanga Daiou The Animation',
    title_english: 'Azumanga Daioh: The Animation',
    title_japanese: 'あずまんが大王 THE ANIMATION',
    title_synonyms: ['Azumanga Daiou'],
    type: 'TV',
    source: '4-koma manga',
    episodes: 26,
    status: 'Finished Airing',
    airing: false,
    aired: {
      from: '2002-04-09T00:00:00+00:00',
      to: '2002-10-01T00:00:00+00:00',
      prop: {
        from: {
          day: 9,
          month: 4,
          year: 2002,
        },
        to: {
          day: 1,
          month: 10,
          year: 2002,
        },
      },
      string: 'Apr 9, 2002 to Oct 1, 2002',
    },
    duration: '24 min per ep',
    rating: 'PG-13 - Teens 13 or older',
    score: 8,
    scored_by: 151717,
    rank: 612,
    popularity: 660,
    members: 342623,
    favorites: 6856,
    synopsis:
      "Chiyo Mihama begins her high school career as one of the strangest students in her freshman class—a tiny, 10-year-old academic prodigy with a fondness for plush dolls and homemade cooking. But her homeroom teacher, Yukari Tanizaki, is the kind of person who would hijack a student's bike to avoid being late, so \"strange\" is a relative word.\n\nThere certainly isn't a shortage of peculiar girls in Yukari-sensei's homeroom class. Accompanying Chiyo are students like Tomo Takino, an energetic tomboy with more enthusiasm than brains; Koyomi Mizuhara, Tomo's best friend whose temper has a fuse shorter than Chiyo; and Sakaki, a tall, athletic beauty whose intimidating looks hide a gentle personality and a painful obsession with cats. In addition, transfer student Ayumu Kasuga, a girl with her head stuck in the clouds, fits right in with the rest of the girls—and she has a few interesting theories about Chiyo's pigtails!\n\nTogether, this lovable group of girls experience the ups and downs of school life, their many adventures filled with constant laughter, surreal absurdity, and occasionally even touching commentary on the bittersweet, temporal nature of high school.\n\n[Written by MAL Rewrite]",
    background: null,
    season: 'spring',
    year: 2002,
    broadcast: {
      day: 'Tuesdays',
      time: '01:25',
      timezone: 'Asia/Tokyo',
      string: 'Tuesdays at 01:25 (JST)',
    },
    producers: [
      {
        mal_id: 79,
        type: 'anime',
        name: 'Genco',
        url: 'https://myanimelist.net/anime/producer/79/Genco',
      },
      {
        mal_id: 104,
        type: 'anime',
        name: 'Lantis',
        url: 'https://myanimelist.net/anime/producer/104/Lantis',
      },
      {
        mal_id: 170,
        type: 'anime',
        name: 'Imagica',
        url: 'https://myanimelist.net/anime/producer/170/Imagica',
      },
      {
        mal_id: 717,
        type: 'anime',
        name: 'TV Tokyo Music',
        url: 'https://myanimelist.net/anime/producer/717/TV_Tokyo_Music',
      },
      {
        mal_id: 745,
        type: 'anime',
        name: 'Cosmic Ray',
        url: 'https://myanimelist.net/anime/producer/745/Cosmic_Ray',
      },
      {
        mal_id: 1344,
        type: 'anime',
        name: 'King Records',
        url: 'https://myanimelist.net/anime/producer/1344/King_Records',
      },
    ],
    licensors: [
      {
        mal_id: 97,
        type: 'anime',
        name: 'ADV Films',
        url: 'https://myanimelist.net/anime/producer/97/ADV_Films',
      },
      {
        mal_id: 376,
        type: 'anime',
        name: 'Sentai Filmworks',
        url: 'https://myanimelist.net/anime/producer/376/Sentai_Filmworks',
      },
    ],
    studios: [
      {
        mal_id: 7,
        type: 'anime',
        name: 'J.C.Staff',
        url: 'https://myanimelist.net/anime/producer/7/JCStaff',
      },
    ],
    genres: [
      {
        mal_id: 4,
        type: 'anime',
        name: 'Comedy',
        url: 'https://myanimelist.net/anime/genre/4/Comedy',
      },
    ],
    explicit_genres: [],
    themes: [
      {
        mal_id: 52,
        type: 'anime',
        name: 'CGDCT',
        url: 'https://myanimelist.net/anime/genre/52/CGDCT',
      },
      {
        mal_id: 57,
        type: 'anime',
        name: 'Gag Humor',
        url: 'https://myanimelist.net/anime/genre/57/Gag_Humor',
      },
      {
        mal_id: 23,
        type: 'anime',
        name: 'School',
        url: 'https://myanimelist.net/anime/genre/23/School',
      },
    ],
    demographics: [],
  },
  {
    mal_id: 188,
    url: 'https://myanimelist.net/anime/188/Gosenzo_Sane',
    images: {
      jpg: {
        image_url: 'https://cdn.myanimelist.net/images/anime/13/78241.jpg',
        small_image_url: 'https://cdn.myanimelist.net/images/anime/13/78241t.jpg',
        large_image_url: 'https://cdn.myanimelist.net/images/anime/13/78241l.jpg',
      },
      webp: {
        image_url: 'https://cdn.myanimelist.net/images/anime/13/78241.webp',
        small_image_url: 'https://cdn.myanimelist.net/images/anime/13/78241t.webp',
        large_image_url: 'https://cdn.myanimelist.net/images/anime/13/78241l.webp',
      },
    },
    trailer: {
      youtube_id: null,
      url: null,
      embed_url: null,
      images: {
        image_url: null,
        small_image_url: null,
        medium_image_url: null,
        large_image_url: null,
        maximum_image_url: null,
      },
    },
    approved: true,
    titles: [
      {
        type: 'Default',
        title: "Gosenzo San'e",
      },
      {
        type: 'Japanese',
        title: '御先祖賛江',
      },
      {
        type: 'English',
        title: 'Masquerade',
      },
    ],
    title: "Gosenzo San'e",
    title_english: 'Masquerade',
    title_japanese: '御先祖賛江',
    title_synonyms: [],
    type: 'OVA',
    source: 'Original',
    episodes: 4,
    status: 'Finished Airing',
    airing: false,
    aired: {
      from: '1998-09-25T00:00:00+00:00',
      to: '1999-03-25T00:00:00+00:00',
      prop: {
        from: {
          day: 25,
          month: 9,
          year: 1998,
        },
        to: {
          day: 25,
          month: 3,
          year: 1999,
        },
      },
      string: 'Sep 25, 1998 to Mar 25, 1999',
    },
    duration: '30 min per ep',
    rating: 'Rx - Hentai',
    score: 6.08,
    scored_by: 1008,
    rank: null,
    popularity: 9562,
    members: 3129,
    favorites: 7,
    synopsis:
      "Masquerade is the story surrounding the Hiraga bloodline in which Gen is a part of. Recently orphaned, he moves in to his grandmother's house and unwittingly triggers the Hiraga clan's curse in which nearly every member leads a tragically short life. In his grandmother's house, Gen begins to unravel vaguely remembered memories from a dream he's always had. With the help of an American graduate student, they try to uncover the secret of the Hiraga bloodline, the whispered legend of immortality that is locked in his genes, and a way to keep Gen from sharing the same fate that every one of his ancestors before him has suffered. \n\n(Source: ANN)",
    background: null,
    season: null,
    year: null,
    broadcast: {
      day: null,
      time: null,
      timezone: null,
      string: null,
    },
    producers: [
      {
        mal_id: 152,
        type: 'anime',
        name: 'Green Bunny',
        url: 'https://myanimelist.net/anime/producer/152/Green_Bunny',
      },
      {
        mal_id: 1139,
        type: 'anime',
        name: 'BEAM Entertainment',
        url: 'https://myanimelist.net/anime/producer/1139/BEAM_Entertainment',
      },
    ],
    licensors: [],
    studios: [
      {
        mal_id: 48,
        type: 'anime',
        name: 'AIC',
        url: 'https://myanimelist.net/anime/producer/48/AIC',
      },
    ],
    genres: [
      {
        mal_id: 4,
        type: 'anime',
        name: 'Comedy',
        url: 'https://myanimelist.net/anime/genre/4/Comedy',
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
      {
        mal_id: 12,
        type: 'anime',
        name: 'Hentai',
        url: 'https://myanimelist.net/anime/genre/12/Hentai',
      },
    ],
    explicit_genres: [],
    themes: [],
    demographics: [],
  },
  {
    mal_id: 755,
    url: 'https://myanimelist.net/anime/755/Boku_no_Sexual_Harassment',
    images: {
      jpg: {
        image_url: 'https://cdn.myanimelist.net/images/anime/8/33163.jpg',
        small_image_url: 'https://cdn.myanimelist.net/images/anime/8/33163t.jpg',
        large_image_url: 'https://cdn.myanimelist.net/images/anime/8/33163l.jpg',
      },
      webp: {
        image_url: 'https://cdn.myanimelist.net/images/anime/8/33163.webp',
        small_image_url: 'https://cdn.myanimelist.net/images/anime/8/33163t.webp',
        large_image_url: 'https://cdn.myanimelist.net/images/anime/8/33163l.webp',
      },
    },
    trailer: {
      youtube_id: null,
      url: null,
      embed_url: null,
      images: {
        image_url: null,
        small_image_url: null,
        medium_image_url: null,
        large_image_url: null,
        maximum_image_url: null,
      },
    },
    approved: true,
    titles: [
      {
        type: 'Default',
        title: 'Boku no Sexual Harassment',
      },
      {
        type: 'Japanese',
        title: '僕のセクシャルハラスメント',
      },
      {
        type: 'English',
        title: 'My Sexual Harassment',
      },
      {
        type: 'German',
        title: 'My Sexual Harassment',
      },
    ],
    title: 'Boku no Sexual Harassment',
    title_english: 'My Sexual Harassment',
    title_japanese: '僕のセクシャルハラスメント',
    title_synonyms: [],
    type: 'OVA',
    source: 'Novel',
    episodes: 3,
    status: 'Finished Airing',
    airing: false,
    aired: {
      from: '1994-12-15T00:00:00+00:00',
      to: '1995-10-06T00:00:00+00:00',
      prop: {
        from: {
          day: 15,
          month: 12,
          year: 1994,
        },
        to: {
          day: 6,
          month: 10,
          year: 1995,
        },
      },
      string: 'Dec 15, 1994 to Oct 6, 1995',
    },
    duration: '36 min per ep',
    rating: 'Rx - Hentai',
    score: 5.59,
    scored_by: 9385,
    rank: null,
    popularity: 4913,
    members: 18095,
    favorites: 41,
    synopsis:
      'Mochizuki is a young business man who works in an office. While doing his job, his boss, Honma, comes in and starts to fondle him. Honma says that Mochizuki should be expected to do stuff so he can climb the ladder to become a successful business man. Mochizuki then starts to sleep with other men so he can become successful. Some men think Mochizuki is sexy, so they then force themselves onto Mochizuki. \n\n(Source: ANN)',
    background: null,
    season: null,
    year: null,
    broadcast: {
      day: null,
      time: null,
      timezone: null,
      string: null,
    },
    producers: [
      {
        mal_id: 50,
        type: 'anime',
        name: 'KSS',
        url: 'https://myanimelist.net/anime/producer/50/KSS',
      },
    ],
    licensors: [
      {
        mal_id: 250,
        type: 'anime',
        name: 'Media Blasters',
        url: 'https://myanimelist.net/anime/producer/250/Media_Blasters',
      },
    ],
    studios: [
      {
        mal_id: 860,
        type: 'anime',
        name: 'Triple X',
        url: 'https://myanimelist.net/anime/producer/860/Triple_X',
      },
    ],
    genres: [
      {
        mal_id: 28,
        type: 'anime',
        name: 'Boys Love',
        url: 'https://myanimelist.net/anime/genre/28/Boys_Love',
      },
      {
        mal_id: 12,
        type: 'anime',
        name: 'Hentai',
        url: 'https://myanimelist.net/anime/genre/12/Hentai',
      },
    ],
    explicit_genres: [],
    themes: [
      {
        mal_id: 48,
        type: 'anime',
        name: 'Workplace',
        url: 'https://myanimelist.net/anime/genre/48/Workplace',
      },
    ],
    demographics: [],
  },
  {
    mal_id: 800,
    url: 'https://myanimelist.net/anime/800/NieA_Under_7',
    images: {
      jpg: {
        image_url: 'https://cdn.myanimelist.net/images/anime/8/18922.jpg',
        small_image_url: 'https://cdn.myanimelist.net/images/anime/8/18922t.jpg',
        large_image_url: 'https://cdn.myanimelist.net/images/anime/8/18922l.jpg',
      },
      webp: {
        image_url: 'https://cdn.myanimelist.net/images/anime/8/18922.webp',
        small_image_url: 'https://cdn.myanimelist.net/images/anime/8/18922t.webp',
        large_image_url: 'https://cdn.myanimelist.net/images/anime/8/18922l.webp',
      },
    },
    trailer: {
      youtube_id: null,
      url: null,
      embed_url: null,
      images: {
        image_url: null,
        small_image_url: null,
        medium_image_url: null,
        large_image_url: null,
        maximum_image_url: null,
      },
    },
    approved: true,
    titles: [
      {
        type: 'Default',
        title: 'NieA Under 7',
      },
      {
        type: 'Synonym',
        title: 'NieA_7',
      },
      {
        type: 'Japanese',
        title: 'ニア アンダーセブン',
      },
      {
        type: 'French',
        title: 'NieA under 7',
      },
    ],
    title: 'NieA Under 7',
    title_english: null,
    title_japanese: 'ニア アンダーセブン',
    title_synonyms: ['NieA_7'],
    type: 'TV',
    source: 'Manga',
    episodes: 13,
    status: 'Finished Airing',
    airing: false,
    aired: {
      from: '2000-04-26T00:00:00+00:00',
      to: '2000-07-19T00:00:00+00:00',
      prop: {
        from: {
          day: 26,
          month: 4,
          year: 2000,
        },
        to: {
          day: 19,
          month: 7,
          year: 2000,
        },
      },
      string: 'Apr 26, 2000 to Jul 19, 2000',
    },
    duration: '23 min per ep',
    rating: 'PG-13 - Teens 13 or older',
    score: 6.87,
    scored_by: 10474,
    rank: 4711,
    popularity: 3546,
    members: 37084,
    favorites: 178,
    synopsis:
      'In the 21st century, aliens have arrived on Earth and live among humans. In sleepy Enohana, the dirt-poor student Chigasaki Mayuko finds herself living together with NieA, a low-caste ("Under Seven") alien. While Mayuko struggles diligently to make ends meet, NieA seems to be totally unconcerned with the consequences of her actions. As the odd couple throws off the expected sparks, the wrecked alien mothership looms in the background... \n\n(Source: ANN)',
    background: null,
    season: 'spring',
    year: 2000,
    broadcast: {
      day: 'Wednesdays',
      time: '18:30',
      timezone: 'Asia/Tokyo',
      string: 'Wednesdays at 18:30 (JST)',
    },
    producers: [
      {
        mal_id: 79,
        type: 'anime',
        name: 'Genco',
        url: 'https://myanimelist.net/anime/producer/79/Genco',
      },
      {
        mal_id: 113,
        type: 'anime',
        name: 'Kadokawa Shoten',
        url: 'https://myanimelist.net/anime/producer/113/Kadokawa_Shoten',
      },
      {
        mal_id: 204,
        type: 'anime',
        name: 'Pioneer LDC',
        url: 'https://myanimelist.net/anime/producer/204/Pioneer_LDC',
      },
    ],
    licensors: [
      {
        mal_id: 467,
        type: 'anime',
        name: 'Discotek Media',
        url: 'https://myanimelist.net/anime/producer/467/Discotek_Media',
      },
      {
        mal_id: 1459,
        type: 'anime',
        name: 'Geneon Entertainment USA',
        url: 'https://myanimelist.net/anime/producer/1459/Geneon_Entertainment_USA',
      },
    ],
    studios: [
      {
        mal_id: 110,
        type: 'anime',
        name: 'Triangle Staff',
        url: 'https://myanimelist.net/anime/producer/110/Triangle_Staff',
      },
    ],
    genres: [
      {
        mal_id: 24,
        type: 'anime',
        name: 'Sci-Fi',
        url: 'https://myanimelist.net/anime/genre/24/Sci-Fi',
      },
      {
        mal_id: 36,
        type: 'anime',
        name: 'Slice of Life',
        url: 'https://myanimelist.net/anime/genre/36/Slice_of_Life',
      },
    ],
    explicit_genres: [],
    themes: [
      {
        mal_id: 63,
        type: 'anime',
        name: 'Iyashikei',
        url: 'https://myanimelist.net/anime/genre/63/Iyashikei',
      },
    ],
    demographics: [
      {
        mal_id: 27,
        type: 'anime',
        name: 'Shounen',
        url: 'https://myanimelist.net/anime/genre/27/Shounen',
      },
    ],
  },
  {
    mal_id: 801,
    url: 'https://myanimelist.net/anime/801/Koukaku_Kidoutai__Stand_Alone_Complex_2nd_GIG',
    images: {
      jpg: {
        image_url: 'https://cdn.myanimelist.net/images/anime/1646/135390.jpg',
        small_image_url: 'https://cdn.myanimelist.net/images/anime/1646/135390t.jpg',
        large_image_url: 'https://cdn.myanimelist.net/images/anime/1646/135390l.jpg',
      },
      webp: {
        image_url: 'https://cdn.myanimelist.net/images/anime/1646/135390.webp',
        small_image_url: 'https://cdn.myanimelist.net/images/anime/1646/135390t.webp',
        large_image_url: 'https://cdn.myanimelist.net/images/anime/1646/135390l.webp',
      },
    },
    trailer: {
      youtube_id: 'D522fRIFfhI',
      url: 'https://www.youtube.com/watch?v=D522fRIFfhI',
      embed_url: 'https://www.youtube.com/embed/D522fRIFfhI?enablejsapi=1&wmode=opaque&autoplay=1',
      images: {
        image_url: 'https://img.youtube.com/vi/D522fRIFfhI/default.jpg',
        small_image_url: 'https://img.youtube.com/vi/D522fRIFfhI/sddefault.jpg',
        medium_image_url: 'https://img.youtube.com/vi/D522fRIFfhI/mqdefault.jpg',
        large_image_url: 'https://img.youtube.com/vi/D522fRIFfhI/hqdefault.jpg',
        maximum_image_url: 'https://img.youtube.com/vi/D522fRIFfhI/maxresdefault.jpg',
      },
    },
    approved: true,
    titles: [
      {
        type: 'Default',
        title: 'Koukaku Kidoutai: Stand Alone Complex 2nd GIG',
      },
      {
        type: 'Synonym',
        title: 'Ghost In The Shell S.A.C. 2nd GIG',
      },
      {
        type: 'Japanese',
        title: '攻殻機動隊 S.A.C. 2nd GIG',
      },
      {
        type: 'English',
        title: 'Ghost in the Shell: Stand Alone Complex 2nd GIG',
      },
      {
        type: 'German',
        title: 'Ghost in the Shell: Stand Alone Complex 2nd GIG',
      },
      {
        type: 'Spanish',
        title: 'Ghost in the Shell: Stand Alone Complex 2nd GIG',
      },
      {
        type: 'French',
        title: 'Ghost in the Shell: Stand Alone Complex 2nd GIG',
      },
    ],
    title: 'Koukaku Kidoutai: Stand Alone Complex 2nd GIG',
    title_english: 'Ghost in the Shell: Stand Alone Complex 2nd GIG',
    title_japanese: '攻殻機動隊 S.A.C. 2nd GIG',
    title_synonyms: ['Ghost In The Shell S.A.C. 2nd GIG'],
    type: 'TV',
    source: 'Manga',
    episodes: 26,
    status: 'Finished Airing',
    airing: false,
    aired: {
      from: '2004-01-01T00:00:00+00:00',
      to: '2005-01-08T00:00:00+00:00',
      prop: {
        from: {
          day: 1,
          month: 1,
          year: 2004,
        },
        to: {
          day: 8,
          month: 1,
          year: 2005,
        },
      },
      string: 'Jan 1, 2004 to Jan 8, 2005',
    },
    duration: '25 min per ep',
    rating: 'R - 17+ (violence & profanity)',
    score: 8.52,
    scored_by: 102733,
    rank: 122,
    popularity: 1040,
    members: 223703,
    favorites: 3131,
    synopsis:
      'Following the closure of the "Laughing Man" case, Section 9 is re-established by Japan\'s newly elected Prime Minister, Youko Kayabuki, to combat the persistent threat of cyber-terrorism.\n\nA group calling themselves "The Individual Eleven" has begun committing acts of terror across Japan. While Motoko Kusanagi, Daisuke Aramaki, Batou, and the other members of Section 9 investigate this new menace, the Japanese government faces a separate crisis, as foreign refugees displaced by the Third World War seek asylum in Japan. But as the members of the special-ops team continually encounter Gouda Kazundo—a leading member of the Cabinet Intelligence Service—in their hunt, they begin to suspect that he may be involved, and that the events of the refugee crisis and The Individual Eleven may be more connected than they realize...\n\n[Written by MAL Rewrite]',
    background: null,
    season: 'winter',
    year: 2004,
    broadcast: {
      day: null,
      time: null,
      timezone: null,
      string: 'Unknown',
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
        mal_id: 159,
        type: 'anime',
        name: 'Kodansha',
        url: 'https://myanimelist.net/anime/producer/159/Kodansha',
      },
      {
        mal_id: 382,
        type: 'anime',
        name: 'Tokuma Shoten',
        url: 'https://myanimelist.net/anime/producer/382/Tokuma_Shoten',
      },
      {
        mal_id: 1003,
        type: 'anime',
        name: 'Nippon Television Network',
        url: 'https://myanimelist.net/anime/producer/1003/Nippon_Television_Network',
      },
    ],
    licensors: [
      {
        mal_id: 233,
        type: 'anime',
        name: 'Bandai Entertainment',
        url: 'https://myanimelist.net/anime/producer/233/Bandai_Entertainment',
      },
      {
        mal_id: 947,
        type: 'anime',
        name: 'Manga Entertainment',
        url: 'https://myanimelist.net/anime/producer/947/Manga_Entertainment',
      },
    ],
    studios: [
      {
        mal_id: 10,
        type: 'anime',
        name: 'Production I.G',
        url: 'https://myanimelist.net/anime/producer/10/Production_IG',
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
        mal_id: 7,
        type: 'anime',
        name: 'Mystery',
        url: 'https://myanimelist.net/anime/genre/7/Mystery',
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
        mal_id: 39,
        type: 'anime',
        name: 'Detective',
        url: 'https://myanimelist.net/anime/genre/39/Detective',
      },
      {
        mal_id: 18,
        type: 'anime',
        name: 'Mecha',
        url: 'https://myanimelist.net/anime/genre/18/Mecha',
      },
      {
        mal_id: 38,
        type: 'anime',
        name: 'Military',
        url: 'https://myanimelist.net/anime/genre/38/Military',
      },
    ],
    demographics: [
      {
        mal_id: 42,
        type: 'anime',
        name: 'Seinen',
        url: 'https://myanimelist.net/anime/genre/42/Seinen',
      },
    ],
  },
  {
    mal_id: 999,
    url: 'https://myanimelist.net/anime/999/Blue_Seed_2',
    images: {
      jpg: {
        image_url: 'https://cdn.myanimelist.net/images/anime/7/2871.jpg',
        small_image_url: 'https://cdn.myanimelist.net/images/anime/7/2871t.jpg',
        large_image_url: 'https://cdn.myanimelist.net/images/anime/7/2871l.jpg',
      },
      webp: {
        image_url: 'https://cdn.myanimelist.net/images/anime/7/2871.webp',
        small_image_url: 'https://cdn.myanimelist.net/images/anime/7/2871t.webp',
        large_image_url: 'https://cdn.myanimelist.net/images/anime/7/2871l.webp',
      },
    },
    trailer: {
      youtube_id: null,
      url: null,
      embed_url: null,
      images: {
        image_url: null,
        small_image_url: null,
        medium_image_url: null,
        large_image_url: null,
        maximum_image_url: null,
      },
    },
    approved: true,
    titles: [
      {
        type: 'Default',
        title: 'Blue Seed 2',
      },
      {
        type: 'Synonym',
        title: 'Blue Seed 2: Operation Mitama',
      },
      {
        type: 'Synonym',
        title: 'Blue Seed OVA',
      },
      {
        type: 'Japanese',
        title: 'ブルーシード 2',
      },
      {
        type: 'English',
        title: 'Blue Seed Beyond',
      },
      {
        type: 'French',
        title: 'Blue Seed Beyond',
      },
    ],
    title: 'Blue Seed 2',
    title_english: 'Blue Seed Beyond',
    title_japanese: 'ブルーシード 2',
    title_synonyms: ['Blue Seed 2: Operation Mitama', 'Blue Seed OVA'],
    type: 'OVA',
    source: 'Manga',
    episodes: 3,
    status: 'Finished Airing',
    airing: false,
    aired: {
      from: '1996-07-24T00:00:00+00:00',
      to: '1998-02-04T00:00:00+00:00',
      prop: {
        from: {
          day: 24,
          month: 7,
          year: 1996,
        },
        to: {
          day: 4,
          month: 2,
          year: 1998,
        },
      },
      string: 'Jul 24, 1996 to Feb 4, 1998',
    },
    duration: '28 min per ep',
    rating: 'R - 17+ (violence & profanity)',
    score: 6.4,
    scored_by: 2748,
    rank: 7173,
    popularity: 7249,
    members: 6752,
    favorites: 1,
    synopsis:
      'A renegade scientist in San Francisco has found a way to create a new creature called a Neo-Aragami without the power of Susanoo. When these monsters start to terrorize California, the U.S. turns to the old members of the Terrestrial Administration Center (TAC) for help. \n\n(Source: ANN)',
    background: null,
    season: null,
    year: null,
    broadcast: {
      day: null,
      time: null,
      timezone: null,
      string: null,
    },
    producers: [
      {
        mal_id: 166,
        type: 'anime',
        name: 'Movic',
        url: 'https://myanimelist.net/anime/producer/166/Movic',
      },
      {
        mal_id: 469,
        type: 'anime',
        name: 'ING',
        url: 'https://myanimelist.net/anime/producer/469/ING',
      },
      {
        mal_id: 1344,
        type: 'anime',
        name: 'King Records',
        url: 'https://myanimelist.net/anime/producer/1344/King_Records',
      },
    ],
    licensors: [
      {
        mal_id: 97,
        type: 'anime',
        name: 'ADV Films',
        url: 'https://myanimelist.net/anime/producer/97/ADV_Films',
      },
      {
        mal_id: 467,
        type: 'anime',
        name: 'Discotek Media',
        url: 'https://myanimelist.net/anime/producer/467/Discotek_Media',
      },
    ],
    studios: [
      {
        mal_id: 10,
        type: 'anime',
        name: 'Production I.G',
        url: 'https://myanimelist.net/anime/producer/10/Production_IG',
      },
      {
        mal_id: 27,
        type: 'anime',
        name: 'Xebec',
        url: 'https://myanimelist.net/anime/producer/27/Xebec',
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
        mal_id: 8,
        type: 'anime',
        name: 'Drama',
        url: 'https://myanimelist.net/anime/genre/8/Drama',
      },
      {
        mal_id: 14,
        type: 'anime',
        name: 'Horror',
        url: 'https://myanimelist.net/anime/genre/14/Horror',
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
        mal_id: 6,
        type: 'anime',
        name: 'Mythology',
        url: 'https://myanimelist.net/anime/genre/6/Mythology',
      },
    ],
    demographics: [
      {
        mal_id: 42,
        type: 'anime',
        name: 'Seinen',
        url: 'https://myanimelist.net/anime/genre/42/Seinen',
      },
    ],
  },
  {
    mal_id: 1000,
    url: 'https://myanimelist.net/anime/1000/Uchuu_Kaizoku_Captain_Herlock',
    images: {
      jpg: {
        image_url: 'https://cdn.myanimelist.net/images/anime/1362/90305.jpg',
        small_image_url: 'https://cdn.myanimelist.net/images/anime/1362/90305t.jpg',
        large_image_url: 'https://cdn.myanimelist.net/images/anime/1362/90305l.jpg',
      },
      webp: {
        image_url: 'https://cdn.myanimelist.net/images/anime/1362/90305.webp',
        small_image_url: 'https://cdn.myanimelist.net/images/anime/1362/90305t.webp',
        large_image_url: 'https://cdn.myanimelist.net/images/anime/1362/90305l.webp',
      },
    },
    trailer: {
      youtube_id: null,
      url: null,
      embed_url: null,
      images: {
        image_url: null,
        small_image_url: null,
        medium_image_url: null,
        large_image_url: null,
        maximum_image_url: null,
      },
    },
    approved: true,
    titles: [
      {
        type: 'Default',
        title: 'Uchuu Kaizoku Captain Herlock',
      },
      {
        type: 'Synonym',
        title: 'Harlock TV',
      },
      {
        type: 'Synonym',
        title: 'Albator 78',
      },
      {
        type: 'Japanese',
        title: '宇宙海賊・キャプテンハーロック',
      },
      {
        type: 'English',
        title: 'Space Pirate Captain Harlock',
      },
      {
        type: 'German',
        title: 'Captain Harlock',
      },
      {
        type: 'French',
        title: 'Captain Herlock',
      },
    ],
    title: 'Uchuu Kaizoku Captain Herlock',
    title_english: 'Space Pirate Captain Harlock',
    title_japanese: '宇宙海賊・キャプテンハーロック',
    title_synonyms: ['Harlock TV', 'Albator 78'],
    type: 'TV',
    source: 'Manga',
    episodes: 42,
    status: 'Finished Airing',
    airing: false,
    aired: {
      from: '1978-03-14T00:00:00+00:00',
      to: '1979-02-13T00:00:00+00:00',
      prop: {
        from: {
          day: 14,
          month: 3,
          year: 1978,
        },
        to: {
          day: 13,
          month: 2,
          year: 1979,
        },
      },
      string: 'Mar 14, 1978 to Feb 13, 1979',
    },
    duration: '25 min per ep',
    rating: 'PG-13 - Teens 13 or older',
    score: 7.7,
    scored_by: 10511,
    rank: 1185,
    popularity: 3558,
    members: 36856,
    favorites: 329,
    synopsis:
      'It is 2977 AD and mankind has become stagnant. Robots do all the work, the masses are kept tranquil by subliminal messages, and government officials are lazy, caring only about recreational activities like golf and horse racing. Captain Herlock has defied this insipid mentality, leading a group of like-minded rebels to a more adventurous life aboard the spaceship Arcadia.\n \nA mysterious force known as the Mazone has invaded the Earth, taking the form of mysterious cloaked women that kill anyone who suspect their nefarious doings, such as Tadashi Daiba who is now on their hit-list. After his scientist father is ignored by the government and killed by the Mazone, he joins Captain Herlock and his ragtag group of pirates to assist them as they try to save humanity from the impending alien threat.\n\n[Written by MAL Rewrite]',
    background: null,
    season: 'spring',
    year: 1978,
    broadcast: {
      day: null,
      time: null,
      timezone: null,
      string: 'Tuesdays at Unknown',
    },
    producers: [
      {
        mal_id: 55,
        type: 'anime',
        name: 'TV Asahi',
        url: 'https://myanimelist.net/anime/producer/55/TV_Asahi',
      },
      {
        mal_id: 2278,
        type: 'anime',
        name: 'Harmony Gold',
        url: 'https://myanimelist.net/anime/producer/2278/Harmony_Gold',
      },
    ],
    licensors: [
      {
        mal_id: 467,
        type: 'anime',
        name: 'Discotek Media',
        url: 'https://myanimelist.net/anime/producer/467/Discotek_Media',
      },
    ],
    studios: [
      {
        mal_id: 18,
        type: 'anime',
        name: 'Toei Animation',
        url: 'https://myanimelist.net/anime/producer/18/Toei_Animation',
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
        mal_id: 8,
        type: 'anime',
        name: 'Drama',
        url: 'https://myanimelist.net/anime/genre/8/Drama',
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
        mal_id: 29,
        type: 'anime',
        name: 'Space',
        url: 'https://myanimelist.net/anime/genre/29/Space',
      },
    ],
    demographics: [
      {
        mal_id: 42,
        type: 'anime',
        name: 'Seinen',
        url: 'https://myanimelist.net/anime/genre/42/Seinen',
      },
    ],
  },
  {
    mal_id: 1001,
    url: 'https://myanimelist.net/anime/1001/Tide-Line_Blue__Kyoudai',
    images: {
      jpg: {
        image_url: 'https://cdn.myanimelist.net/images/anime/3/21407.jpg',
        small_image_url: 'https://cdn.myanimelist.net/images/anime/3/21407t.jpg',
        large_image_url: 'https://cdn.myanimelist.net/images/anime/3/21407l.jpg',
      },
      webp: {
        image_url: 'https://cdn.myanimelist.net/images/anime/3/21407.webp',
        small_image_url: 'https://cdn.myanimelist.net/images/anime/3/21407t.webp',
        large_image_url: 'https://cdn.myanimelist.net/images/anime/3/21407l.webp',
      },
    },
    trailer: {
      youtube_id: null,
      url: null,
      embed_url: null,
      images: {
        image_url: null,
        small_image_url: null,
        medium_image_url: null,
        large_image_url: null,
        maximum_image_url: null,
      },
    },
    approved: true,
    titles: [
      {
        type: 'Default',
        title: 'Tide-Line Blue: Kyoudai',
      },
      {
        type: 'Synonym',
        title: 'Tide-Line Blue Special',
      },
      {
        type: 'Synonym',
        title: 'Tide-Line Blue Episode 13',
      },
      {
        type: 'Synonym',
        title: 'Tide-Line Blue: Brother',
      },
      {
        type: 'Japanese',
        title: 'タイドライン・ブルー 兄弟',
      },
    ],
    title: 'Tide-Line Blue: Kyoudai',
    title_english: null,
    title_japanese: 'タイドライン・ブルー 兄弟',
    title_synonyms: [
      'Tide-Line Blue Special',
      'Tide-Line Blue Episode 13',
      'Tide-Line Blue: Brother',
    ],
    type: 'Special',
    source: 'Original',
    episodes: 1,
    status: 'Finished Airing',
    airing: false,
    aired: {
      from: '2006-04-26T00:00:00+00:00',
      to: null,
      prop: {
        from: {
          day: 26,
          month: 4,
          year: 2006,
        },
        to: {
          day: null,
          month: null,
          year: null,
        },
      },
      string: 'Apr 26, 2006',
    },
    duration: '23 min',
    rating: 'PG-13 - Teens 13 or older',
    score: 6.56,
    scored_by: 894,
    rank: 6283,
    popularity: 10939,
    members: 1990,
    favorites: 1,
    synopsis:
      'DVD only 13th episode of the series.\n\nGould and Keel work together with the New United Nations and the crew of the last remaining space station "Freedom" (their father) to broadcast a powerful signal all over the world with the new world map for everyone to be available. The episode ends with both of them looking over the horizon, as we see Freedom station falling to earth’s orbit as a shooting star.',
    background: null,
    season: null,
    year: null,
    broadcast: {
      day: null,
      time: null,
      timezone: null,
      string: null,
    },
    producers: [
      {
        mal_id: 23,
        type: 'anime',
        name: 'Bandai Visual',
        url: 'https://myanimelist.net/anime/producer/23/Bandai_Visual',
      },
      {
        mal_id: 55,
        type: 'anime',
        name: 'TV Asahi',
        url: 'https://myanimelist.net/anime/producer/55/TV_Asahi',
      },
      {
        mal_id: 104,
        type: 'anime',
        name: 'Lantis',
        url: 'https://myanimelist.net/anime/producer/104/Lantis',
      },
    ],
    licensors: [
      {
        mal_id: 233,
        type: 'anime',
        name: 'Bandai Entertainment',
        url: 'https://myanimelist.net/anime/producer/233/Bandai_Entertainment',
      },
    ],
    studios: [
      {
        mal_id: 94,
        type: 'anime',
        name: 'Telecom Animation Film',
        url: 'https://myanimelist.net/anime/producer/94/Telecom_Animation_Film',
      },
    ],
    genres: [
      {
        mal_id: 2,
        type: 'anime',
        name: 'Adventure',
        url: 'https://myanimelist.net/anime/genre/2/Adventure',
      },
      {
        mal_id: 8,
        type: 'anime',
        name: 'Drama',
        url: 'https://myanimelist.net/anime/genre/8/Drama',
      },
    ],
    explicit_genres: [],
    themes: [],
    demographics: [],
  },
  {
    mal_id: 1002,
    url: 'https://myanimelist.net/anime/1002/Top_wo_Nerae_2_Diebuster',
    images: {
      jpg: {
        image_url: 'https://cdn.myanimelist.net/images/anime/7/50475.jpg',
        small_image_url: 'https://cdn.myanimelist.net/images/anime/7/50475t.jpg',
        large_image_url: 'https://cdn.myanimelist.net/images/anime/7/50475l.jpg',
      },
      webp: {
        image_url: 'https://cdn.myanimelist.net/images/anime/7/50475.webp',
        small_image_url: 'https://cdn.myanimelist.net/images/anime/7/50475t.webp',
        large_image_url: 'https://cdn.myanimelist.net/images/anime/7/50475l.webp',
      },
    },
    trailer: {
      youtube_id: null,
      url: null,
      embed_url: null,
      images: {
        image_url: null,
        small_image_url: null,
        medium_image_url: null,
        large_image_url: null,
        maximum_image_url: null,
      },
    },
    approved: true,
    titles: [
      {
        type: 'Default',
        title: 'Top wo Nerae 2! Diebuster',
      },
      {
        type: 'Synonym',
        title: 'Aim for the Top! 2',
      },
      {
        type: 'Synonym',
        title: 'DieBuster',
      },
      {
        type: 'Japanese',
        title: 'トップをねらえ2！DIEBUSTER',
      },
      {
        type: 'English',
        title: 'Gunbuster 2',
      },
    ],
    title: 'Top wo Nerae 2! Diebuster',
    title_english: 'Gunbuster 2',
    title_japanese: 'トップをねらえ2！DIEBUSTER',
    title_synonyms: ['Aim for the Top! 2', 'DieBuster'],
    type: 'OVA',
    source: 'Original',
    episodes: 6,
    status: 'Finished Airing',
    airing: false,
    aired: {
      from: '2004-10-03T00:00:00+00:00',
      to: '2006-08-25T00:00:00+00:00',
      prop: {
        from: {
          day: 3,
          month: 10,
          year: 2004,
        },
        to: {
          day: 25,
          month: 8,
          year: 2006,
        },
      },
      string: 'Oct 3, 2004 to Aug 25, 2006',
    },
    duration: '30 min per ep',
    rating: 'R+ - Mild Nudity',
    score: 7.62,
    scored_by: 35796,
    rank: 1365,
    popularity: 2363,
    members: 76815,
    favorites: 859,
    synopsis:
      'Generations have passed since the war with the Space Monsters started, and none remain who know how it began, with even records of those times being scarce. It is a lost cause, but humanity still fights against them, relying on the "Topless": a group of elite space pilots with special powers that allow them to use the Buster Machines—the last hope against the Space Monsters.  \n\nNono, a girl from a remote Martian town, has heard tales all her life of the legendary pilot "Nono-Riri," and wants nothing more than to leave her humble life behind and follow in the footsteps of her idol. Though she has no idea of the dangers that lie ahead, nothing will stop her from achieving her dream. While Nono is down on her luck, she chances upon the lonesome Topless pilot Lal\'C Melk Mark, and decides to stake her entire future on following Lal\'C, no matter the cost.\n\n[Written by MAL Rewrite]',
    background:
      'Top wo Nerae 2! Diebuster won the Packaged Work Award at the 2005 Animation Kobe Awards.',
    season: null,
    year: null,
    broadcast: {
      day: null,
      time: null,
      timezone: null,
      string: null,
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
        mal_id: 467,
        type: 'anime',
        name: 'Discotek Media',
        url: 'https://myanimelist.net/anime/producer/467/Discotek_Media',
      },
      {
        mal_id: 1466,
        type: 'anime',
        name: 'Bandai Visual USA',
        url: 'https://myanimelist.net/anime/producer/1466/Bandai_Visual_USA',
      },
    ],
    studios: [
      {
        mal_id: 6,
        type: 'anime',
        name: 'Gainax',
        url: 'https://myanimelist.net/anime/producer/6/Gainax',
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
        mal_id: 4,
        type: 'anime',
        name: 'Comedy',
        url: 'https://myanimelist.net/anime/genre/4/Comedy',
      },
      {
        mal_id: 8,
        type: 'anime',
        name: 'Drama',
        url: 'https://myanimelist.net/anime/genre/8/Drama',
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
        mal_id: 18,
        type: 'anime',
        name: 'Mecha',
        url: 'https://myanimelist.net/anime/genre/18/Mecha',
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
    mal_id: 1003,
    url: 'https://myanimelist.net/anime/1003/Aa_Megami-sama_TV_Specials',
    images: {
      jpg: {
        image_url: 'https://cdn.myanimelist.net/images/anime/2/17893.jpg',
        small_image_url: 'https://cdn.myanimelist.net/images/anime/2/17893t.jpg',
        large_image_url: 'https://cdn.myanimelist.net/images/anime/2/17893l.jpg',
      },
      webp: {
        image_url: 'https://cdn.myanimelist.net/images/anime/2/17893.webp',
        small_image_url: 'https://cdn.myanimelist.net/images/anime/2/17893t.webp',
        large_image_url: 'https://cdn.myanimelist.net/images/anime/2/17893l.webp',
      },
    },
    trailer: {
      youtube_id: null,
      url: null,
      embed_url: null,
      images: {
        image_url: null,
        small_image_url: null,
        medium_image_url: null,
        large_image_url: null,
        maximum_image_url: null,
      },
    },
    approved: true,
    titles: [
      {
        type: 'Default',
        title: 'Aa! Megami-sama! (TV) Specials',
      },
      {
        type: 'Synonym',
        title: 'Aa! Megami-sama! Episodes 12.5',
      },
      {
        type: 'Synonym',
        title: '25 and 26',
      },
      {
        type: 'Synonym',
        title: 'Oh! My Goddess Specials',
      },
      {
        type: 'Japanese',
        title: 'ああっ女神さまっ',
      },
      {
        type: 'English',
        title: 'Ah! My Goddess Specials',
      },
      {
        type: 'German',
        title: 'Oh! My Goddess',
      },
    ],
    title: 'Aa! Megami-sama! (TV) Specials',
    title_english: 'Ah! My Goddess Specials',
    title_japanese: 'ああっ女神さまっ',
    title_synonyms: ['Aa! Megami-sama! Episodes 12.5', '25 and 26', 'Oh! My Goddess Specials'],
    type: 'Special',
    source: 'Manga',
    episodes: 3,
    status: 'Finished Airing',
    airing: false,
    aired: {
      from: '2005-04-01T00:00:00+00:00',
      to: '2005-12-23T00:00:00+00:00',
      prop: {
        from: {
          day: 1,
          month: 4,
          year: 2005,
        },
        to: {
          day: 23,
          month: 12,
          year: 2005,
        },
      },
      string: 'Apr 1, 2005 to Dec 23, 2005',
    },
    duration: '24 min per ep',
    rating: 'PG-13 - Teens 13 or older',
    score: 7.51,
    scored_by: 14264,
    rank: 1738,
    popularity: 4120,
    members: 26978,
    favorites: 43,
    synopsis:
      'Due to the recent events that happened on the last episodes of the season, the Goddess have some stability problems with their body systems. The always adult looking Urd becomes a little girl and has a fateful encounter with a boy, whereas little Skuld becomes an adult and wants to experiment adulthood together with Keiichi.',
    background: null,
    season: null,
    year: null,
    broadcast: {
      day: null,
      time: null,
      timezone: null,
      string: null,
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
        mal_id: 250,
        type: 'anime',
        name: 'Media Blasters',
        url: 'https://myanimelist.net/anime/producer/250/Media_Blasters',
      },
      {
        mal_id: 595,
        type: 'anime',
        name: 'NYAV Post',
        url: 'https://myanimelist.net/anime/producer/595/NYAV_Post',
      },
    ],
    studios: [
      {
        mal_id: 48,
        type: 'anime',
        name: 'AIC',
        url: 'https://myanimelist.net/anime/producer/48/AIC',
      },
    ],
    genres: [
      {
        mal_id: 4,
        type: 'anime',
        name: 'Comedy',
        url: 'https://myanimelist.net/anime/genre/4/Comedy',
      },
      {
        mal_id: 22,
        type: 'anime',
        name: 'Romance',
        url: 'https://myanimelist.net/anime/genre/22/Romance',
      },
      {
        mal_id: 37,
        type: 'anime',
        name: 'Supernatural',
        url: 'https://myanimelist.net/anime/genre/37/Supernatural',
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

export const handlers = [
  http.get(BASE_URL, ({ request }) => {
    const url = new URL(request.url);
    const pageParam = url.searchParams.get('page');
    const limitParam = url.searchParams.get('limit');

    if (pageParam?.length && limitParam?.length) {
      return HttpResponse.json<SearchResponseInterface>({
        data,
        pagination: {
          last_visible_page: 2,
          has_next_page: false,
          current_page: 2,
          items: {
            count: 10,
            total: 10,
            per_page: 10,
          },
        },
      });
    }

    return HttpResponse.json<SearchResponseInterface>({
      data,
      pagination: {
        last_visible_page: 1,
        has_next_page: false,
        current_page: 1,
        items: {
          count: 25,
          total: 25,
          per_page: 25,
        },
      },
    });
  }),

  http.get(`1`, ({ request }) => {
    const url = new URL(request.url);
    const detailsParam = url.searchParams.get('details');

    if (detailsParam?.length) {
      return HttpResponse.json<CharacterInterface>({
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
          embed_url:
            'https://www.youtube.com/embed/gY5nDXOtv_o?enablejsapi=1&wmode=opaque&autoplay=1',
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
      });
    }
    return new HttpResponse(null, { status: 404 });
  }),
];
