import '../CSS/RecipeApp.css';

import RecipeCardGrid from './RecipeCardGrid';
import NewRecipeButton from './NewRecipeButton';
import RecipeSearchAppBar from './RecipeSearchAppBar';
import { useState, useEffect } from 'react';
import { Box, Divider } from '@mui/material';

const getInitialLocalStorageData = JSON.parse(localStorage.getItem('recipes'));

export default function RecipeDashboard() {
	const [recipes, setRecipes] = useState(getInitialLocalStorageData || []);
	const [isRecipeAdded, setIsRecipeAdded] = useState(false);
	const [isRecipeDeleted, setIsRecipeDeleted] = useState(false);
	const [filteredRecipes, setFilteredRecipes] = useState(getInitialLocalStorageData || []);
	const [searchTerm, setSearchTerm] = useState('');

	useEffect(() => {
		filterRecipes(searchTerm);
	}, [recipes, searchTerm]);

	const filterRecipes = searchTerm => {
		const filtered = recipes.filter(recipe => recipe.title.toLowerCase().includes(searchTerm.toLowerCase()));
		setFilteredRecipes(filtered);
	};

	const [recipe, setRecipe] = useState({
		title: '',
		ingredients: '',
		instructions: '',
		description: '',
		privacyState: 'public',
		servings: 0,
		cookTime: {
			hours: 0,
			minutes: 0,
			seconds: 0,
		},
		likes: 0,
		category: '',
	});

	const addRecipe = recipe => {
		console.log('Recieved a new recipe', recipe);
		const id = crypto.randomUUID();
		setRecipes(prevRecipes => {
			return [...prevRecipes, { ...recipe, id }];
		});
		setIsRecipeAdded(true);
	};

	const removeRecipe = id => {
		console.log('Attempting to remove recipe with id:', id);

		setRecipes(prevRecipes => {
			return prevRecipes.filter(recipe => {
				return recipe.id !== id;
			});
		});
		setIsRecipeDeleted(true);
	};

	return (
		<div className="background-container">
			<Box
				sx={{
					width: '85%',
					mx: 'auto',
					mt: '8rem',
				}}
			>
				<RecipeSearchAppBar filterRecipes={filterRecipes} setSearchTerm={setSearchTerm} />
				<Divider sx={{ mb: '2rem' }} />
				<RecipeCardGrid
					recipes={filteredRecipes}
					removeRecipe={removeRecipe}
					isRecipeDeleted={isRecipeDeleted}
					setIsRecipeDeleted={setIsRecipeDeleted}
				/>
			</Box>
			<NewRecipeButton
				addRecipe={addRecipe}
				isRecipeAdded={isRecipeAdded}
				setIsRecipeAdded={setIsRecipeAdded}
				recipe={recipe}
				setRecipe={setRecipe}
			/>
		</div>
	);
}
