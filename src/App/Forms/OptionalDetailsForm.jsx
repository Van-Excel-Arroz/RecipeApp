import { Button, ButtonGroup, Typography } from '@mui/material';

export default function OptionalDetailsForm(params) {
	return (
		<ButtonGroup variant="contained">
			<Button>-</Button>
			<Button variant="outlined" disabled>
				<Typography sx={{ color: '#000' }}>0</Typography>
			</Button>
			<Button>+</Button>
		</ButtonGroup>
	);
}
