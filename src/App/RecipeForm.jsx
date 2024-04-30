import { TextField, Box } from '@mui/material';

export default function RecipeForm({
  handleSubmit,
  handleInputChange,
  recipe,
  errors,
  emptyTextError,
}) {
  return (
    <form onSubmit={handleSubmit}>
      <Box
        width={500}
        display="flex"
        flexDirection="column"
        alignItems="center"
        sx={{
          px: 5,
          wordWrap: 'break-word',
        }}
      >
        <TextField
          id="filled-multiline-flexible"
          label="Title"
          variant="outlined"
          fullWidth
          sx={{ marginBottom: '16px' }}
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
          sx={{ marginBottom: '16px' }}
          multiline
          rows={4}
          name="description"
          value={recipe.description}
          onChange={handleInputChange}
          error={errors.description}
          helperText={errors.description ? emptyTextError : ''}
          inputProps={{ maxLength: 1000 }}
        />
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

        <TextField
          id="outlined-basic"
          label="Instructions"
          variant="outlined"
          fullWidth
          sx={{ marginBottom: '16px' }}
          multiline
          rows={4}
          name="instructions"
          value={recipe.instructions}
          onChange={handleInputChange}
          error={errors.instructions}
          helperText={errors.instructions ? emptyTextError : ''}
        />
      </Box>
    </form>
  );
}
