import { Link } from 'react-router-dom';
import { Box } from '@mui/material';

import RecipeNavbar from './RecipeNavbar';

export default function RecipeLandingPage() {
  return (
    <>
      <Box sx={{ width: '85%', mx: 'auto' }}>
        <button>
          <Link to="/dashboard">Get Started</Link>
        </button>
      </Box>
    </>
  );
}
