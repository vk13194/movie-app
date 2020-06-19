import React from 'react'
import Search from './Search';
import {connect} from 'react-redux'
import MovieItem from './MovieItem'
export class MovieResults extends React.Component {
	render() {
		return (
			<div>
			  <Search />
				<h3>Movie Results </h3>
				<div style={userStyle}>
				
				{this.props.movies.map((item)=>{
					return <MovieItem movie={item} key={item.id} />
				})}
			
			</div>
			</div>
		)
	}
}
const mapStateToProps =(state)=>{
     console.log(state)
	return{
      movies: state.movies
	}
}
const userStyle ={
	display:'grid',
	gridTemplateColumns:'repeat(4, 1fr)',
	gridGap:'1rem'
}
export default connect(mapStateToProps,null)(MovieResults)