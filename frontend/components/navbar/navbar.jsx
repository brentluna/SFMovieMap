import React from 'react';
import SearchContainer from '../search_container';

const Navbar = () => {

	return (
		<div className='navbar'>
			<div className='title-div'>
				<div className='img-div'>
					<img src='./film.png' />	
				</div>
				<h1>SF Movie Map</h1>
			</div>
			<SearchContainer />
		</div>
		)
}

export default Navbar;