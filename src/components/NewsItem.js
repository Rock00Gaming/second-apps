import React, { Component } from "react";

export class NewsItem extends Component {
  render() {
    let { title, description, imageUrl, newsUrl, author, date, source } =
      this.props;
    return (
      <div className="my-3">
        <div className="card">
          <span
            class="position-absolute top-0 translate-middle badge rounded-pill bg-danger"
            style={{ left: "90%", zIndex: "1" }}
          >
            {source}
            <span class="visually-hidden">unread messages</span>
          </span>
          <img
            src={
              !imageUrl
                ? "https://uncrate.com/p/2023/09/bmw-i7-protection-1.jpg"
                : imageUrl
            }
            className="card-img-top"
            alt="..."
          />
          <div className="card-body">
            <h5 className="card-title">{!title ? "Title is no" : title}</h5>
            <p className="card-text">
              {!description ? "It is no description" : description}
              <span class="badge rounded-pill text-bg-dark">New</span>
            </p>
            <p class="card-text">
              <small class="text-body-secondary">
                By {!author ? "Unknown" : author} on{" "}
                {!date ? "21:00pm" : new Date(date).toGMTString()}
              </small>
            </p>
            <a
              href={newsUrl}
              target="_blank"
              className="btn btn-sm btn-primary"
            >
              Read More
            </a>
          </div>
        </div>
      </div>
    );
  }
}

export default NewsItem;
