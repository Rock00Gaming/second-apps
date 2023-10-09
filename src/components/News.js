import React, { Component } from "react";
import NewsItem from "./NewsItem";

export class News extends Component {
  constructor() {
    super();
    this.state = {
      articles: [],
      loading: true,
    };
  }

  async componentDidMount() {
    let url =
      "https://newsapi.org/v2/everything?q=bitcoin&apiKey=f0e3c700a1f64c47b1d0dd7924d9fbdc";
    let data = await fetch(url);
    let parsedData = await data.json();
    console.log(parsedData);
    this.setState({ articles: parsedData.articles });
  }

  render() {
    return (
      <div className="container my-3">
        <h2>Top Headlines</h2>
        <div className="row">
          {this.state.articles.map((element) => {
            return (
              <div className="col-md-4">
                <NewsItem
                  title={element.title.slice(0, 30)}
                  description={element.description.slice(0, 45)}
                  imageUrl={element.urlToImage}
                  newsUrl={element.url}
                />
              </div>
            );
          })}
        </div>
      </div>
    );
  }
}

export default News;
