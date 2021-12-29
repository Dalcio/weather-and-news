import { Fragment, memo, useEffect, useState } from "react";

import "./trending-news.css";

import { getDate } from "../util/date";
import { getTidingsAPI } from "../../api";
import Loading from "../loading";

function DotLoad() {
  return (
    <div className="Dot-Load">
      <div></div>
      <div></div>
      <div></div>
    </div>
  );
}

function TrendingNews() {
  const [articles, setArticles] = useState([]);
  const [isLoadingMore, setIsLoadingMore] = useState(false);

  const loadMore = async () => {
    const pageSize = articles.length;
    setIsLoadingMore(true);

    try {
      const { articles } = await getTidingsAPI(pageSize + 5);
      setArticles([...articles]);
    } catch (error) {
      setArticles((prev) => [...prev]);
    }

    setIsLoadingMore(false);
  };

  const isLastNews = (index) => {
    const last = index === articles.length - 1;
    if (!last) return undefined;

    const lastTwo = (index + 1) % 3 === 0 && (index + 4) % 3 === 0;
    if (lastTwo) return "last-news-2";

    const lastThree = (index + 3) % 3 === 0;
    return lastThree && "last-news-3";
  };

  useEffect(() => {
    if (articles.length === 0) {
      const getTidings = async () => {
        try {
          const { articles } = await getTidingsAPI(5);
          setArticles([...articles]);
        } catch (error) {
          setArticles([]);
        }
      };
      getTidings();
    }
  }, [articles]);

  return (
    <section className="Trending-News-Container">
      <h3>Global Trending News</h3>
      {(articles.length > 0 && (
        <Fragment>
          <div className="tidings-wrapper">
            {articles.map(
              ({ description, urlToImage, url, title, publishedAt }, index) => (
                <div
                  className={`news ${isLastNews(index)}`}
                  key={url}
                  style={{ backgroundImage: `URL("${urlToImage}")` }}
                >
                  <div className="context">
                    <a href={url} target="_blank" rel="noreferrer">
                      <p>
                        {title} - <span>{getDate(publishedAt).utc}</span>
                      </p>
                      <div className="description">{description}</div>
                    </a>
                  </div>
                </div>
              )
            )}
          </div>
          <button onClick={loadMore} className="load-more">
            {(!isLoadingMore && "Load More News") || <DotLoad />}
          </button>
        </Fragment>
      )) || <Loading />}
    </section>
  );
}

export default memo(TrendingNews);
