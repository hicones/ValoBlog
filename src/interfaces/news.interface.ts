interface provider {
  _type: string;
  name: string;
}

export interface INewsArticles {
  source: provider;
  author: string;
  title: string;
  description: string;
  url: string;
  urlToImage: string;
  publishedAt: string;
}
