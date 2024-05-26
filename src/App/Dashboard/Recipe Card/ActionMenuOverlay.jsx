import { Stack, Typography, IconButton, Tooltip, Fade, Menu, MenuItem, Box } from '@mui/material/';

import MoreVertOutlinedIcon from '@mui/icons-material/MoreVertOutlined';
import FavoriteBorderOutlinedIcon from '@mui/icons-material/FavoriteBorderOutlined';
import FavoriteIcon from '@mui/icons-material/Favorite';
import BookmarkAddOutlinedIcon from '@mui/icons-material/BookmarkAddOutlined';
import BookmarkAddIcon from '@mui/icons-material/BookmarkAdd';
import EditIcon from '@mui/icons-material/Edit';
import ShareIcon from '@mui/icons-material/Share';
import InfoIcon from '@mui/icons-material/Info';

import { useState } from 'react';

export default function ActionMenuOverlay({ hover, onHandleClickOpen, handleLikedCount }) {
	const [anchorEl, setAnchorEl] = useState(null);
	const open = Boolean(anchorEl);

	const [isLiked, setIsLiked] = useState(false);
	const [isBookmarked, setIsBookmarked] = useState(false);

	const handleClick = event => {
		setAnchorEl(event.currentTarget);
	};

	const handleClose = () => {
		setAnchorEl(null);
	};

	const handleLiked = () => {
		if (isLiked) {
			handleLikedCount(-1);
		} else {
			handleLikedCount(1);
		}
		setIsLiked(!isLiked);
	};

	const handleBookmarked = () => {
		setIsBookmarked(!isBookmarked);
	};

	const handleMultipleActions = () => {
		onHandleClickOpen();
		handleClose();
	};

	return (
		<Fade in={hover}>
			<Stack className="hover-actions-overlay" direction="row" justifyContent="space-between">
				<Tooltip title="More">
					<IconButton onClick={handleClick}>
						<Box className="actions-overlay">
							<MoreVertOutlinedIcon />
						</Box>
					</IconButton>
				</Tooltip>

				<Menu anchorEl={anchorEl} open={open} onClose={handleClose}>
					<MenuItem onClick={handleClose}>
						<EditIcon sx={{ fontSize: '1rem' }}></EditIcon>
						<Typography pl={1}>Edit</Typography>
					</MenuItem>

					<MenuItem onClick={handleClose}>
						<ShareIcon sx={{ fontSize: '1rem' }}></ShareIcon>
						<Typography pl={1}>Share</Typography>
					</MenuItem>

					<MenuItem onClick={handleMultipleActions}>
						<InfoIcon sx={{ fontSize: '1rem' }}></InfoIcon>
						<Typography pl={1}>More Info</Typography>
					</MenuItem>
				</Menu>

				<Stack direction="row">
					<Tooltip title="Like">
						<IconButton onClick={handleLiked}>
							<Box className="actions-overlay">
								{isLiked ? <FavoriteIcon sx={{ color: 'red' }} /> : <FavoriteBorderOutlinedIcon />}
							</Box>
						</IconButton>
					</Tooltip>

					<Tooltip title="Bookmark">
						<IconButton onClick={handleBookmarked}>
							<Box className="actions-overlay">
								{isBookmarked ? <BookmarkAddIcon sx={{ color: 'blue' }} /> : <BookmarkAddOutlinedIcon />}
							</Box>
						</IconButton>
					</Tooltip>
				</Stack>
			</Stack>
		</Fade>
	);
}
