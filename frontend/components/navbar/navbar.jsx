import React from 'react';
import SearchContainer from '../search_container';
import GitHub from 'react-icons/lib/fa/github';


const Navbar = () => {

	return (
		<div className='navbar'>
			<div className='nav-div'>
			<div className='title-div'>
				<div className='img-div'>
					<img src='./film.png' />	
				</div>
				<h1>SF Film Map</h1>
			</div>
				<GitHub />
			</div>
		</div>
		)
}

export default Navbar;