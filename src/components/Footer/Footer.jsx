import { Box, Typography } from '@mui/material';
import MailIcon from '@mui/icons-material/Mail';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import InstagramIcon from '@mui/icons-material/Instagram';
import { styles } from '../../styles';

function Footer() {
	return (
		<>
			<Box id='Contact' sx={styles.footerBox}>
				<a href='mailto:laubarbe727@gmail.com' style={{ color: 'black' }}>
					<MailIcon sx={styles.icon} />
				</a>
				<a
					href='https://www.linkedin.com/in/laura-barbe/'
					target='_blank'
					style={{ color: 'black' }}
				>
					<LinkedInIcon sx={styles.icon} />
				</a>
				<a
					href='https://www.instagram.com/laurabarbeportraits/?hl=en'
					target='_blank'
					style={{ color: 'black' }}
				>
					<InstagramIcon sx={styles.icon} />
				</a>
			</Box>
			<Box sx={styles.copyright}>
				<Typography color={'white'} variant='subtitle2'>
					&copy; Barbé Portraits 2019
				</Typography>
			</Box>
		</>
	);
}

export default Footer;
