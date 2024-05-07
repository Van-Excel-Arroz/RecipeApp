import { BrowserRouter, Routes, Route } from 'react-router-dom';
import RecipeLayout from './RecipeLayout';
import './CSS/RecipeApp.css';

import RecipeDashboard from './Dashboard/RecipeDashboard';
import RecipeLandingPage from './Landing Page/RecipeLandingPage';

export default function RecipeApp() {
	return (
		<>
			<BrowserRouter>
				<Routes>
					<Route
						path="/"
						element={
							<RecipeLayout>
								<RecipeLandingPage />
							</RecipeLayout>
						}
					/>
					<Route
						path="/dashboard"
						element={
							<RecipeLayout>
								<RecipeDashboard />
							</RecipeLayout>
						}
					/>
				</Routes>
			</BrowserRouter>
		</>
	);
}

//Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum velit doloribus voluptatum nam, fuga nihil fugiat excepturi corporis quos error illum amet nulla animi officia nesciunt dicta quidem, distinctio commodi?

/* */
