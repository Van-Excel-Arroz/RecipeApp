import React from 'react';
import { IconButton, TextField, Box, Stack } from '@mui/material';
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
			<Stack sx={{ width: '20%' }}>
				<TextField
					variant="standard"
					placeholder="Search Recipe"
					fullWidth
					value={localSearchTerm}
					onChange={handleSearchChange}
				/>
			</Stack>
			<IconButton color="inherit">
				<FilterListIcon />
			</IconButton>
		</Box>
	);
}
