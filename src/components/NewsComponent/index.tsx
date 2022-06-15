import React, { memo } from "react";

import * as S from "./styles";
import Image from "next/image";
import thumb from "../../assets/footer/backgroundFooter.png";

import { INewsArticles } from "../../interfaces/news.interface";

function News({ title, description, urlToImage, publishedAt, url, author, source }: INewsArticles) {
  const OpenNews = () => {
    const url2 = url;

    window.open(url2);
  };

  const dateformat1 = publishedAt.replace(/-/g, "/");
  const dateformat2 = dateformat1.replace("T", " ");
  const date = dateformat2.replace("Z", " ");

  return (
    <S.Container onClick={OpenNews}>
      <S.MainNews>
        <h3 className="headding18">{source.name}</h3>
        <h2 className="heading24">{title}</h2>
        <p className="body18">{description}</p>
        <span className="body18">
          {date} | {author}
        </span>
      </S.MainNews>
      <S.Thumbnail src={urlToImage} />
    </S.Container>
  );
}

export default memo(News);
