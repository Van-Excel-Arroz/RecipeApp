import FilterListIcon from '@mui/icons-material/FilterList';
import { IconButton, Tooltip, Menu, MenuItem } from '@mui/material';
import { useState } from 'react';

export default function RecipeFilter() {
	const [anchorEl, setAnchorEl] = useState(null);
	const open = Boolean(anchorEl);

	return (
		<>
			<Tooltip title="Filter">
				<IconButton>
					<FilterListIcon />
				</IconButton>
			</Tooltip>
		</>
	);
}
