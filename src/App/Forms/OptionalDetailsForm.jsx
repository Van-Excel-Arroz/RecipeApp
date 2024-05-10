import { Button, ButtonGroup, Typography } from '@mui/material';
import { useState } from 'react';

export default function OptionalDetailsForm(params) {
	const [servings, setServings] = useState(0);

	return (
		<>
			<ButtonGroup variant="contained">
				<Button>-</Button>
				<Button variant="outlined" disabled>
					<Typography sx={{ color: '#000' }}>0</Typography>
				</Button>
				<Button>+</Button>
			</ButtonGroup>
		</>
	);
}
