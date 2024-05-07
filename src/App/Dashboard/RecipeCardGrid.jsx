import { useEffect } from 'react';
import RecipeCard from './RecipeCard';
import RecipeAlert from '../Alerts/RecipeAlert';

import { Grid } from '@mui/material';

const images = [
	'https://images.pexels.com/photos/1640777/pexels-photo-1640777.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
	'https://images.pexels.com/photos/376464/pexels-photo-376464.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
	'https://images.pexels.com/photos/70497/pexels-photo-70497.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
	'https://images.pexels.com/photos/1099680/pexels-photo-1099680.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
];

export default function RecipeCardGrid({ recipes, removeRecipe, isRecipeDeleted, setIsRecipeDeleted }) {
	useEffect(() => {
		localStorage.setItem('recipes', JSON.stringify(recipes));
		console.log('Updated recipes:', recipes);
	}, [recipes]);

	return (
		<Grid container spacing={4} mb={10}>
			{recipes.map((recipe, index) => {
				const imageUrl = images[index % images.length];

				return (
					<Grid item xs={4} key={recipe.id}>
						<RecipeCard recipe={recipe} image={imageUrl} onRemoveRecipe={removeRecipe} />
					</Grid>
				);
			})}
			<RecipeAlert state={isRecipeDeleted} setState={setIsRecipeDeleted} message={'Successfully Deleted Recipe!'} />
		</Grid>
	);
}
