import FilterListIcon from '@mui/icons-material/FilterList';
import { IconButton, Tooltip } from '@mui/material';

export default function RecipeFilter() {
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
