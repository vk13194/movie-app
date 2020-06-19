import React from 'react'
import {API_KEY} from '../secrets'
import {movies} from '../actions';
import {connect} from 'react-redux';
 class Search extends React.Component {

      constructor(props) {
	  super(props);
	
	  this.state = {
	  	query: ''
	  };
	}
 	search(){
 		console.log(this.state.query)
 		let url=`https://api.themoviedb.org/3/search/movie?api_key=${API_KEY}&language=en-US&page=1&include_adult=false&query=${this.state.query}`
		//console.log(url)
		fetch(url,{
			method: 'GET'
		}).then(res=>res.json()).then(jsonObj =>{this.props.movies(jsonObj.results)})
		
 	}
 	
	render() {
		return (
			<form>
			<div style={{margin:'25px'}}>
			<div className="form-group" >
        <input type="text" className="form-control" 
        placeholder="Search....." onChange={(event)=>this.setState({query:event.target.value})}/>
         </div>
         <button type="button" className="btn btn-secondary btn-lg btn-block" onClick={()=>this.search()}>
         Movies Search</button>
         </div>
			</form>
		)
	}
}

export default connect(null,{movies}) (Search)