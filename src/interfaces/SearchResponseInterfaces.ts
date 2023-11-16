export interface SearchResponseInterface {
  data: Array<CharacterInterface>;
  pagination: PaginationInterface | null;
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
  title_english: string | null;
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
  rank: number | null;
  popularity: number;
  members: number;
  favorites: number;
  synopsis: string;
  background: string | null;
  season: string | null;
  year: number | null;
  broadcast: {
    day: string | null;
    time: string | null;
    timezone: string | null;
    string: string | null;
  };
  producers: Array<AuthorsInterface>;
  licensors: Array<AuthorsInterface>;
  studios: Array<AuthorsInterface>;
  genres: Array<AuthorsInterface>;
  explicit_genres: Array<AuthorsInterface> | never[];
  themes: Array<AuthorsInterface> | never[];
  demographics: Array<AuthorsInterface> | never[];
}

interface ImagesInterface {
  image_url: string;
  small_image_url: string;
  large_image_url: string;
}

interface AiredInterface {
  from: string;
  to: string | null;
  prop: {
    from: DateInterface | null;
    to: DateInterface | null;
  };
  string: string;
}

interface TrailerInterface {
  youtube_id: string | null;
  url: string | null;
  embed_url: string | null;
}

interface TitleInterface {
  type: string;
  title: string;
}

interface DateInterface {
  day: number | null;
  month: number | null;
  year: number | null;
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
  current_page: number;
  items: PaginationItems;
}

interface PaginationItems {
  count: number;
  total: number;
  per_page: number;
}
