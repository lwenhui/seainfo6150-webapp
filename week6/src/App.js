import React, { Component } from 'react';

import articles from './data/articles.json';
import ArticleList from "./ArticleList/ArticleList";

class App extends Component {
  render() {
    return (
      <div className="App">
        <ArticleList articles={articles}/>
      </div>
    );
  }
}

export default App;
