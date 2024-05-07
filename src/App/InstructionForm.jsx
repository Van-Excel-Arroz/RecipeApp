import { TextField } from '@mui/material';

export default function InstructionForm({ recipe, handleInputChange, errors, emptyTextError }) {
	return (
		<>
			<TextField
				id="filled-multiline-flexible"
				label="Ingredients"
				variant="outlined"
				fullWidth
				sx={{ marginBottom: '16px' }}
				multiline
				rows={4}
				name="ingredients"
				value={recipe.ingredients}
				onChange={handleInputChange}
				error={errors.ingredients}
				helperText={errors.ingredients ? emptyTextError : ''}
			/>
		</>
	);
}
