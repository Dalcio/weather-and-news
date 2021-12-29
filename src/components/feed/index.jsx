import "./feed.css";

import Weather from "./weather";
import TrendingNews from "./trending-news";

function Feed() {
  return (
    <section className="Feed-Container">
      <Weather />
      <TrendingNews />
    </section>
  );
}

export default Feed;
