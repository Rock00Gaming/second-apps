import React, { Component } from "react";

export class NewsItem extends Component {
  render() {
    let { title, description, imageUrl, newsUrl } = this.props;
    return (
      <div className="my-3">
        <div className="card" style={{ width: "18rem", height: "400px" }}>
          <img
            src={
              !imageUrl
                ? "https://uncrate.com/p/2023/09/bmw-i7-protection-1.jpg"
                : imageUrl
            }
            className="card-img-top"
            style={{ height: "200px" }}
            alt="..."
          />
          <div className="card-body">
            <h5 className="card-title">{title}</h5>
            <p className="card-text">{description}</p>
            <a href={newsUrl} className="btn btn-sm btn-primary">
              Read More
            </a>
          </div>
        </div>
      </div>
    );
  }
}

export default NewsItem;
