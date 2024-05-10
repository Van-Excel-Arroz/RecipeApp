import { Button, ButtonGroup, Typography } from '@mui/material';

export default function OptionalDetailsForm(params) {
	return (
		<ButtonGroup variant="contained">
			<Button>-</Button>
			<Button variant="outlined"> 0 </Button>
			<Button>+</Button>
		</ButtonGroup>
	);
}
