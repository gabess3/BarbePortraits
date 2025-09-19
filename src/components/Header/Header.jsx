import { Typography, Box } from '@mui/material';
import '../../App.css';
import { attributes } from '../../attributes';

function Header() {
	return (
		<Box className='header-container'>
			<Typography
				{...attributes.titleHeader}
				sx={{
					paddingTop: 15,
					fontSize: '700%',
				}}
			>
				Barbé
			</Typography>
			<Typography {...attributes.titleSubheader}>Portraits</Typography>
			<img {...attributes.divider} style={{ align: 'center', maxWidth: 650 }} />
			<Box paddingBottom={20} />
		</Box>
	);
}

export default Header;
