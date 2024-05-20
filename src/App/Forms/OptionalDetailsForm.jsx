import { Button, ButtonGroup, Typography, TextField, Stack } from '@mui/material';
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
			<h3>Serving</h3>
			<ButtonGroup variant="contained" sx={{ mb: '2rem' }}>
				<Button onClick={reduceServing} sx={{ fontSize: '1.5rem', p: '0 1.5rem' }}>
					-
				</Button>
				<Button variant="outlined" disabled>
					<Typography sx={{ color: '#000', p: '0 0.5rem', fontSize: '1.4rem' }}>{servings}</Typography>
				</Button>
				<Button onClick={addServing} sx={{ fontSize: '1.5rem', p: '0 1.5rem' }}>
					+
				</Button>
			</ButtonGroup>

			<h3>Cook Time</h3>
			<Stack direction="row" spacing={2}>
				<TextField
					type="number"
					label="Hour"
					sx={{ width: '100px' }}
					InputProps={{
						inputProps: {
							min: 0,
							max: 24,
						},
					}}
				></TextField>

				<TextField
					type="number"
					label="Minute"
					sx={{ width: '100px' }}
					InputProps={{
						inputProps: {
							min: 0,
							max: 60,
						},
					}}
				></TextField>

				<TextField
					type="number"
					label="Second"
					sx={{ width: '100px' }}
					InputProps={{
						inputProps: {
							min: 0,
							max: 60,
						},
					}}
				></TextField>
			</Stack>
		</>
	);
}
