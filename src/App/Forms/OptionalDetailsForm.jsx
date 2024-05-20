import FileUploadIcon from '@mui/icons-material/FileUpload';
import { Button, ButtonGroup, Typography, TextField, Stack, Box } from '@mui/material';
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
			<h1 style={{ marginBottom: '0' }}>Optional Details</h1>
			<h3 style={{ marginTop: '0' }}>Serving</h3>
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
			<Stack direction="row" spacing={2} mb="2rem">
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

			<h3>Upload Image</h3>
			<Box
				sx={{
					height: '200px',
					width: '200px',
					display: 'flex',
					alignItems: 'center',
					justifyContent: 'center',
					border: '2px dashed #ffcca2',
					backgroundColor: '#f2f2f2',
					cursor: 'pointer',
				}}
			>
				<FileUploadIcon sx={{ fontSize: '5rem', color: '#ffcca2' }} />
			</Box>
		</>
	);
}
