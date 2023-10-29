import { useEffect, useState } from "react";
import "./styles.css";

// Components
import Article from "./Components/Articles";

export default function App() {
  const [articles, setArticles] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const API_URL = "https://jsonplaceholder.typicode.com/posts";

    async function getArticles() {
      const resp = await fetch(API_URL);
      const data = await resp.json();
      setArticles(data);
      setLoading(false);
    }

    setLoading(true);

    setTimeout(() => {
      console.log(loading);
      getArticles();
      console.log(loading);
    }, 2000);
    // getArticles();
  }, []);

  return (
    <div className="App">
      {loading ? (
        <div className="loading">
          <h1>Recent Posts</h1>
          <p>Loading...</p>
        </div>
      ) : (
        <div>
          <h1 className="title">Recent Posts</h1>
          {articles.map(function (article) {
            return <Article key={article.id} articles={article} />;
          })}
        </div>
      )}
    </div>
  );
}
