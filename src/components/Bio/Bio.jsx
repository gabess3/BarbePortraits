import { Box, Typography } from '@mui/material';
import React from 'react';
import '../../App.css';

function Bio() {
	return (
		<Box className='bio-container' paddingY={10} id='About'>
			<a
				href='https://www.instagram.com/laurabarbeportraits/?hl=en'
				target='_blank'
			>
				<img src='/images/Profile.png' width={300} height={450} />
			</a>

			<Box className='bio-info-container'>
				<Typography
					variant='h4'
					fontFamily={'Italiana'}
					fontWeight={400}
					paddingBottom={5}
					paddingTop={7}
					fontSize={'400%'}
					align='center'
				>
					About the Artist
				</Typography>
				<Typography
					variant='body1'
					width={'75%'}
					fontFamily={'Palatino'}
					align='justify'
					paddingBottom={5}
				>
					Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero
					ratione perferendis delectus maiores voluptatum modi natus voluptas
					recusandae cupiditate hic tenetur cumque laudantium nulla, at iure
					temporibus. Voluptatum, possimus ad! Lorem ipsum dolor sit amet
					consectetur adipisicing elit. Reprehenderit, labore eum. Minus quos
					quisquam laboriosam repellat! Dicta pariatur, aspernatur voluptatum
					ullam, est incidunt consequuntur molestias et eligendi non minus
					nostrum.
				</Typography>
			</Box>
		</Box>
	);
}

export default Bio;
