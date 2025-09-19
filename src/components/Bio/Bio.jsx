import { Box, Typography } from '@mui/material';
import { attributes } from '../../attributes';
import '../../App.css';

function Bio() {
	return (
		<Box className='bio-container' paddingY={10} id='About'>
			<a
				href='https://www.instagram.com/laurabarbeportraits/?hl=en'
				target='_blank'
			>
				<img
					src='/images/Profile.png'
					width={300}
					height={450}
					alt='Laura Barbé'
				/>
			</a>

			<Box className='bio-info-container'>
				<Typography {...attributes.bioHeader}>About the Artist</Typography>
				<Typography {...attributes.bioInfo}>
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
