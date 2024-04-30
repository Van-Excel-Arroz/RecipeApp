import { Typography } from '@mui/material';

export default function RecipeAppLogo() {
  return (
    <Typography
      sx={{
        fontSize: '2rem',
        textAlign: 'center',
        fontFamily: '"Pacifico", cursive',
        fontStyle: 'italic',
        textDecoration: 'none',
        background: 'linear-gradient(to top left,  #fab55a, #ff8c69, #ffdbb6 )',
        WebkitBackgroundClip: 'text',
        WebkitTextFillColor: 'transparent',
        rotate: '-5deg',
        display: 'inline-block',
        padding: '0 10px 10px 0',
        transform: 'scale(1.2)',
      }}
    >
      Recipe
    </Typography>
  );
}
