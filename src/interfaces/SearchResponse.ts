export interface SearchResponseInterface {
  info: SearchInfoInterface;
  results: Array<CharacterInterface>;
}

export interface SearchInfoInterface {
  count: number;
  next: string | null;
  pages: number;
  prev: string | null;
}

export interface CharacterInterface {
  id: number;
  name: string;
  status: string;
  species: string;
  type: string;
  gender: string;
  origin: LinkInterface;
  location: LinkInterface;
  image: string;
  episode: Array<string>;
  url: string;
  created: string;
}

interface LinkInterface {
  name: string;
  url: string;
}
