import { TextField } from '@mui/material';

export default function InstructionForm({ recipe, handleInputChange, errors, emptyTextError }) {
	return (
		<>
			<h1>Instruction</h1>

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
