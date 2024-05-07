import { Box } from '@mui/material';

export default function RecipeFormLayout({ children }) {
	return (
		<Box width="80%" mx="auto" display="flex" flexDirection="column" alignItems="center">
			{children}
		</Box>
	);
}
