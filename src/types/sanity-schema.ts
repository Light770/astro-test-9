// Sanity schema types
export interface Page {
  _id: string;
  _type: 'page';
  title: string;
  slug: { current: string };
  content: any[];
}

export interface Post {
  _id: string;
  _type: 'post';
  title: string;
  slug: { current: string };
  excerpt?: string;
  content: any[];
  author?: { _ref: string };
  publishedAt?: string;
}

export interface Author {
  _id: string;
  _type: 'author';
  name: string;
  bio?: string;
  image?: any;
}