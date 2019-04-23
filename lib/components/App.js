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
    return (
      <ArticleList
        test={this.state.test}
        articles={this.state.articles}
        authors={this.state.authors}
      />
    );
  }
}

export default App;
