import { createTheme } from '@mui/material/styles';
import { red } from '@mui/material/colors';

// Create a theme instance.
const theme = createTheme({
	typography: {
		fontFamily: [
		  '-apple-system',
		  'BlinkMacSystemFont',
		  '"Segoe UI"',
		  'Roboto',
		  '"Helvetica Neue"',
		  'Arial',
		  'sans-serif',
		  '"Apple Color Emoji"',
		  '"Segoe UI Emoji"',
		  '"Segoe UI Symbol"',
		].join(','),
	  },
  palette: {
    primary: {
      main: '#000000',
	  paper: '#40E0D0'
    },
    secondary: {
      main: '#C5F5F0',
    },
    error: {
      main: red.A400,
    },
	background: {
		default: "#edfcfa"
	  },
  },
});

export default theme;
