import {
	Typography,
	IconButton,
	Dialog,
	AppBar,
	Toolbar,
	Tooltip,
	Slide,
	Box,
	Avatar,
	Stack,
	Chip,
	Rating,
} from '@mui/material/';

import React from 'react';
import CloseIcon from '@mui/icons-material/Close';
import DeleteIcon from '@mui/icons-material/Delete';
import RestaurantIcon from '@mui/icons-material/Restaurant';
import AvTimerIcon from '@mui/icons-material/AvTimer';

const Transition = React.forwardRef(function Transition(props, ref) {
	return <Slide direction="up" ref={ref} {...props} />;
});

export default function RecipeDetailsDialog({ open, handleClose, onRemoveRecipe, recipe, image }) {
	return (
		<Dialog fullScreen open={open} onClose={handleClose} TransitionComponent={Transition}>
			<AppBar sx={{ width: '100%' }}>
				<Toolbar sx={{ display: 'flex', justifyContent: 'space-between' }}>
					<Stack display="flex" flexDirection="row" alignItems="center">
						<Avatar src="../public/pfp.jpg" />
						<Typography sx={{ fontSize: '1.3rem', ml: '0.5rem' }}>Recipe Author Name</Typography>
					</Stack>
					<Stack display="flex" flexDirection="row" alignItems="center">
						<Tooltip title="Delete" placement="top">
							<IconButton onClick={() => onRemoveRecipe(recipe.id)}>
								<DeleteIcon sx={{ color: '#f54d4d' }} />
							</IconButton>
						</Tooltip>
						<IconButton edge="end" onClick={handleClose}>
							<CloseIcon />
						</IconButton>
					</Stack>
				</Toolbar>
			</AppBar>
			<Box sx={{ width: '80%', mx: 'auto', mt: '7rem' }}>
				<Typography sx={{ fontSize: '4rem', lineHeight: '4rem', mb: '1rem', wordBreak: 'break-word' }}>
					{recipe.title}
				</Typography>

				<Stack direction="row" alignItems="center" justifyContent="space-between" mb={2}>
					<Stack direction="row" spacing={1}>
						<Chip size="large" label="Category" variant="outlined" className="chip" sx={{ fontSize: '1.2rem' }} />
						<Rating name="read-only" value={3} readOnly sx={{ fontSize: '2rem' }} />
						<Typography sx={{ fontSize: '1.5rem' }}>(242)</Typography>
					</Stack>

					<Stack direction="row" spacing={1} alignItems="center" mb={1}>
						{recipe.servings ? (
							<>
								<RestaurantIcon sx={{ color: '#5e5e5e', fontSize: '2rem' }} />
								<Typography fontSize={30}>{recipe.servings}</Typography>
							</>
						) : null}
						{recipe.cookTime && (recipe.cookTime.hours || recipe.cookTime.minutes || recipe.cookTime.seconds) ? (
							<>
								<AvTimerIcon sx={{ color: '#5e5e5e', fontSize: '2.5rem' }} />
								<Typography fontSize={30}>
									{String(recipe.cookTime.hours).padStart(2, '0')}:{String(recipe.cookTime.minutes).padStart(2, '0')}:
									{String(recipe.cookTime.seconds).padStart(2, '0')}
								</Typography>
							</>
						) : null}
					</Stack>
				</Stack>

				<Box
					height={600}
					width={'100%'}
					sx={{ objectFit: 'cover', borderRadius: '10px', mb: '1rem' }}
					component="img"
					src={image}
				></Box>

				<Typography sx={{ fontSize: '3rem' }}>Description</Typography>
				<Typography sx={{ fontSize: '1.1rem', mb: '1rem' }}>{recipe.description}</Typography>

				<Box display="flex">
					<Box flex={1} pr={5}>
						<Typography sx={{ fontSize: '3rem' }}>Ingredients</Typography>
						<Typography>{recipe.ingredients}</Typography>
					</Box>

					<Box flex={2}>
						<Typography sx={{ fontSize: '3rem' }}>Instructions</Typography>
						<Typography>{recipe.instructions}</Typography>
					</Box>
				</Box>
			</Box>
		</Dialog>
	);
}
