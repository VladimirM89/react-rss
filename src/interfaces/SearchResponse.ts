export interface SearchResponseInterface {
  data: Array<CharacterInterface>;
  pagination: PaginationInterface;
}

export interface CharacterResponseInterface {
  data: CharacterInterface;
}

export interface CharacterInterface {
  mal_id: number;
  url: string;
  images: {
    jpg: ImagesInterface;
    webp: ImagesInterface;
  };
  trailer: TrailerInterface;
  approved: boolean;
  titles: Array<TitleInterface>;
  title: string;
  title_english: string;
  title_japanese: string;
  title_synonyms: Array<string>;
  type: string;
  source: string;
  episodes: number;
  status: string;
  airing: boolean;
  aired: AiredInterface;
  duration: string;
  rating: string;
  score: number;
  scored_by: number;
  rank: number;
  popularity: number;
  members: number;
  favorites: number;
  synopsis: string;
  background: string;
  season: string;
  year: number;
  broadcast: {
    day: string;
    time: string;
    timezone: string;
    string: string;
  };
  producers: Array<AuthorsInterface>;
  licensors: Array<AuthorsInterface>;
  studios: Array<AuthorsInterface>;
  genres: Array<AuthorsInterface>;
  explicit_genres: Array<AuthorsInterface>;
  themes: Array<AuthorsInterface>;
  demographics: Array<AuthorsInterface>;
}

interface ImagesInterface {
  image_url: string;
  small_image_url: string;
  large_image_url: string;
}

interface AiredInterface {
  from: string;
  to: string;
  prop: {
    from: DateInterface;
    to: DateInterface;
    string: string;
  };
}

interface TrailerInterface {
  youtube_id: string;
  url: string;
  embed_url: string;
}

interface TitleInterface {
  type: string;
  title: string;
}

interface DateInterface {
  day: number;
  month: number;
  year: number;
}

interface AuthorsInterface {
  mal_id: number;
  type: string;
  name: string;
  url: string;
}
export interface PaginationInterface {
  last_visible_page: number;
  has_next_page: boolean;
  items: PaginationItems;
}

interface PaginationItems {
  count: number;
  total: number;
  per_page: number;
}
