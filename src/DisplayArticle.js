import React from "react";
import "./App.css";

function DisplayArticle(props) {
  const { search, index } = props;
  const date = new Date(search.created_at).toLocaleDateString();

  return (
    <section className="article">
      <div className="article-title">
        <p key={index}>
          <a href={search.url}>{search.title}</a>
          <span className="url">({search.url})</span>
        </p>
      </div>
      <article className="article-info">
        <span className="article-info-points">{search.points} points |</span>
        <span>Author: {search.author} |</span>
        <span>Created: {date} |</span>
        <span>Comments: {search.comment_text}</span>
      </article>
    </section>
  );
}

export default DisplayArticle;
