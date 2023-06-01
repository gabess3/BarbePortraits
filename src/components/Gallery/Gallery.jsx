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

const pets = [
	'/images/pet1.jpeg',
	'/images/pet2.jpeg',
	'/images/pet3.jpeg',
	'/images/pet4.jpeg',
	'/images/pet5.jpeg',
	'/images/pet6.png',
];

// Descrption of each work will go here to map with the rest of the gallery cards.

/* const descriptions = [
  {

  },
] */

const style = {
	position: 'absolute',
	top: '50%',
	left: '50%',
	transform: 'translate(-50%, -50%)',
	width: 400,
	bgcolor: 'background.paper',
	border: '2px solid #000',
	boxShadow: 24,
	p: 4,
};

export default function PaintingCard() {
	const [open, setOpen] = React.useState(false);
	const handleOpen = () => setOpen(true);
	const handleClose = () => setOpen(false);

	return (
		<Box id='Gallery' width={'100%'} sx={{ bgcolor: '#e5e5e5' }}>
			<Typography
				fontSize={'400%'}
				fontFamily={'Italiana'}
				fontWeight={400}
				letterSpacing={3}
				align='center'
				p={8}
			>
				Gallery
			</Typography>
			<Box className='gallery-container' paddingBottom={10}>
				{pets.map((pet) => (
					<Card
						key={pet}
						sx={{
							width: 320,
							borderRadius: 2,
							boxShadow: '0px 8px 13px black',
							transition: 'all .3s ease-in-out',
							'&:hover': {
								boxShadow: '0px 10px 15px black',
								transform: 'scale(1.1)',
							},
							m: 2.3,
						}}
					>
						<CardActionArea>
							<CardMedia component='img' height='400' image={pet} alt={pet} />
						</CardActionArea>
						<div
							style={{
								display: 'flex',
								justifyContent: 'center',
								backgroundColor: '#353935',
							}}
						>
							<Button
								onClick={handleOpen}
								sx={{
									color: 'whitesmoke',
									fontWeight: 'bold',
									padding: 2,
								}}
							>
								Click here to see more!
							</Button>
							<Modal
								open={open}
								onClose={handleClose}
								aria-labelledby='modal-modal-title'
								aria-describedby='modal-modal-description'
								slots={{ backdrop: Backdrop }}
								slotProps={{
									backdrop: {
										timeout: 500,
									},
								}}
							>
								<Fade in={open} timeout={500}>
									<Box sx={style}>
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
