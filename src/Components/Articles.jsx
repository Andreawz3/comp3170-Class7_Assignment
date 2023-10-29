import { useState, useEffect } from "react";

export default function Article({ articles }) {
  const [authors, setAuthors] = useState([]);

  useEffect(() => {
    const author_url = "https://jsonplaceholder.typicode.com/users";

    async function getAuthors() {
      const resp = await fetch(author_url);
      const data = await resp.json();
      setAuthors(data);
    }

    getAuthors();
  }, []);

  let userName = "";
  let userWebsite = '';

  for (const prop in authors[5]) {
    if (`${prop}` === "name") {
      userName = `${authors[5][prop]}`;
    }
    if (`${prop}` === "website") {
      userWebsite = `https://${authors[5][prop]}`;
    }
  }

  return (
    <div className="articleList">
      <h3>{articles.title.charAt(0).toUpperCase() + articles.title.slice(1)}</h3>
      <div className="info">
        <p className="author">By 
          <a href={userWebsite}> {userName}</a>
        </p>
        <p>{articles.body.charAt(0).toUpperCase() + articles.body.slice(1)}</p>
      </div>
    </div>
  );
}
