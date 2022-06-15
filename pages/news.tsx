import type { NextPage } from "next";
import Header from "../src/components/Header";
import NewsComponent from "../src/components/NewsComponent";
import { Container, Main } from "../styles/news";
import { NewsContext } from "../src/context/newsContext";
import { useContext } from "react";

const News: NextPage = () => {
  const { news } = useContext(NewsContext);

  return (
    <Container>
      <Main>
        <div className="mainElements">
          <h1 className="heading48" style={{ color: "var(--white)" }}>
            Last News
          </h1>

          {news.map((article) => (
            <NewsComponent
              key={article.title}
              url={article.url}
              title={article.title}
              author={article.author}
              source={article.source}
              description={article.description}
              publishedAt={article.publishedAt}
              urlToImage={article.urlToImage}
            />
          ))}
        </div>
      </Main>
    </Container>
  );
};

export default News;
