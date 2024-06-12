import { TextField, ToggleButton, ToggleButtonGroup, Radio, RadioGroup, Box, FormControlLabel } from '@mui/material';
import { useState } from 'react';

export default function GeneralDetailsForm({ recipe, handleInputChange, errors, emptyTextError, handleSetRecipe }) {
	const [privacy, setPrivacy] = useState('public');
	const handlePrivacyChange = (event, newPrivacy) => {
		if (newPrivacy !== null) {
			setPrivacy(newPrivacy);
			handleSetRecipe(prevRecipe => ({
				...prevRecipe,
				privacyState: newPrivacy,
			}));
		}
	};

	const [selectedCategory, setSelectedCategory] = useState('');

	const handleChange = event => {
		const newCategory = event.target.value;
		setSelectedCategory(newCategory);
		handleSetRecipe(prevRecipe => ({
			...prevRecipe,
			category: newCategory,
		}));
	};

	const categories = [
		'Breakfast',
		'Lunch',
		'Dinner',
		'Appetizer',
		'Soup',
		'Salad',
		'Main Dish',
		'Side Dish',
		'Dessert',
		'Beverage',
	];

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
			<ToggleButtonGroup
				value={privacy}
				exclusive
				onChange={handlePrivacyChange}
				className="ToggleButtonGroup"
				sx={{ mb: '1rem' }}
			>
				<ToggleButton value="public" sx={{ fontSize: '1.5rem' }}>
					Public
				</ToggleButton>
				<ToggleButton value="private" sx={{ fontSize: '1.5rem' }}>
					Private
				</ToggleButton>
			</ToggleButtonGroup>

			<h3>Select one Category</h3>

			<RadioGroup value={selectedCategory} onChange={handleChange}>
				<Box sx={{ width: '60%', mx: 'auto' }}>
					{categories.map(category => (
						<FormControlLabel key={category} value={category} control={<Radio />} label={category} />
					))}
				</Box>
			</RadioGroup>
		</>
	);
}
