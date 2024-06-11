import FilterListIcon from '@mui/icons-material/FilterList';

import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';
import {
	IconButton,
	Tooltip,
	Menu,
	Typography,
	Button,
	Divider,
	FormGroup,
	FormControlLabel,
	Checkbox,
	Stack,
	TextField,
} from '@mui/material';
import { useState } from 'react';

export default function RecipeFilter() {
	const [anchorEl, setAnchorEl] = useState(null);
	const [checkedCategory, setCheckedCategory] = useState({
		Lunch: false,
		Breakfast: false,
		Dinner: false,
		Appetizer: false,
		Soup: false,
		Salad: false,
		MainDish: false,
		SideDish: false,
		Dessert: false,
		Beverage: false,
	});

	const categories = Object.keys(checkedCategory);

	const handleCheckboxChange = event => {
		setCheckedCategory({
			...checkedCategory,
			[event.target.name]: event.target.checked,
		});
	};

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
						width: '600px',
						padding: '10px 20px',
					},
				}}
			>
				<Typography fontWeight="bold">Category</Typography>
				<Divider />
				<FormGroup>
					<Stack direction="row" spacing={1} flexWrap="wrap" mb={2}>
						{categories.map(category => (
							<FormControlLabel
								// style={{ border: '1px solid black', borderRadius: '50px', paddingRight: '10px', margin: '8px 10px' }}
								key={category}
								control={
									<Checkbox checked={checkedCategory[category]} onChange={handleCheckboxChange} name={category} />
								}
								label={category}
							/>
						))}
					</Stack>
				</FormGroup>

				<Typography fontWeight="bold">Servings</Typography>
				<Divider />
				<Stack direction="row" m="20px 0 30px 0">
					<Button variant="contained">
						<RemoveIcon />
					</Button>
					<TextField variant="outlined" sx={{ m: '0 10px' }} />
					<Button variant="contained">
						<AddIcon />
					</Button>
				</Stack>

				<Typography fontWeight="bold">Cook Time</Typography>
				<Divider />
				<Button variant="contained">Show Results</Button>
			</Menu>
		</>
	);
}
