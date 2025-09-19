import * as React from 'react';
import Card from '@mui/material/Card';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import {
	CardActionArea,
	Box,
	Button,
	Modal,
	Fade,
	Backdrop,
} from '@mui/material';
import '../../App.css';
import { attributes } from '../../attributes';
import { styles } from '../../styles';

const pets = [
	'/src/assets/pet1.jpeg',
	'/src/assets/pet2.jpeg',
	'/src/assets/pet3.jpeg',
	'/src/assets/pet4.jpeg',
	'/src/assets/pet5.jpeg',
	'/src/assets/pet6.png',
];

export default function PaintingCard() {
	const [open, setOpen] = React.useState(false);
	const handleOpen = () => setOpen(true);
	const handleClose = () => setOpen(false);

	return (
		<Box id='Gallery' width={'100%'} sx={{ bgcolor: '#e5e5e5' }}>
			<Typography {...attributes.galleryHeader}>Gallery</Typography>
			<Box className='gallery-container' paddingBottom={10}>
				{pets.map((pet) => (
					<Card key={pet} sx={styles.petCard}>
						<CardActionArea>
							<CardMedia component='img' height='400' image={pet} alt={pet} />
						</CardActionArea>
						<div style={styles.petCardAction}>
							<Button onClick={handleOpen} sx={styles.petCardButton}>
								More Info
							</Button>
							<Modal
								open={open}
								onClose={handleClose}
								slots={{ backdrop: Backdrop }}
								{...attributes.galleryModal}
							>
								<Fade in={open} timeout={500}>
									<Box sx={styles.modalBox}>
										<Typography
											id='transition-modal-title'
											variant='h6'
											component='h2'
										>
											Canvas Size and Type
										</Typography>
										<Typography
											id='transition-modal-description'
											sx={{ mt: 2 }}
										>
											Size: 9x12 <br />
											Type: Streched Canvas
										</Typography>
									</Box>
								</Fade>
							</Modal>
						</div>
					</Card>
				))}
			</Box>
		</Box>
	);
}
