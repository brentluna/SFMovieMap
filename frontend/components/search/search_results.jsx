import React from 'react';

const SearchResults = ({movies}) => {
	const resultLis = [];
	    if (movies.length) {
	      movies.forEach((res, idx) => {
	        resultLis.push(
	          <li key={idx}>
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


export default SearchResults;