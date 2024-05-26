import React from 'react';
import { AppBar, Toolbar, IconButton, InputBase } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import FilterListIcon from '@mui/icons-material/FilterList';

export default function RecipeSearchAppBar() {
	return (
		<AppBar position="static" sx={{ width: '20%' }}>
			<Toolbar>
				<InputBase placeholder="Search Google Maps" inputProps={{ 'aria-label': 'search google maps' }} />
				<IconButton color="inherit" aria-label="search">
					<SearchIcon />
				</IconButton>
				<IconButton color="inherit" aria-label="locate">
					<FilterListIcon />
				</IconButton>
			</Toolbar>
		</AppBar>
	);
}
