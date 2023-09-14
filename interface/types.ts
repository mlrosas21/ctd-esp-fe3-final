import { Dispatch, SetStateAction } from "react";

export type FaqsType = {
  id: number;
  question: string;
  answer: string;
};

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
  textObjects: any[];
  resourceURI: string;
  urls: { type: string; url: string }[];
  series: {
    resourceURI: string;
    name: string;
  };
  variants: { resourceURI: string; name: string }[];
  collections: any[];
  collectedIssues: any[];
  dates: { type: string; date: string }[];
  prices: { type: string; price: number }[];
  thumbnail: {
    path: string;
    extension: string;
  };
  images: { path: string; extension: string }[];
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
    items: any[];
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
    items: any[];
    returned: number;
  };
  price: number;
  oldPrice: number;
  stock: number;
};

export type Character = {
  id: number;
  name: string;
  description: string;
  modified: string;
  thumbnail: {
    path: string;
    extension: string;
  };
  resourceURI: string;
  comics: {
    available: number;
    collectionURI: string;
    items: {
      resourceURI: string;
      name: string;
    }[];
    returned: number;
  };
  series: {
    available: number;
    collectionURI: string;
    items: {
      resourceURI: string;
      name: string;
    }[];
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
    items: any[];
    returned: number;
  };
  urls: {
    type: string;
    url: string;
  }[];
};

export type OrderContextType = {
  order: Order;
  setOrder: Dispatch<SetStateAction<Order>>;
  resetOrder: () => void,
};

export type Order = {
  comic?: Comic;
  buyer?: Buyer;
};

export type Buyer = {
  personalInfo?: PersonalInfo;
  deliveryInfo?: DeliveryInfo;
  paymentInfo?: PaymentInfo;
};

export type PersonalInfo = {
  name: string;
  lastname: string;
  email: string;
};

export type DeliveryInfo = {
  address: string;
  address2?: string;
  city: string;
  province: string;
  zip: string;
};

export type PaymentInfo = {
  number: string;
  name: string;
  expiry: string;
  cvc: string;
};

// prev: features/checkout.types.ts
export type CheckoutInput = {
  customer: {
    name: string;
    lastname: string;
    email: string;
    address: {
      address1: string;
      address2: string | null;
      city: string;
      state: string;
      zipCode: string;
    };
  };
  card: {
    number: string;
    cvc: string;
    expDate: string;
    nameOnCard: string;
  };
  order: {
    name: string;
    image: string;
    price: number;
  };
};

export type Error = {
  error: string;
  message: string;
}