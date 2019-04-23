import React from "react";
import Article from "../Article";

const ArticleList = props => {
  const allArticles = Object.values(props.articles);
  const displayArticles = allArticles.map(article => {
    return (
      <Article
        key={article.id}
        article={article}
        actions={props.articleActions}
      />
    );
  });
  return <>{displayArticles}</>;
};

export default ArticleList;
