import React, { Component } from "react";
import "./HomePage.css";
import NewsFiltersBar from "./NewsFiltersBar/NewsFiltersBar";
import NewsList from "./NewsList/NewsList";
import LanguageContext from "../../../LanguageContext";

class HomePage extends Component {
  static contextType = LanguageContext;
  constructor(props) {
    super(props);

    this.state = {
      results: null,
      category: "general",
      searchQuery: null,
      lang: "",
      pagesNumber: 1,
      page: 1
    };
  }

  componentDidMount() {
    this.setState({ lang: this.context });
  }

  componentDidUpdate(prevProps, prevState) {
    if (
      prevState.category !== this.state.category ||
      prevState.searchQuery !== this.state.searchQuery ||
      prevState.lang !== this.state.lang ||
      prevState.page !== this.state.page
    ) {
      this.getArticles();
    }
    if (this.context !== this.state.lang)
      this.setState({ lang: this.context, page: 1 });
  }

  getQuery() {
    const { category, searchQuery } = this.state;

    let query;
    if (category) {
      query = searchQuery
        ? `&category=${category}&q=${searchQuery}`
        : `&category=${category}`;
    } else {
      query = searchQuery ? `&q=${searchQuery}` : "";
    }
    return query;
  }

  getArticles() {
    const { lang, page } = this.state;

    fetch(
      `http://localhost:4000/articles?country=${lang}${this.getQuery()}&page=${page}`
    )
      .then(response => response.json())
      .then(results => {
        this.setState({ results });
        this.setState({
          pagesNumber: Math.ceil(results.totalResults / 15)
        });
      });
  }

  setCategory = category => this.setState({ category, page: 1 });
  setSearchQuery = searchQuery => {
    this.setState({ searchQuery });
    if (searchQuery) this.setState({ page: 1 });
  };

  setPage = page => this.setState({ page });

  render() {
    const { results, pagesNumber, page } = this.state;

    if (!results) return null;

    return (
      <div id="HomePage">
        <NewsFiltersBar
          onCategoryChange={this.setCategory}
          onSearchQueryChange={this.setSearchQuery}
        />
        {results.totalResults !== 0 ? (
          <NewsList
            articles={results.articles.filter((item, index, self) => {
              return index === self.findIndex(t => t.title === item.title);
            })}
            onPageChange={this.setPage}
            pagesNumber={pagesNumber}
            currentPage={page}
          />
        ) : (
          <h1>No results</h1>
        )}
      </div>
    );
  }
}

export default HomePage;
