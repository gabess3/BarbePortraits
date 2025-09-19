import divider from '../src/assets/divider.png';

export const attributes = {
	bioHeader: {
		variant: 'h4',
		fontFamily: 'Italiana',
		fontWeight: 400,
		paddingBottom: 5,
		paddingTop: 7,
		fontSize: '400%',
		align: 'center',
	},
	bioInfo: {
		variant: 'body1',
		width: '75%',
		fontFamily: 'Palatino',
		align: 'justify',
		paddingBottom: 5,
	},
	canvasHeader: {
		fontSize: '400%',
		fontFamily: 'Italiana',
		fontWeight: 400,
		letterSpacing: 3,
		align: 'center',
		p: 5,
		id: 'Canvas',
	},
	materialsHeader: {
		fontSize: '300%',
		align: 'center',
		paddingY: 5,
		fontFamily: 'Italiana',
		bgcolor: '#c6c6c6',
		color: 'black',
	},
	galleryHeader: {
		fontSize: '400%',
		fontFamily: 'Italiana',
		fontWeight: 400,
		letterSpacing: 3,
		align: 'center',
		p: 8,
	},
	galleryModal: {
		slotProps: {
			backdrop: {
				timeout: 500,
				sx: {
					backgroundColor: '#8080804e',
				},
			},
		},
	},
	titleHeader: {
		align: 'center',
		fontFamily: 'Italiana',
		id: 'barbe',
	},
	titleSubheader: {
		variant: 'subtitle',
		fontFamily: 'cursive',
		align: 'center',
		fontSize: '200%',
		paddingBottom: 2,
	},
	divider: {
		src: divider,
		width: '70%',
		height: '90%',
		alt: 'divider',
		id: 'divider',
	},
	medNavbar: {
		id: 'menu-appbar',
		anchorOrigin: {
			vertical: 'bottom',
			horizontal: 'left',
		},
		transformOrigin: {
			vertical: 'top',
			horizontal: 'left',
		},
	},
	workBox: {
		id: 'Work',
		display: 'flex',
		flexDirection: 'column',
		alignContent: 'space-between',
		alignItems: 'center',
		sx: {
			p: 5,
		},
		bgcolor: '#e5e5e5',
	},
	workHeader: {
		variant: 'h4',
		fontFamily: 'Italiana',
		fontSize: '400%',
		fontWeight: 400,
		sx: {
			paddingBottom: 5,
		},
		align: 'center',
	},
	workInfoBox: {
		display: 'flex',
		justifyContent: 'space-around',
		flexWrap: 'wrap',
		width: '100%',
		alignItems: 'center',
	},
	workInfo: {
		variant: 'body1',
		fontFamily: 'Palatino',
		align: 'left',
		fontSize: '100%',
		margin: 2,
	},
	learnMore: {
		variant: 'body1',
		fontFamily: 'Palatino',
		align: 'center',
		fontSize: '100%',
		margin: 2,
	},
};
