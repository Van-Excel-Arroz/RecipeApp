import './CSS/RecipeApp.css';

import RecipeCardGrid from './RecipeCardGrid';
import NewRecipeButton from './NewRecipeButton';
import { useState } from 'react';
import { Box } from '@mui/material';

const getInitialLocalStorageData = JSON.parse(localStorage.getItem('recipes'));

export default function RecipeDashboard() {
  const [recipes, setRecipes] = useState(getInitialLocalStorageData || []);
  const [isRecipeAdded, setIsRecipeAdded] = useState(false);
  const [isRecipeDeleted, setIsRecipeDeleted] = useState(false);

  const addRecipe = (recipe) => {
    console.log('Recieved a new recipe', recipe);
    const id = crypto.randomUUID();
    setRecipes((prevRecipes) => {
      return [...prevRecipes, { ...recipe, id }];
    });
    setIsRecipeAdded(true);
  };

  const removeRecipe = (id) => {
    console.log('Attempting to remove recipe with id:', id);

    setRecipes((prevRecipes) => {
      return prevRecipes.filter((recipe) => {
        return recipe.id !== id;
      });
    });
    setIsRecipeDeleted(true);
  };

  return (
    <div className="background-container">
      <Box sx={{ width: '85%', mx: 'auto', mt: '8rem' }}>
        <RecipeCardGrid
          recipes={recipes}
          removeRecipe={removeRecipe}
          isRecipeDeleted={isRecipeDeleted}
          setIsRecipeDeleted={setIsRecipeDeleted}
        />
      </Box>
      <NewRecipeButton
        addRecipe={addRecipe}
        isRecipeAdded={isRecipeAdded}
        setIsRecipeAdded={setIsRecipeAdded}
      />
    </div>
  );
}
