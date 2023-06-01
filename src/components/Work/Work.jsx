import { Box, Typography } from '@mui/material';
import Canvas from '../Canvas/Canvas';
import contract from '/images/commissioncontract.pdf';
import '../../App.css';

function Work() {
	return (
		<>
			<Box
				id='Work'
				display={'flex'}
				flexDirection={'column'}
				alignContent={'space-between'}
				alignItems={'center'}
				sx={{ p: 5 }}
				bgcolor={'#e5e5e5'}
			>
				<Typography
					variant='h4'
					fontFamily={'Italiana'}
					fontSize={'400%'}
					fontWeight={400}
					sx={{ paddingBottom: 5 }}
					align='center'
				>
					Want a Pet Portrait?
				</Typography>
				<Box
					display={'flex'}
					justifyContent={'space-around'}
					flexWrap={'wrap'}
					width={'100%'}
					alignItems={'center'}
				>
					<Typography
						variant='body1'
						fontFamily={'Palatino'}
						align='left'
						fontSize={'100%'}
						margin={2}
					>
						<ol>
							<li>
								{' '}
								Check out the canvas sizes and types below to choose which
								option you'd like.{' '}
							</li>
							<li> Gather all of your good pet photos. </li>
							<li>
								{' '}
								Email me at{' '}
								<a href='mailto:laubarbe727@gmail.com'>
									laubarbe727@gmail.com
								</a>{' '}
								to let me know that you're interested, and send me the photos
								you've gathered!{' '}
							</li>
						</ol>
					</Typography>

					<Typography
						variant='body1'
						fontFamily={'Palatino'}
						align='center'
						fontSize={'100%'}
						margin={2}
					>
						To learn more about pet portrait options, and terms of agreement,
						check out the commission contract{' '}
						<a href={contract} target='_blank'>
							here
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
