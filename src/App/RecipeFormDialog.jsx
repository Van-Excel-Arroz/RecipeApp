import React from 'react';
import { useState } from 'react';
import {
	Button,
	Dialog,
	DialogContent,
	DialogTitle,
	DialogActions,
	IconButton,
	Slide,
	Stepper,
	Step,
	StepLabel,
	Typography,
	Stack,
} from '@mui/material';

import CloseIcon from '@mui/icons-material/Close';
import RecipeForm from './RecipeForm';

const Transition = React.forwardRef(function Transition(props, ref) {
	return <Slide direction="up" ref={ref} {...props} />;
});

const steps = ['General Information', 'Instructions', 'Ingredients', 'Additional Details', 'Optional Details'];

function getStepContent(stepIndex) {
	switch (stepIndex) {
		case 0:
			return <Typography>Zero</Typography>;
		case 1:
			return <Typography>One</Typography>;
		case 2:
			return <Typography>Two</Typography>;
		case 3:
			return <Typography>Three</Typography>;
		case 4:
			return <Typography>Four</Typography>;
		default:
			return 'Unknown Step';
	}
}

export default function RecipeDialog({ onAddRecipe, onHandleClose, open }) {
	const [recipe, setRecipe] = useState({
		title: '',
		ingredients: '',
		instructions: '',
		description: '',
	});

	const [errors, setErrors] = useState({
		title: false,
		ingredients: false,
		instructions: false,
		description: false,
	});

	const emptyTextError = 'This field cannot be empty!';

	const handleInputChange = event => {
		const { name, value } = event.target;
		setRecipe({ ...recipe, [name]: value });
		if (value.trim() !== '') {
			setErrors({ ...errors, [name]: false });
		}
	};

	const handleSubmit = event => {
		event.preventDefault();

		const newErrors = {};
		let isFormValid = true;
		Object.keys(recipe).forEach(key => {
			if (recipe[key].trim() === '') {
				newErrors[key] = true;
				isFormValid = false;
			} else {
				newErrors[key] = false;
			}
		});

		if (isFormValid) {
			console.log('Submitting a new recipe', recipe);
			onAddRecipe(recipe);
			setRecipe({
				title: '',
				ingredients: '',
				instructions: '',
				description: '',
			}); //this will clear the form
			onHandleClose(); // close the dialog
		} else {
			setErrors(newErrors);
		}
	};

	const [activeStep, setActiveStep] = useState(0);

	const handleNext = () => {
		setActiveStep(prevActiveStep => prevActiveStep + 1);
	};

	const handleBack = () => {
		setActiveStep(prevActiveStep => prevActiveStep - 1);
	};

	let isFormAlmostFinished = activeStep === steps.length - 1;

	return (
		<>
			<Dialog
				open={open}
				onClose={onHandleClose}
				TransitionComponent={Transition}
				PaperProps={{
					sx: {
						minHeight: '90vh',
						maxHeight: '90vh',
						width: '80%',
						maxWidth: 'none',
					},
				}}
			>
				<DialogTitle
					sx={{
						display: 'flex',
						justifyContent: 'center',
						alignItems: 'center',
						typography: 'h4',
						boxShadow: 4,
					}}
				>
					Add a new Recipe
				</DialogTitle>
				<IconButton onClick={onHandleClose} sx={{ position: 'absolute', right: 8, top: 8 }}>
					<CloseIcon />
				</IconButton>

				<DialogContent dividers>
					<Stepper activeStep={activeStep} alternativeLabel>
						{steps.map(label => (
							<Step key={label}>
								<StepLabel>{label}</StepLabel>
							</Step>
						))}
					</Stepper>

					{getStepContent(activeStep)}
				</DialogContent>
				<DialogActions sx={{ boxShadow: 4 }}>
					<Stack direction="row" justifyContent="space-between" width="100%">
						<Button disabled={activeStep === 0} onClick={handleBack} variant="contained">
							Back
						</Button>

						<Button
							onClick={isFormAlmostFinished ? handleSubmit : handleNext}
							type={isFormAlmostFinished ? 'submit' : ''}
							variant="contained"
						>
							{isFormAlmostFinished ? 'Create Recipe' : 'Next'}
						</Button>
					</Stack>
				</DialogActions>
			</Dialog>
		</>
	);
}
