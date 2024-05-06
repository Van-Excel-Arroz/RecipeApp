import { Box, TextField } from '@mui/material';

export default function GeneralDetailsForm() {
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
					// value={recipe.title}
					// onChange={handleInputChange}
					// error={errors.title}
					// helperText={errors.title ? emptyTextError : ''}
					// inputProps={{ maxLength: 50 }}
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
					// value={recipe.description}
					// onChange={handleInputChange}
					// error={errors.description}
					// helperText={errors.description ? emptyTextError : ''}
					// inputProps={{ maxLength: 1000 }}
				/>
			</Box>
		</>
	);
}
