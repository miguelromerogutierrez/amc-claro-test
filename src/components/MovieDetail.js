import React, { Component } from 'react';
import { connect } from 'react-redux';

import * as moviesActionCreators from '../actions/MoviesAction.js';

import './MovieDetail.css';

class MovieDetail extends Component {

  componentWillMount() {
    fetch(`https://mfwkweb-api.clarovideo.net/services/content/data?api_version=v5.7&authpn=webclient&authpt=tfg1h3j4k6fd7&format=json&region=mexico&device_id=web&device_category=web&device_model=web&device_type=web&device_manufacturer=generic&HKS=kaopfvtgesjnpu027bd0552m55&group_id=${this.props.params.id}`)
    .then((result) => result.json())
    .then((resultJson) => {
      this.props.addMovie(resultJson.response.group.common);
      this.props.toggleLoading();
    });
  }

  componentDidUpdate() {
    const loading = this.props.loading.get('active');
    const movie = !loading ? this.props.movie.toJS() : null;

    if (!loading) {
      this.refs.detailsection.style.backgroundImage = `url('${movie.image_background}')`;
    }
  }

  componentWillUnmount() {
    this.props.deleteMovie();
    this.props.toggleLoading();
  }

  getRoles(roles) {
    return roles.map((role) => (
      <p><b>{role.desc}:</b> {this.getTalents(role.talents.talent)}</p>
    ));
  }

  getTalents(talents) {
    return talents.map((talent) => (<span className="box">{talent.fullname}</span>));
  }

  getGenres(genres) {
    return genres.map((genre) => genre.desc).join(', ');
  }

  render() {
    const loading = this.props.loading.get('active');
    const movie = !loading ? this.props.movie.toJS() : null;

    function formatDuration(val, index, arr) {
      switch (index) {
        case 0:
          return arr.length > 2 ? `${val}hrs` : `${val}min`;
        case 1:
          return arr.length > 2 ? `${val}min` : `${val}s`;
        case 2:
          return `${val}s`;
        default:
          return '';
      }
    }
    return (
      !loading &&
      <section ref="detailsection" className="moviedetail">
        <h1>{movie.title}</h1>

        <div className="detail-container">
          <div className="detail-image-container">
            <img className="detail-image" src={movie.image_large} />
          </div>

          <div className="detail-spec-container">
            <div className="detail-description">
              {movie.large_description}
            </div>

            <div className="detail-media-container">
              <span>{movie.extendedcommon.media.publishyear}</span>
              <span>{movie.extendedcommon.media.duration.split(':').map(formatDuration).join(' ')}</span>
              <span>{movie.extendedcommon.media.publishyear}</span>
              {
                movie.extendedcommon.media.language.subbed === 'true' &&
                <span className="box box-fill">Subtitulada</span>
              }
              {
                movie.extendedcommon.media.language.dubbed === 'true' &&
                <span className="box box-fill">Doblada</span>
              }
              <span className="box">{movie.extendedcommon.media.rating.code}</span>
            </div>

            <div className="detail-extended-container">
              {this.getRoles(movie.extendedcommon.roles.role)}
              <p><b>Género:</b> {this.getGenres(movie.extendedcommon.genres.genre)}</p>
              <p><b>Título original:</b> {movie.extendedcommon.media.originaltitle}</p>
            </div>

          </div>
        </div>
        <div className={`loading-full-screen ${!loading ? 'hidden' : ''}`}>
          <div className="claro-spinner"></div>
        </div>
      </section>
    );
  }
}

const mapStateToProps = function mapStateToProps(state) {
  return { movie: state.movie, loading: state.loading };
};
export default connect(mapStateToProps, moviesActionCreators)(MovieDetail);
