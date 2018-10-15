import React, { Component } from 'react';
import Movie from './movie';

class MovieList extends React.Component{
	constructor(props){
		super(props);
	}

	render(){
		return (
			<div id="movieList">
				{this.props.list.map((item, i) => <Movie key={i} info={item} />)}
			</div>
		)
	}
}

export default MovieList;