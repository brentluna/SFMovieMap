import React from 'react';
import {fetchOMD} from '../../util/map_api_util';


const SearchResults = ({movies}) => {
	const resultLis = [];
	    if (movies.length) {
	      movies.forEach((res, idx) => {
	      		resultLis.push(
		          <li key={idx}>
		          	<div className='thumbnail-div'>
		          		<img src={res.poster} />
		          	</div>
		          	<div>
			            <h4 className='search-title'>
			              {res.title}
			            </h4>
			            <div className='search-info'>
				            <p>
				              Location: {res.locations}
				            </p>
				            <p>
				            	Released: {res.release_year}
			            	</p>
			            </div>
		            </div>
		          </li>
		        );	        
	      });
	    }
	return(
		<ul className='search-ul'>
			{resultLis}
		</ul>
	)
}



// class SearchResults extends React.Component {
// 	constructor(props) {
// 		super(props);
// 		this.updateState = this.updateState.bind(this);
// 		this.state = {data: []};
// 		this.resultLis = this.resultLis.bind(this);
// 	}

// 	componentWillReceiveProps() {
// 		this.updateState();
// 	}

// 	resultLis() {
//     let lis = []
// 		if (this.state.data.length) {
// 	      this.state.data.forEach((res, idx) => {
// 	      		lis.push(
// 		          <li key={idx}>

// 		          	<div>
// 			            <h4 className='search-title'>
// 			              {res.title}
// 			            </h4>
// 			            <div className='search-info'>
// 				            <p>
// 				              Location: {res.locations}
// 				            </p>
// 				            <p>
// 				            	Released: {res.release_year}
// 			            	</p>
// 			            </div>
// 		            </div>
// 		          </li>
// 		        );
// 	      	});
// 	   	return lis;
// 	   }
// 	}

// 	updateState() {
// 		if (this.props.movies.length) {
// 			this.props.movies.forEach((res, idx) => {

// 				fetchOMD({yr: res.release_year, title: res.title}, resOMD => {
// 					oldState = this.state.data;
// 					oldState.push({title: res.title, loctions: res.locations, yr: res.release_year, poster: resOMD.Poster});
// 					this.setState({data: oldState})
// 				});

// 			});
// 		}
// 	}

// 	render() {
// 		let lis = this.resultLis();
// 		return (
// 			<ul className='search-ul'>
// 				{lis}
// 			</ul>
// 			)
// 	}
// }


export default SearchResults;