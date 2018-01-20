import React, { Component } from 'react';

import './MovieTooltip.css';
import StarBlack from '-!svg-react-loader!../images/ic_star_black_24px.svg';
import StarEmpyBlack from '-!svg-react-loader!../images/ic_star_border_black_24px.svg';
import StarHalfBlack from '-!svg-react-loader!../images/ic_star_half_black_24px.svg';


export default class MovieTooltip extends Component {

  getStars() {
    let star;
    const stars = [];
    for (star = 0; star < this.props.movie.votes_average; star++) {
      stars.push(<span key={`star-${star}`} className="star-container"><StarBlack className="star" /></span>);
    }

    if (star - this.props.movie.votes_average !== 0) {
      stars.push(<span key={`star-${++star}`} className="star-container"><StarHalfBlack className="star" /></span>);
    }

    if (star < 5) {
      for (star; star < 5; star++) {
        stars.push(<span key={`star-${star}`} className="star-container"><StarEmpyBlack className="star" /></span>);
      }
    }

    return stars;
  }

  render() {
    const stars = this.getStars();
    return (
      <div className={`tooltip ${this.props.className}`} >
        <div className="tooltip-content">
          <h2 className="tooltip-content">
            {this.props.movie.title}
          </h2>

          <div className="tooltip-spec">
            <span className="tooltip-spec_year">{this.props.movie.year}</span>
            <span className="tooltip-spec_duration">{this.props.movie.duration}</span>
            <span className="tooltip-spec_votes">{stars}</span>
          </div>

          <div className="raitng_code-container">
            {this.props.movie.rating_code}
          </div>

          <div className="sinopsis-container">
            <p className="sinopsis-paragraph"><b>Sinopsis:</b> {this.props.movie.description_large}</p>
          </div>

          <div className="see-detail-container">
            <a href={`#/movie-detail/${this.props.movie.id}`} className="see-detail-button">Ver detalles</a>
          </div>
        </div>
      </div>
    );
  }
}
