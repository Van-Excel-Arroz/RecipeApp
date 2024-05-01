import { Link } from 'react-router-dom';
import { Box, Button, Typography, Card, CardContent, Stack } from '@mui/material';

import DinnerDiningIcon from '@mui/icons-material/DinnerDining';
import Diversity2Icon from '@mui/icons-material/Diversity2';
import ConnectWithoutContactIcon from '@mui/icons-material/ConnectWithoutContact';

export default function RecipeLandingPage() {
	return (
		<>
			<Box sx={{ width: '100%', mx: 'auto', position: 'relative', overflow: 'hidden' }}>
				<Box
					sx={{
						width: '65%',
						height: '89vh',
						pl: '4rem',
						display: 'flex',
						flexDirection: 'column',
						alignItems: 'start',
						justifyContent: 'center',
						overflow: 'auto',
					}}
				>
					<Typography variant="h5">Your Ultimate Culinary Community</Typography>
					<Typography variant="h2" sx={{ fontWeight: '400' }}>
						Discover and Share Delicious Recipes
					</Typography>

					<Button variant="contained" sx={{ fontSize: '1rem', borderRadius: '50px', m: '1rem 0 2rem 0' }}>
						<Link to="/dashboard" style={{ textDecoration: 'none', color: '#000' }}>
							Get Started
						</Link>
					</Button>

					<Stack direction="row" spacing={4} mt={1}>
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
					</Stack>
					<img
						src="../public/food-bg.png"
						style={{
							width: '40%',
							height: '100%',
							objectFit: 'contain',
							position: 'absolute',
							top: 0,
							right: -80,
							overflowY: 'hidden',
						}}
					/>
				</Box>
			</Box>
		</>
	);
}
