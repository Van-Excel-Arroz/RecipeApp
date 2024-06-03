import React from 'react';
import { AppBar, Toolbar, IconButton, InputBase, Box, Divider } from '@mui/material';
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
		<Box sx={{ display: 'flex', justifyContent: 'flex-end', mb: '2rem' }}>
			<AppBar position="static" sx={{ width: '30%' }}>
				<Toolbar>
					<InputBase placeholder="Search Recipe" fullWidth value={localSearchTerm} onChange={handleSearchChange} />
					<IconButton color="inherit">
						<SearchIcon />
					</IconButton>
					<Divider orientation="vertical" sx={{ height: '28px', mx: 1 }} />
					<IconButton color="inherit">
						<FilterListIcon />
					</IconButton>
				</Toolbar>
			</AppBar>
		</Box>
	);
}
