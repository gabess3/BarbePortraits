import React from 'react';
import { Typography, Box } from '@mui/material';
import '../../App.css';

function Header() {
	return (
		<Box className='header-container'>
			<Typography
				align='center'
				fontFamily={'Italiana'}
				sx={{
					paddingTop: 15,
					fontSize: '700%',
				}}
				id='barbe'
			>
				Barbé
			</Typography>
			<Typography
				variant='subtitle'
				fontFamily={'cursive'}
				align='center'
				fontSize={'200%'}
				paddingBottom={2}
			>
				Portraits
			</Typography>
			<img
				src='/images/divider.png'
				width={'70%'}
				height={'90%'}
				style={{ align: 'center', maxWidth: 650 }}
				alt='divider'
			/>
			<Box paddingBottom={20} />
		</Box>
	);
}

export default Header;
