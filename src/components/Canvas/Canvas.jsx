import Card from '@mui/material/Card';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea, Box, Tooltip } from '@mui/material';
import {
	Table,
	TableBody,
	TableCell,
	TableContainer,
	TableHead,
	TableRow,
	Paper,
} from '@mui/material';
import '../../App.css';
import { attributes } from '../../attributes';
import { styles } from '../../styles';

const canvasSizes = [
	'../images/8x10.jpg',
	'../images/9x12.jpg',
	'../images/11x14.jpg',
	'../images/12x16.jpg',
];

const canvasObjects = [
	{
		name: 'Canvas Board',
		image: '../images/canvasboard.jpg',
	},
	{
		name: 'Canvas Paper',
		image: '../images/canvaspaper.jpg',
	},
	{
		name: 'Close Up Canvas Paper',
		image: '../images/closeupcanvaspaper.jpg',
	},
	{
		name: 'Stretched Canvas',
		image: '../images/stretchedcanvas.jpg',
	},
];

function createData(name, price1, price2, price3, price4) {
	return { name, price1, price2, price3, price4 };
}

const rows = [
	createData('Canvas Paper', '$125', '$150', '$175', '$200'),
	createData('Canvas Board', '$150', '$175', '$200', '$225'),
	createData('Stretched Canvas', '$175', '$200', '$225', '$250'),
];

export default function Canvas() {
	return (
		<Box width={'100%'} sx={{ bgcolor: '#c6c6c6' }}>
			<Typography {...attributes.canvasHeader}>
				Canvas Sizes and Materials
			</Typography>
			<Box sx={{ p: 5, display: 'flex', justifyContent: 'center' }}>
				<TableContainer component={Paper} sx={{ maxWidth: 700 }}>
					<Table
						sx={{ minWidth: 320, bgcolor: '#e5e5e5' }}
						aria-label='simple table'
					>
						<TableHead>
							<TableRow>
								<TableCell></TableCell>
								<TableCell align='right' sx={{ fontWeight: 'bold' }}>
									8" x 10"
								</TableCell>
								<TableCell align='right' sx={{ fontWeight: 'bold' }}>
									9" x 12"
								</TableCell>
								<TableCell align='right' sx={{ fontWeight: 'bold' }}>
									11" x 14"
								</TableCell>
								<TableCell align='right' sx={{ fontWeight: 'bold' }}>
									12" x 16"
								</TableCell>
							</TableRow>
						</TableHead>
						<TableBody>
							{rows.map((row) => (
								<TableRow
									key={row.name}
									sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
								>
									<TableCell
										component='th'
										scope='row'
										sx={{ fontWeight: 'bold' }}
									>
										{row.name}
									</TableCell>
									<TableCell align='right'>{row.price1}</TableCell>
									<TableCell align='right'>{row.price2}</TableCell>
									<TableCell align='right'>{row.price3}</TableCell>
									<TableCell align='right'>{row.price4}</TableCell>
								</TableRow>
							))}
						</TableBody>
					</Table>
				</TableContainer>
			</Box>
			<Typography
				fontSize={'300%'}
				align='center'
				marginTop={5}
				fontFamily={'Italiana'}
			>
				Sizes
			</Typography>
			<Typography align='center' variant='subtitle2' marginBottom={5}>
				*See hand size in photos for reference*
			</Typography>
			<Box sx={styles.canvasSizes}>
				{canvasSizes.map((canvas) => (
					<Tooltip
						key={canvas}
						title={canvas.substring(
							canvas.lastIndexOf('/') + 1,
							canvas.lastIndexOf('.')
						)}
						arrow
						followCursor
					>
						<Card key={canvas} sx={styles.canvasCard}>
							<CardActionArea>
								<CardMedia
									component='img'
									height='220'
									image={canvas}
									alt={canvas}
								/>
							</CardActionArea>
						</Card>
					</Tooltip>
				))}
			</Box>
			<Typography {...attributes.materialsHeader}>Materials</Typography>
			<Box sx={styles.materialsHeader}>
				{canvasObjects.map((canvas) => (
					<Tooltip title={canvas.name} arrow followCursor>
						<Card key={canvas.name} sx={styles.materialsCard}>
							<CardActionArea>
								<CardMedia
									component='img'
									height='220'
									image={canvas.image}
									alt={canvas.image}
								/>
							</CardActionArea>
						</Card>
					</Tooltip>
				))}
			</Box>
		</Box>
	);
}
