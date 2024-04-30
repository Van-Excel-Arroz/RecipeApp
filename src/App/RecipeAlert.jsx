import { Button, Snackbar, Alert } from '@mui/material';

export default function RecipeAlert({ state, setState, message }) {
  const handleCloseAlert = (event, reason) => {
    if (reason === 'clickaway') {
      return;
    }
    setState(false);
  };

  return (
    <Snackbar
      open={state}
      autoHideDuration={6000}
      onClose={handleCloseAlert}
      anchorOrigin={{ vertical: 'bottom', horizontal: 'center' }}
    >
      <Alert severity="success" sx={{ width: '100%' }} onClose={handleCloseAlert}>
        {message}
        <Button
          color="inherit"
          size="small"
          onClick={handleCloseAlert}
          sx={{ marginLeft: '4rem', background: 'none' }}
        >
          UNDO
        </Button>
      </Alert>
    </Snackbar>
  );
}
