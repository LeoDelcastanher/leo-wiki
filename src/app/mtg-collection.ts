export interface MtgCollection {
  code: string;
  name: string;
  set: string;
  wtfLink: string;
  imgId: number;
  missingCards: MissingCard[];
  color: ('white' | 'green' | 'blue' | 'black' | 'red' | 'artifact')[];
  guide: string;
}

interface MissingCard {
  name: string;
  qtd: number;
  imgId: number;
}
