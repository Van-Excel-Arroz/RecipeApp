import { Link } from 'react-router-dom';
import { Box, Button, Typography, Card, CardContent, Stack } from '@mui/material';

import DinnerDiningIcon from '@mui/icons-material/DinnerDining';
import Diversity2Icon from '@mui/icons-material/Diversity2';
import ConnectWithoutContactIcon from '@mui/icons-material/ConnectWithoutContact';

export default function RecipeLandingPage() {
	return (
		<>
			<Box sx={{ width: '100%', mx: 'auto', position: 'relative' }}>
				<Box
					sx={{
						width: '65%',
						p: '4rem',
						display: 'flex',
						flexDirection: 'column',
						alignItems: 'start',
						justifyContent: 'center',
					}}
				>
					<Typography variant="h4">Your Ultimate Culinary Community</Typography>
					<Typography variant="h1" sx={{ fontWeight: '400' }}>
						Discover and Share Delicious Recipes
					</Typography>
					<Button variant="contained" sx={{ fontSize: '1.5rem', borderRadius: '50px', m: '2rem 1.4rem' }}>
						<Link to="/dashboard" style={{ textDecoration: 'none', color: '#000' }}>
							Get Started
						</Link>
					</Button>

					<Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
						<Card sx={{ maxWidth: 185, border: '1px solid black', textAlign: 'center' }}>
							<CardContent>
								<DinnerDiningIcon sx={{ fontSize: '4rem' }} />
								<Typography>Discover a wide variety of recipes</Typography>
							</CardContent>
						</Card>

						<Card sx={{ maxWidth: 185, border: '1px solid black', textAlign: 'center' }}>
							<CardContent>
								<Diversity2Icon sx={{ fontSize: '4rem' }} />
								<Typography>Connect with other food enthusiasts.</Typography>
							</CardContent>
						</Card>

						<Card sx={{ maxWidth: 185, border: '1px solid black', textAlign: 'center' }}>
							<CardContent>
								<ConnectWithoutContactIcon sx={{ fontSize: '4rem' }} />
								<Typography>Share your favorite recipes with the community</Typography>
							</CardContent>
						</Card>
					</Box>
				</Box>
				<img
					src="../public/food-bg.png"
					style={{
						width: '50%',
						objectFit: 'contain',
						position: 'absolute',
						top: 0,
						right: -100,
						overflowY: 'hidden',
					}}
				/>
			</Box>
		</>
	);
}
