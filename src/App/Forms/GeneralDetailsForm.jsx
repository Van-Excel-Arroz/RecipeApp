import { TextField, ToggleButton, ToggleButtonGroup, Radio, FormControlLabel, RadioGroup, Box } from '@mui/material';
import { useState } from 'react';

export default function GeneralDetailsForm({ recipe, handleInputChange, errors, emptyTextError, handleSetRecipe }) {
	const [privacy, setPrivacy] = useState('public');
	const handlePrivacyChange = (event, newPrivacy) => {
		if (newPrivacy !== null) {
			setPrivacy(newPrivacy);
			handleSetRecipe(prevRecipe => ({
				...recipe,
				privacyState: newPrivacy,
			}));
		}
	};

	const [selectedCategory, setSelectedCategory] = useState('');

	const handleChange = event => {
		setSelectedCategory(event.target.value);
		handleSetRecipe(prevRecipe => ({
			...recipe,
			category: selectedCategory,
		}));
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
			<ToggleButtonGroup
				value={privacy}
				exclusive
				onChange={handlePrivacyChange}
				className="ToggleButtonGroup"
				sx={{ mb: '2rem' }}
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
				<Box
					sx={{
						width: '40%',
						mx: 'auto',
					}}
				>
					<FormControlLabel
						value="Breakfast"
						control={<Radio />}
						label="Breakfast"
						checked={selectedCategory === 'Breakfast'}
					/>
					<FormControlLabel value="Lunch" control={<Radio />} label="Lunch" checked={selectedCategory === 'Lunch'} />
					<FormControlLabel value="Dinner" control={<Radio />} label="Dinner" checked={selectedCategory === 'Dinner'} />
					<FormControlLabel
						value="Appetizer"
						control={<Radio />}
						label="Appetizer"
						checked={selectedCategory === 'Appetizer'}
					/>
					<FormControlLabel value="Soup" control={<Radio />} label="Soup" checked={selectedCategory === 'Soup'} />
					<FormControlLabel value="Salad" control={<Radio />} label="Salad" checked={selectedCategory === 'Salad'} />
					<FormControlLabel
						value="Main Dish"
						control={<Radio />}
						label="Main Dish"
						checked={selectedCategory === 'Main Dish'}
					/>
					<FormControlLabel
						value="Side Dish"
						control={<Radio />}
						label="Side Dish"
						checked={selectedCategory === 'Side Dish'}
					/>
					<FormControlLabel
						value="Dessert"
						control={<Radio />}
						label="Dessert"
						checked={selectedCategory === 'Dessert'}
					/>
					<FormControlLabel
						value="Beverage"
						control={<Radio />}
						label="Beverage"
						checked={selectedCategory === 'Beverage'}
					/>
					<FormControlLabel value="Salad" control={<Radio />} label="Salad" checked={selectedCategory === 'Salad'} />
				</Box>
			</RadioGroup>
		</>
	);
}
