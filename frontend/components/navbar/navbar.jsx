import React from 'react';
import SearchContainer from '../search_container';
import GitHub from 'react-icons/lib/fa/github';


const Navbar = () => {

	return (
		<div className='navbar'>
			<div className='nav-div'>
			<div className='title-div'>
				<div className='img-div'>
					<img src='./movie_camera.png' />	
				</div>
				<h1>SF Film app</h1>
			</div>
				<a href='http://github.com/brentluna/SFMovieMap' target='_blank'>
				<GitHub className='github' />
				</a>
			</div>
		</div>
		)
}

export default Navbar;