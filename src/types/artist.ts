export type Artist = {
  _id: string;
  _type: 'artist';
  name: string;
  slug: {
    current: string;
    _type: 'slug';
  };
  image: {
    _type: 'image';
    asset: {
      _ref: string;
      _type: 'reference';
    };
    alt?: string;
  };
  portfolio?: {
    _type: 'image';
    asset: {
      _ref: string;
      _type: 'reference';
    };
    alt?: string;
  }[];
};
