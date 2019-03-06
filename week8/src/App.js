import React, { Component } from 'react';

import Header from './Header';
import Footer from './Footer';
import articles from './data/articles.json';
import ArticleList from "./ArticleList/ArticleList";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header/>
        <ArticleList articles={articles}/>
        <Footer/>
      </div>
    );
  }
}

export default App;
