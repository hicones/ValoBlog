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

  useEffect(() => {
    axios.get(`https://newsapi.org/v2/everything?q=valorant&apiKey=45a150d8de6d43d79054aecc79b8f709`).then((res) => {
      const data: INewsArticles[] = res.data.articles;
      const articles = data.map((article) => ({
        source: article.source,
        author: article.author,
        title: article.title,
        description: article.description,
        url: article.url,
        urlToImage: article.urlToImage,
        publishedAt: article.publishedAt
      }));
      setNews(articles);
    });
  }, []);

  return <NewsContext.Provider value={{ news }}>{children}</NewsContext.Provider>;
}

export { NewsProvider, NewsContext };
