import '../../CSS/RecipeCard.css';

const boxShadow = {
	boxShadow: 'rgba(50, 50, 93, 0.25) 0px 13px 27px -5px, rgba(0, 0, 0, 0.3) 0px 8px 16px -8px',
};

import * as React from 'react';

import {
	Chip,
	Card,
	CardMedia,
	Stack,
	Typography,
	IconButton,
	Rating,
	Tooltip,
	CardActions,
	Avatar,
} from '@mui/material/';

import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import FavoriteIcon from '@mui/icons-material/Favorite';
import ActionMenuOverlay from './ActionMenuOverlay';
import RecipeDetailsDialog from './Recipe Details/RecipeDetailsDialog';
import RestaurantIcon from '@mui/icons-material/Restaurant';
import AvTimerIcon from '@mui/icons-material/AvTimer';
import { useState } from 'react';

export default function RecipeCard({ recipe, image, onRemoveRecipe }) {
	const [hover, setHover] = useState(false);
	const [openDialogRecipe, setOpenDialogRecipe] = useState(false);

	const handleClickOpen = () => {
		setOpenDialogRecipe(true);
		setHover(false);
	};

	const handleClose = event => {
		event.stopPropagation();
		setOpenDialogRecipe(false);
	};

	return (
		<Card className="Card" onMouseEnter={() => setHover(true)} onMouseLeave={() => setHover(false)} sx={boxShadow}>
			<RecipeDetailsDialog
				open={openDialogRecipe}
				handleClose={handleClose}
				onRemoveRecipe={onRemoveRecipe}
				recipe={recipe}
				image={image}
			/>
			<CardMedia component="img" image={image} height="140" />
			<ActionMenuOverlay hover={hover} onHandleClickOpen={handleClickOpen} />

			<Stack direction="column">
				<Stack direction="column" useFlexGap px={2} pt={1}>
					<Typography gutterBottom variant="h6" className="recipe-title">
						{recipe.title}
					</Typography>

					<Stack direction="row" justifyContent="space-between" alignItems="center">
						<Stack direction="row" alignItems="center" spacing={1}>
							<Chip size="small" label="Category" variant="outlined" className="chip" />
							<Rating name="read-only" value={3} readOnly sx={{ fontSize: '1.2rem' }} />
							<Typography sx={{ fontSize: '0.85rem' }}>(242)</Typography>
						</Stack>

						<Tooltip title="View Recipe" placement="top">
							<IconButton onClick={handleClickOpen}>
								<KeyboardArrowUpIcon sx={{ fontSize: '1.7rem' }} />
							</IconButton>
						</Tooltip>
					</Stack>

					<Stack direction="row" spacing={1} alignItems="center">
						<RestaurantIcon sx={{ color: '#b0b0b0', fontSize: '1.3rem' }} />
						<Typography>{recipe.servings}</Typography>
						{recipe.cookTime && (recipe.cookTime.hours || recipe.cookTime.minutes || recipe.cookTime.seconds) ? (
							<>
								<AvTimerIcon sx={{ color: '#a1a1a1', fontSize: '1.5rem' }} />
								<Typography>
									{String(recipe.cookTime.hours).padStart(2, '0')}:{String(recipe.cookTime.minutes).padStart(2, '0')}:
									{String(recipe.cookTime.seconds).padStart(2, '0')}
								</Typography>
							</>
						) : null}
					</Stack>

					<CardActions className="card-actions" sx={{ padding: '8px 0' }}>
						<Stack direction="row" alignItems="center" spacing={1}>
							<Avatar src="../public/pfp.jpg" sx={{ width: 24, height: 24 }} />
							<Typography sx={{ fontSize: '0.8rem' }}>Recipe Author Name</Typography>
						</Stack>
						<Stack direction="row" alignItems="center" spacing={1} pr={1.2}>
							<Typography sx={{ fontSize: '0.9rem', color: '#777' }}>123</Typography>
							<FavoriteIcon sx={{ fontSize: '1.3rem', color: '#777' }} />
						</Stack>
					</CardActions>
				</Stack>
			</Stack>
		</Card>
	);
}
