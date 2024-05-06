import { Box, TextField, ToggleButton, ToggleButtonGroup } from '@mui/material';
import { useState } from 'react';

export default function GeneralDetailsForm({ recipe, handleInputChange, errors, emptyTextError }) {
	const [privacy, setPrivacy] = useState('public');
	const handlePrivacyChange = (event, newPrivacy) => {
		if (newPrivacy !== null) {
			setPrivacy(newPrivacy);
		}
	};

	return (
		<>
			<Box width="80%" mx="auto" display="flex" flexDirection="column" alignItems="center">
				<h1>General Details</h1>
				<TextField
					id="filled-multiline-flexible"
					label="Title"
					variant="outlined"
					fullWidth
					sx={{ mb: '16px' }}
					multiline
					rows={1}
					name="title"
					value={recipe.title}
					onChange={handleInputChange}
					error={errors.title}
					helperText={errors.title ? emptyTextError : ''}
					inputProps={{ maxLength: 50 }}
				/>
				<TextField
					id="filled-multiline-flexible"
					label="Description"
					variant="outlined"
					fullWidth
					sx={{ mb: '16px' }}
					multiline
					rows={5}
					name="description"
					value={recipe.description}
					onChange={handleInputChange}
					error={errors.description}
					helperText={errors.description ? emptyTextError : ''}
					inputProps={{ maxLength: 1000 }}
				/>
				<ToggleButtonGroup value={privacy} exclusive onChange={handlePrivacyChange}>
					<ToggleButton value="public">Public</ToggleButton>
					<ToggleButton value="private">Private</ToggleButton>
				</ToggleButtonGroup>
			</Box>
		</>
	);
}
