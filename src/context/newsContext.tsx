import React, { createContext, useEffect, useState } from "react";
import axios from "axios";

//Interfaces
import { INewsArticles } from "../interfaces/news.interface";

type props = {
  children: React.ReactNode;
};

type INewsContext = {
  news: INewsArticles[];
};

//Context
const NewsContext = createContext({} as INewsContext);

function NewsProvider({ children }: props) {
  const [news, setNews] = useState<INewsArticles[]>([]);

  // eslint-disable-next-line react-hooks/exhaustive-deps
  const options = {
    method: "GET",
    url: "https://bing-news-search1.p.rapidapi.com/news/search",
    params: { q: "valorant", freshness: "Day", textFormat: "Raw", safeSearch: "Off" },
    headers: {
      "X-BingApis-SDK": "true",
      "X-RapidAPI-Key": "41c8b0b80cmsh12179a41b59dfefp1e9b1ajsnad67034fbdf5",
      "X-RapidAPI-Host": "bing-news-search1.p.rapidapi.com"
    }
  };

  useEffect(() => {
    axios.request(options).then((res) => {
      const data = res.data.value;
      const articles = data.map((article: any) => ({
        source: article.provider[0],
        author: "Valorant News",
        title: article.name,
        description: article.description,
        url: article.url,
        urlToImage: article.image?.thumbnail.contentUrl,
        publishedAt: article.datePublished
      }));
      setNews(articles);
    });
  }, [options]);

  return <NewsContext.Provider value={{ news }}>{children}</NewsContext.Provider>;
}

export { NewsProvider, NewsContext };
