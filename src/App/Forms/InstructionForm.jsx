import { TextField } from '@mui/material';

export default function InstructionForm({ recipe, handleInputChange, errors, emptyTextError }) {
	return (
		<>
			<h1>Instruction</h1>
			<TextField
				id="filled-multiline-flexible"
				label="Instructions"
				variant="outlined"
				fullWidth
				sx={{ marginBottom: '16px' }}
				multiline
				rows={8}
				name="instructions"
				value={recipe.instructions}
				onChange={handleInputChange}
				error={errors.instructions}
				helperText={errors.instructions ? emptyTextError : ''}
			/>
		</>
	);
}
