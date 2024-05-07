import { TextField } from '@mui/material';

export default function IngredientsForm({ recipe, handleInputChange, errors, emptyTextError }) {
	return (
		<>
			<h1>Ingredients</h1>
			<TextField
				id="filled-multiline-flexible"
				label="Ingredients"
				variant="outlined"
				fullWidth
				sx={{ marginBottom: '16px' }}
				multiline
				rows={8}
				name="ingredients"
				value={recipe.ingredients}
				onChange={handleInputChange}
				error={errors.ingredients}
				helperText={errors.ingredients ? emptyTextError : ''}
			/>
		</>
	);
}
