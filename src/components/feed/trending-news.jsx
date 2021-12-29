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
  const [tidingData, setTidingData] = useState([]);
  const [isLoadingMore, setIsLoadingMore] = useState(false);

  const loadMore = async () => {
    const limit = tidingData.length;
    if (limit < 20) {
      setIsLoadingMore(true);
      try {
        const { data } = await getTidingsAPI(limit + 5);
        setTidingData([...data]);
      } catch (error) {
        setTidingData((prev) => [...prev]);
      }
      setIsLoadingMore(false);
    }
  };

  const isLastNews = (index) => {
    const last = index === tidingData.length - 1;
    if (!last) return undefined;

    const lastTwo = (index + 1) % 3 === 0 && (index + 4) % 3 === 0;
    if (lastTwo) return "last-news-2";

    const lastThree = (index + 3) % 3 === 0;
    return lastThree && "last-news-3";
  };

  useEffect(() => {
    if (tidingData.length === 0) {
      const getTidings = async () => {
        try {
          const { data } = await getTidingsAPI(5);
          setTidingData([...data]);
        } catch (error) {
          setTidingData([]);
        }
      };
      getTidings();
    }
  }, [tidingData]);

  return (
    <section className="Trending-News-Container">
      <h3>Global Trending News</h3>
      {(tidingData.length > 0 && (
        <Fragment>
          <div className="tidings-wrapper">
            {tidingData.map(
              ({ description, image, url, title, published_at }, index) => (
                <div
                  className={`news ${isLastNews(index)}`}
                  key={url}
                  style={{ backgroundImage: `URL("${image}")` }}
                >
                  <div className="context">
                    <a href={url} target="_blank" rel="noreferrer">
                      <p>
                        {title} - <span>{getDate(published_at).utc}</span>
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
