export type FaqsType = {
  id: number,
  question: string,
  answer: string,
}

export type Comic = {
  id: number;
  digitalId: number;
  title: string;
  issueNumber: number;
  variantDescription: string;
  description: string | null;
  modified: string;
  isbn: string;
  upc: string;
  diamondCode: string;
  ean: string;
  issn: string;
  format: string;
  pageCount: number;
  textObjects: any[]; // You may want to replace 'any' with a specific type if you know the structure.
  resourceURI: string;
  urls: { type: string; url: string }[];
  series: {
    resourceURI: string;
    name: string;
  };
  variants: { resourceURI: string; name: string }[];
  collections: any[]; // You may want to replace 'any' with a specific type if you know the structure.
  collectedIssues: any[]; // You may want to replace 'any' with a specific type if you know the structure.
  dates: { type: string; date: string }[];
  prices: { type: string; price: number }[];
  thumbnail: {
    path: string;
    extension: string;
  };
  images: any[]; // You may want to replace 'any' with a specific type if you know the structure.
  creators: {
    available: number;
    collectionURI: string;
    items: {
      resourceURI: string;
      name: string;
      role: string;
    }[];
    returned: number;
  };
  characters: {
    available: number;
    collectionURI: string;
    items: any[]; // You may want to replace 'any' with a specific type if you know the structure.
    returned: number;
  };
  stories: {
    available: number;
    collectionURI: string;
    items: {
      resourceURI: string;
      name: string;
      type: string;
    }[];
    returned: number;
  };
  events: {
    available: number;
    collectionURI: string;
    items: any[]; // You may want to replace 'any' with a specific type if you know the structure.
    returned: number;
  };
  price: number,
  oldPrice: number,
  stock: number
}