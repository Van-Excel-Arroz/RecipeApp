import RecipeFormDialog from '../Forms/RecipeFormDialog';
import RecipeAlert from '../Alerts/RecipeAlert';
import { useState } from 'react';
import { Button, Tooltip } from '@mui/material';

export default function NewRecipeButton({ addRecipe, isRecipeAdded, setIsRecipeAdded, recipe, setRecipe }) {
	const [open, setOpen] = useState(false);

	const handleClickOpen = () => {
		setOpen(true);
	};

	const handleClose = () => {
		setOpen(false);
	};

	return (
		<>
			<Tooltip title="Create Recipe" placement="top">
				<Button
					variant="contained"
					onClick={handleClickOpen}
					sx={{
						height: '4rem',
						minWidth: '4rem',
						padding: '0',
						borderRadius: '50%',
						fontSize: '3rem',
						position: 'fixed',
						bottom: '40px',
						right: '30px',
					}}
				>
					+
				</Button>
			</Tooltip>
			<RecipeFormDialog
				onAddRecipe={addRecipe}
				onHandleClose={handleClose}
				open={open}
				recipe={recipe}
				setRecipe={setRecipe}
			/>
			<RecipeAlert state={isRecipeAdded} setState={setIsRecipeAdded} message={'Successfully Added Recipe!'} />
		</>
	);
}
