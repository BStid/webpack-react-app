import React, { Component } from "react";
import ArticleList from "./ArticleData/ArticleList/ArticleList";
import DataApi from "../DataApi";
import { data } from "../testData";

const api = new DataApi(data);

class App extends Component {
  constructor() {
    super();
    this.state = {
      articles: api.getArticles(),
      authors: api.getAuthors(),
      test: "test"
    };
  }

  render() {
    const articleActions = {
      lookupAuthor: authorId => this.state.authors[authorId]
    };
    return (
      <ArticleList
        test={this.state.test}
        articles={this.state.articles}
        articleActions={articleActions}
      />
    );
  }
}

export default App;
