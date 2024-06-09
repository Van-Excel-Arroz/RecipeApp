import FilterListIcon from '@mui/icons-material/FilterList';
import { IconButton, Tooltip, Menu, MenuItem, Typography, Button } from '@mui/material';
import { useState } from 'react';

export default function RecipeFilter() {
	const [anchorEl, setAnchorEl] = useState(null);
	const open = Boolean(anchorEl);

	const handleClick = event => {
		setAnchorEl(event.currentTarget);
	};

	return (
		<>
			<Tooltip title="Filter">
				<IconButton onClick={handleClick}>
					<FilterListIcon />
				</IconButton>
			</Tooltip>

			<Menu
				anchorEl={anchorEl}
				open={open}
				onClose={() => setAnchorEl(null)}
				anchorOrigin={{
					vertical: 'bottom',
					horizontal: 'right',
				}}
				transformOrigin={{
					vertical: 'top',
					horizontal: 'right',
				}}
			>
				<Typography>Category</Typography>
				<Typography>Servings</Typography>
				<Typography>Cook Time</Typography>
				<Button variant="contained">Show Results</Button>
			</Menu>
		</>
	);
}
