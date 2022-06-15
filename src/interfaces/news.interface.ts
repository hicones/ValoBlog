interface Source {
  id: string;
  name: string;
}

export interface INewsArticles {
  source: Source;
  author: string;
  title: string;
  description: string;
  url: string;
  urlToImage: string;
  publishedAt: string;
}
