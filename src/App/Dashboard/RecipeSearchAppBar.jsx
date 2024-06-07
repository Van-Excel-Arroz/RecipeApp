import React from 'react';
import { TextField, Stack } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';

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
		<Stack width="25%" flexDirection="row">
			<SearchIcon sx={{ fontSize: '20px', m: '5px 5px' }} />
			<TextField
				variant="standard"
				placeholder="Search Recipe"
				fullWidth
				value={localSearchTerm}
				onChange={handleSearchChange}
			/>
		</Stack>
	);
}
