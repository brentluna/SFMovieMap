import React from 'react';

const SearchResults = ({movies}) => {
	const resultLis = [];
	    if (movies.length) {
	      movies.forEach((res, idx) => {
	        resultLis.push(
	          <li key={idx}>
	            <h4>
	              {res.title}
	            </h4>

	            <p>
	              {res.locations}
	            </p>
	          </li>
	        );
	      });
	    }
	return(
		<ul>
			{resultLis}
		</ul>
	)
}


export default SearchResults;