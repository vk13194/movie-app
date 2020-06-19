import React from 'react'
const urlComponent = "https://image.tmdb.org/t/p/w342";
const movieUrl = "https://www.themoviedb.org/movie/";
export class MovieItem extends React.Component {
	render() {
		return (
	 
	 <div >
	<div className="card" style={{width: '18rem'}}>
  <img src={urlComponent+this.props.movie.poster_path} 
  className="img-thumbnail"
  alt={this.props.movie.title+ " Image"} />
  <div className="card-body">
    <h5 className="card-title">{this.props.movie.title}</h5>
    <p className="card-text">Release Date - {this.props.movie.release_date}</p>
    <p className="card-text">Rating:{' '}{this.props.movie.vote_average}</p>
    <a href={movieUrl+this.props.movie.id} className="btn btn-primary" rel="noopener noreferrer" target="_blank">
    Movie Details</a>
  </div>
</div>
	</div>		
		)
	}
}

export default MovieItem