export interface MtgCollection {
  code: string;
  name: string;
  set: string;
  wtfLink: string;
  imgId: number;
  missingCards: MissingCard[];
  color: ('white' | 'green' | 'blue' | 'black' | 'red' | 'artifact')[];
  guide: string;
  setInfo?: Expansion;
}

interface MissingCard {
  name: string;
  qtd: number;
  imgId: number;
}

export interface Expansion {
  name: string;
  code: string;
  date: string;
  link: string;
}

export interface Expansions {
  [key: string]: Expansion;
}
