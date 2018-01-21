import React, { Component, PropTypes } from 'react';
import Immutable from 'immutable';

import Tooltip from './MovieTooltip';

import './MovieList.css';
import PlayCircle from '-!svg-react-loader!../images/ic_play_circle_outline_black_24px.svg';

export default class MovieList extends Component {
  static propTypes = {
    movies: PropTypes.instanceOf(Immutable.List).isRequired,
    filter: PropTypes.string.isRequired
  };

  componentDidMount() {
    fetch('https://mfwkweb-api.clarovideo.net//services/content/list?api_version=v5.7&authpn=webclient&authpt=tfg1h3j4k6fd7&format=json&region=mexico&device_id=web&device_category=web&device_model=web&device_type=web&device_manufacturer=generic&HKS=kaopfvtgesjnpu027bd0552m55&quantity=40&order_way=DESC&order_id=200&level_id=GPS&from=0&node_id=9869').then((result) => result.json()).then((resultJson) => {
      this.props.addMovies(resultJson.response.groups);
      this.props.toggleLoading();
    });
    this.overlay = [];
    this.tooltips = [];
  }

  componentWillUnmount() {
    this.props.toggleLoading();
    this.props.clearMovies();
  }

  render() {
    const loading = this.props.loading.get('active');
    const { movies, filter } = this.props;
    let filterFunc = () => true;
    if (filter !== 'All') {
      filterFunc = (movie) => movie.title.toLowerCase().includes(filter.toLowerCase());
    }
    let list;
    if (!movies) {
      list = null;
    } else {
      list = movies.filter(filterFunc).map((item, index) =>
        <li className="movie-list_item" key={index} >
          <div className="movie-list_item-container">
            <img src={item.image_small} />
            <a href={`#/movie-detail/${item.id}`}>
              <div className="movie-list_item-shadow">
                <PlayCircle className="movie-list_item-shadow-icon" />
              </div>
            </a>
          </div>
          <Tooltip key={`tooltip-${index}`} className={(index + 1) % 4 === 0 ? 'reverse' : ''} movie={item} />
        </li>
      );
    }
    return (
      <section ref="main" className="main">
        <ul className="movie-list">
          {list}
        </ul>
        <div className={`loading-full-screen ${!loading ? 'hidden' : ''}`}>
          <div className="claro-spinner"></div>
        </div>
      </section>
    );
  }
}

