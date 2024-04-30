import { useState } from 'react';
import {
  Button,
  Dialog,
  DialogContent,
  DialogTitle,
  DialogActions,
  IconButton,
} from '@mui/material';

import CloseIcon from '@mui/icons-material/Close';
import RecipeForm from './RecipeForm';

export default function RecipeDialog({ onAddRecipe, onHandleClose, open }) {
  const [recipe, setRecipe] = useState({
    title: '',
    ingredients: '',
    instructions: '',
    description: '',
  });

  const [errors, setErrors] = useState({
    title: false,
    ingredients: false,
    instructions: false,
    description: false,
  });

  const emptyTextError = 'This field cannot be empty!';

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setRecipe({ ...recipe, [name]: value });
    if (value.trim() !== '') {
      setErrors({ ...errors, [name]: false });
    }
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    const newErrors = {};
    let isFormValid = true;
    Object.keys(recipe).forEach((key) => {
      if (recipe[key].trim() === '') {
        newErrors[key] = true;
        isFormValid = false;
      } else {
        newErrors[key] = false;
      }
    });

    if (isFormValid) {
      console.log('Submitting a new recipe', recipe);
      onAddRecipe(recipe);
      setRecipe({
        title: '',
        ingredients: '',
        instructions: '',
        description: '',
      }); //this will clear the form
      onHandleClose(); // close the dialog
    } else {
      setErrors(newErrors);
    }
  };

  return (
    <>
      <Dialog open={open} onClose={onHandleClose}>
        <DialogTitle
          sx={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            typography: 'h4',
            boxShadow: 4,
          }}
        >
          Add a new Recipe
        </DialogTitle>
        <IconButton onClick={onHandleClose} sx={{ position: 'absolute', right: 8, top: 8 }}>
          <CloseIcon />
        </IconButton>
        <DialogContent dividers>
          <RecipeForm
            handleSubmit={handleSubmit}
            handleInputChange={handleInputChange}
            recipe={recipe}
            errors={errors}
            emptyTextError={emptyTextError}
          />
        </DialogContent>
        <DialogActions sx={{ boxShadow: 4 }}>
          <Button
            variant="contained"
            type="submit"
            onClick={handleSubmit}
            sx={{ width: '50%', display: 'block', mx: 'auto' }}
          >
            Create Recipe
          </Button>
        </DialogActions>
      </Dialog>
    </>
  );
}
