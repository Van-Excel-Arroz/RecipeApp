import { Button, ButtonGroup, Typography } from '@mui/material';
import { useState } from 'react';

export default function OptionalDetailsForm(params) {
	const [servings, setServings] = useState(0);

	const addServing = () => {
		setServings(servings + 1);
	};

	const reduceServing = () => {
		if (servings > 0) {
			setServings(servings - 1);
		}
	};
	return (
		<>
			<ButtonGroup variant="contained">
				<Button onClick={reduceServing}>-</Button>
				<Button variant="outlined" disabled>
					<Typography sx={{ color: '#000', p: '0 0.5rem' }}>{servings}</Typography>
				</Button>
				<Button onClick={addServing}>+</Button>
			</ButtonGroup>
		</>
	);
}
