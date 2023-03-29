import React from "react";
import "./App.css";

function DisplayArticle(props) {
  const { search, index } = props;
  const date = new Date(search.created_at).toLocaleDateString();

  return (
    <section classname="article">
      <div classname="article-title">
        <p key={index}>
          <a href={search.url}>{search.title}</a>
          <span className="url">({search.url})</span>
        </p>
      </div>
      <article classname="article-info">
        <span classname="article-info-points">{search.points} points |</span>
        <span>Author: {search.author} |</span>
        <span>Created: {date} |</span>
        <span>Comments: {search.num_comments}</span>
      </article>
    </section>
  );
}

export default DisplayArticle;
