import FilterListIcon from '@mui/icons-material/FilterList';
import { IconButton, Tooltip, Menu, MenuItem, Typography, Button, Divider } from '@mui/material';
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
				PaperProps={{
					style: {
						width: '550px',
						padding: '10px 20px',
					},
				}}
			>
				<Typography fontWeight="bold">Category</Typography>
				<Divider />
				<Typography fontWeight="bold">Servings</Typography>
				<Divider />
				<Typography fontWeight="bold">Cook Time</Typography>
				<Divider />
				<Button variant="contained">Show Results</Button>
			</Menu>
		</>
	);
}
