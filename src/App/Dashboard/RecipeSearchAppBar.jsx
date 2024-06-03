import React from 'react';
import { AppBar, Toolbar, IconButton, TextField, Box, Divider } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import FilterListIcon from '@mui/icons-material/FilterList';
import { useState } from 'react';

export default function RecipeSearchAppBar({ filterRecipes, setSearchTerm }) {
	const [localSearchTerm, setLocalSearchTerm] = useState('');

	const handleSearchChange = event => {
		const newSearchTerm = event.target.value;
		setLocalSearchTerm(newSearchTerm);
		setSearchTerm(newSearchTerm);
		filterRecipes(newSearchTerm);
	};

	return (
		<Box sx={{ display: 'flex', justifyContent: 'space-between', mb: '2rem' }}>
			<TextField placeholder="Search Recipe" fullWidth value={localSearchTerm} onChange={handleSearchChange} />
			<IconButton color="inherit">
				<FilterListIcon />
			</IconButton>
		</Box>
	);
}
