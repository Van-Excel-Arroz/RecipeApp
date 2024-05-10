import { TextField, ToggleButton, ToggleButtonGroup } from '@mui/material';
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

			<h3>Is this a Private or Public Recipe?</h3>
			<ToggleButtonGroup value={privacy} exclusive onChange={handlePrivacyChange} className="ToggleButtonGroup">
				<ToggleButton value="public">Public</ToggleButton>
				<ToggleButton value="private">Private</ToggleButton>
			</ToggleButtonGroup>
		</>
	);
}