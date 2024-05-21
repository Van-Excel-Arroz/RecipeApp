import { Link } from 'react-router-dom';
import { AppBar, Toolbar, FormControlLabel, Switch } from '@mui/material';
import LightModeOutlinedIcon from '@mui/icons-material/LightModeOutlined';
import DarkModeOutlinedIcon from '@mui/icons-material/DarkModeOutlined';
import './CSS/RecipeNav.css';
import RecipeAppLogo from './Components/RecipeAppLogo';

export default function RecipeNavbar({ theme, onThemeChange }) {
	return (
		<AppBar position="sticky" className="nav">
			<Toolbar className="content">
				<Link to="/">
					<RecipeAppLogo />
				</Link>
				<FormControlLabel
					control={<Switch onChange={onThemeChange} />}
					label={
						theme === 'dark' ? (
							<LightModeOutlinedIcon sx={{ marginTop: 1 }} />
						) : (
							<DarkModeOutlinedIcon sx={{ marginTop: 1 }} />
						)
					}
				/>
			</Toolbar>
		</AppBar>
	);
}
