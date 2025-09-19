import { Box, Typography } from '@mui/material';
import Canvas from '../Canvas/Canvas';
import contract from '../../assets/commissioncontract.pdf';
import '../../App.css';
import { attributes } from '../../attributes';

function Work() {
	return (
		<>
			<Box {...attributes.workBox}>
				<Typography {...attributes.workHeader}>Want a Pet Portrait?</Typography>
				<Box {...attributes.workInfoBox}>
					<Typography {...attributes.workInfo}>
						<ol>
							<li>
								Check out the canvas sizes and types below to choose which
								option you'd like.
							</li>
							<li> Gather all of your good pet photos. </li>
							<li>
								Email me at{' '}
								<a href='mailto:laubarbe727@gmail.com'>laubarbe727@gmail.com</a>{' '}
								to let me know that you're interested, and send me the photos
								you've gathered!
							</li>
						</ol>
					</Typography>

					<Typography {...attributes.learnMore}>
						To learn more about pet portrait options, and terms of agreement,
						check out the{' '}
						<a href={contract} target='_blank'>
							commission contract
						</a>
						.
					</Typography>
				</Box>
			</Box>
			<Canvas />
		</>
	);
}

export default Work;
