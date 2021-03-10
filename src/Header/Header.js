import React from 'react';
import './Header.css';
import IconButton from '@material-ui/core/IconButton';
import PersonIcon from '@material-ui/icons/Person';
import ForumIcon from '@material-ui/icons/Forum';

function Header() {
	return (
		<div className='header'>
			<IconButton>
				<PersonIcon fontSize='large' className='header__icon' />
			</IconButton>

			<img
				className='header__logo'
				src='https://www.pngkit.com/png/full/121-1218627_healthcare-icon-business-icon-png-red.png'
				alt=''
			/>

			<IconButton>
				<ForumIcon fontSize='large' className='header__icon' />
			</IconButton>
		</div>
	);
}

export default Header;
