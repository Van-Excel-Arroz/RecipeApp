import FileUploadIcon from '@mui/icons-material/FileUpload';
import { Button, ButtonGroup, Typography, TextField, Stack, Box } from '@mui/material';
import { useState } from 'react';

export default function OptionalDetailsForm({ handleSetRecipe, handleCookTimeChange, recipe }) {
	const [servings, setServings] = useState(0);

	const addServing = () => {
		const newServings = servings + 1;
		setServings(newServings);
		handleSetRecipe(prevRecipe => ({
			...recipe,
			servings: newServings,
		}));
	};

	const reduceServing = () => {
		if (servings > 0) {
			const newServings = servings - 1;
			setServings(newServings);
			handleSetRecipe(prevRecipe => ({
				...recipe,
				servings: newServings,
			}));
		}
	};

	return (
		<>
			<h1 style={{ marginBottom: '0' }}>Optional Details</h1>
			<h3 style={{ marginTop: '0' }}>Serving</h3>
			<ButtonGroup variant="contained" sx={{ mb: '2rem' }}>
				<Button onClick={reduceServing} sx={{ fontSize: '1.5rem', p: '0 1.5rem' }} disabled={servings <= 0}>
					-
				</Button>
				<Button variant="outlined" disabled>
					<Typography sx={{ color: '#000', p: '0 0.5rem', fontSize: '1.4rem' }}>{servings}</Typography>
				</Button>
				<Button onClick={addServing} sx={{ fontSize: '1.5rem', p: '0 1.5rem' }} disabled={servings === 100}>
					+
				</Button>
			</ButtonGroup>

			<h3>Cook Time</h3>
			<Stack direction="row" spacing={2} mb="2rem">
				<TextField
					type="number"
					label="Hour"
					name="hours"
					onChange={handleCookTimeChange}
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
					name="minutes"
					onChange={handleCookTimeChange}
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
					name="seconds"
					onChange={handleCookTimeChange}
					sx={{ width: '100px' }}
					InputProps={{
						inputProps: {
							min: 0,
							max: 60,
						},
					}}
				></TextField>
			</Stack>

			<h3>Upload Image</h3>
			<Box
				sx={{
					height: '200px',
					width: '200px',
					display: 'flex',
					flexDirection: 'column',
					alignItems: 'center',
					justifyContent: 'center',
					border: '2px dashed #ffcca2',
					backgroundColor: '#f7f7f7',
					cursor: 'pointer',
				}}
			>
				<FileUploadIcon sx={{ fontSize: '5rem', color: '#ffcca2' }} />
				<Typography sx={{ color: '#c1c1c1' }}>Choose a File</Typography>
			</Box>
		</>
	);
}
